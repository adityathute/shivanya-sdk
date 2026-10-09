import type {
  ApiResponse,
  AuthConfig,
  AuthSession,
  AuthTokenResponse,
  AuthUser,
  ChangePasswordInput,
  LoginInput,
  ProfileInput,
  RegisterInput,
  ResetPasswordInput,
  UpdateSettingsInput
} from "./types";
import { AuthError } from "./types";
import { createAuthRedirectUrl } from "./redirect";
import { MemoryAuthTokenStorage, type AuthTokenPair, type AuthTokenStorage } from "./token-storage";

const unsafeMethods = new Set(["POST", "PUT", "PATCH", "DELETE"]);

function trimUrl(value: string) {
  return value.replace(/\/+$/, "");
}

function readCookie(name: string) {
  if (typeof document === "undefined") return null;
  const prefix = `${encodeURIComponent(name)}=`;
  const item = document.cookie.split("; ").find((entry) => entry.startsWith(prefix));
  return item ? decodeURIComponent(item.slice(prefix.length)) : null;
}

function extractMessage(data: unknown, fallback: string) {
  if (data && typeof data === "object") {
    const value = data as Record<string, unknown>;
    if (typeof value.message === "string") return value.message;
    if (typeof value.detail === "string") return value.detail;
    if (typeof value.errors === "string") return value.errors;
    if (value.errors && typeof value.errors === "object") {
      const errors = value.errors as Record<string, unknown>;
      for (const item of Object.values(errors)) {
        if (Array.isArray(item) && typeof item[0] === "string") return item[0];
        if (typeof item === "string") return item;
      }
    }
  }
  return fallback;
}

function readTokenPair(data: unknown): AuthTokenPair | null {
  if (!data || typeof data !== "object") return null;
  const value = data as Record<string, unknown>;
  const accessToken = typeof value.accessToken === "string"
    ? value.accessToken
    : typeof value.access_token === "string"
      ? value.access_token
      : null;
  const refreshToken = typeof value.refreshToken === "string"
    ? value.refreshToken
    : typeof value.refresh_token === "string"
      ? value.refresh_token
      : null;

  if (!accessToken) return null;
  return { accessToken, refreshToken };
}

export class AuthClient {
  private readonly baseUrl: string;
  private readonly apiPrefix: string;
  private readonly mode: NonNullable<AuthConfig["mode"]>;
  private readonly authUrl?: string;
  private readonly csrfCookieName: string;
  private readonly csrfHeaderName: string;
  private readonly credentials: RequestCredentials;
  private readonly tokenRefreshPath: string;
  private readonly tokenStorage: AuthTokenStorage;
  private csrfToken: string | null = null;
  private refreshPromise: Promise<boolean> | null = null;

  constructor(config: AuthConfig) {
    this.baseUrl = trimUrl(config.baseUrl);
    this.apiPrefix = `/${(config.apiPrefix ?? "api/v1").replace(/^\/+|\/+$/g, "")}`;
    this.mode = config.mode ?? "cookie";
    this.authUrl = config.authUrl;
    this.csrfCookieName = config.csrfCookieName ?? "csrftoken";
    this.csrfHeaderName = config.csrfHeaderName ?? "X-CSRFToken";
    this.credentials = config.credentials ?? (this.mode === "cookie" ? "include" : "omit");
    this.tokenRefreshPath = config.tokenRefreshPath ?? "auth/refresh/";
    this.tokenStorage = config.tokenStorage ?? new MemoryAuthTokenStorage();
  }

  private url(path: string) {
    return `${this.baseUrl}${this.apiPrefix}/${path.replace(/^\/+/, "")}`;
  }

  private async getCsrfToken() {
    if (this.csrfToken) return this.csrfToken;

    const response = await fetch(this.url("auth/csrf/"), {
      method: "GET",
      credentials: this.credentials,
      headers: { Accept: "application/json" },
    });
    const data = await response.json().catch(() => null) as
      | { data?: { csrfToken?: string; csrf_token?: string }; csrfToken?: string; csrf_token?: string }
      | null;
    const token = data?.data?.csrfToken
      ?? data?.data?.csrf_token
      ?? data?.csrfToken
      ?? data?.csrf_token
      ?? readCookie(this.csrfCookieName);

    if (!response.ok || !token) {
      throw new AuthError("Unable to initialize CSRF protection.", response.status || 500, data);
    }

    this.csrfToken = token;
    return token;
  }

  private async request<T>(path: string, options: RequestInit = {}, retry = true): Promise<T> {
    const method = (options.method ?? "GET").toUpperCase();
    const headers = new Headers(options.headers);
    const bodyIsFormData = typeof FormData !== "undefined" && options.body instanceof FormData;

    if (!bodyIsFormData && options.body !== undefined && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    if (this.mode === "token") {
      headers.set("X-Auth-Token-Mode", "token");

      if (path !== this.tokenRefreshPath) {
        const accessToken = await this.tokenStorage.getAccessToken();

        if (accessToken && !headers.has("Authorization")) {
          headers.set("Authorization", `Bearer ${accessToken}`);
        }
      }
    }

    if (this.mode === "cookie" && unsafeMethods.has(method)) {
      const csrf = readCookie(this.csrfCookieName) ?? await this.getCsrfToken();
      if (csrf) headers.set(this.csrfHeaderName, csrf);
    }

    const response = await fetch(this.url(path), {
      ...options,
      method,
      headers,
      credentials: this.credentials,
    });

    let data: unknown = null;
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      data = await response.json().catch(() => null);
    } else {
      data = await response.text().catch(() => "");
    }

    if (
      response.status === 401 &&
      retry &&
      path !== this.tokenRefreshPath &&
      !path.startsWith("auth/login/") &&
      !path.startsWith("auth/register/") &&
      extractMessage(data, "") !== "Your session has been signed out."
    ) {
      const refreshed = await this.refresh();

      if (refreshed) return this.request<T>(path, options, false);
    }

    if (!response.ok) {
      throw new AuthError(extractMessage(data, "Authentication request failed."), response.status, data);
    }

    return this.unwrap<T>(data);
  }

  private unwrap<T>(data: unknown): T {
    if (data && typeof data === "object" && "data" in data) {
      return (data as ApiResponse<T>).data as T;
    }
    return data as T;
  }

  private json(body: unknown): RequestInit {
    return { method: "POST", body: JSON.stringify(body) };
  }

  async login(input: LoginInput): Promise<AuthUser> {
    const data = await this.request<AuthTokenResponse & { user?: AuthUser }>("auth/login/", this.json(input));
    if (this.mode === "cookie") this.csrfToken = null;
    if (this.mode === "token") {
      const tokens = readTokenPair(data);
      if (!tokens) throw new AuthError("Token authentication response did not contain an access token.", 500, data);
      await this.tokenStorage.setTokens(tokens);
    }
    if (data?.user) return data.user;
    return this.getCurrentUser();
  }

  async register(input: RegisterInput) {
    return this.request<{ id: string; email: string }>("auth/register/", this.json(input));
  }

  async logout() {
    try {
      const refreshToken = this.mode === "token" ? await this.tokenStorage.getRefreshToken() : null;
      return await this.request<unknown>("auth/logout/", this.json(refreshToken ? { refresh_token: refreshToken } : {}), false);
    } finally {
      if (this.mode === "token") await this.tokenStorage.clearTokens();
    }
  }

  async clearAuth() {
    if (this.mode === "token") {
      await this.tokenStorage.clearTokens();
    }
  }

  async refresh() {
    if (!this.refreshPromise) {
      this.refreshPromise = (async () => {
        try {
          const refreshToken = this.mode === "token" ? await this.tokenStorage.getRefreshToken() : null;
          const data = await this.request<AuthTokenResponse>(this.tokenRefreshPath, this.json(
            refreshToken ? { refresh_token: refreshToken } : {},
          ), false);
          if (this.mode === "token") {
            const tokens = readTokenPair(data);
            if (!tokens) {
              await this.tokenStorage.clearTokens();
              return false;
            }
            await this.tokenStorage.setTokens(tokens);
          }
          return true;
        } catch {
          if (this.mode === "token") await this.tokenStorage.clearTokens();
          return false;
        } finally {
          this.refreshPromise = null;
        }
      })();
    }
    return this.refreshPromise;
  }

  async getAccessToken() {
    return this.mode === "token" ? this.tokenStorage.getAccessToken() : null;
  }

  async getCurrentUser() {
    return this.request<AuthUser>("auth/me/");
  }

  async verifyEmail(token: string) {
    return this.request<{ email: string; email_verified: boolean }>("auth/verify-email/", this.json({ token }));
  }

  async resendVerification(email: string) {
    return this.request<unknown>("auth/resend-verification/", this.json({ email }));
  }

  async forgotPassword(email: string) {
    return this.request<unknown>("auth/forgot-password/", this.json({ email }));
  }

  async validateResetPassword(token: string) {
    return this.request<{ valid: boolean }>("auth/validate-reset-password/", this.json({ token }));
  }

  async resetPassword(input: ResetPasswordInput) {
    const result = await this.request<unknown>(
      "auth/reset-password/",
      this.json(input),
    );

    if (this.mode === "token") {
      await this.tokenStorage.clearTokens();
    }

    return result;
  }

  async changePassword(input: ChangePasswordInput) {
    const result = await this.request<unknown>(
      "auth/change-password/",
      this.json(input),
    );

    if (this.mode === "token") {
      await this.tokenStorage.clearTokens();
    }

    return result;
  }

  async deleteAccount(current_password: string) {
    return this.request<{ deletion_at: string }>("auth/delete-account/", this.json({ current_password }));
  }

  async verifyDeleteAccount(current_password: string) {
    return this.request<unknown>("auth/verify-delete-account/", this.json({ current_password }));
  }

  async cancelDeleteAccount() {
    return this.request<unknown>("auth/cancel-delete-account/", this.json({}));
  }

  async getProfile() {
    return this.request<AuthUser>("profile/");
  }

  async updateProfile(input: ProfileInput) {
    const hasFile = input.avatar instanceof File;
    if (!hasFile) {
      return this.request<AuthUser>("profile/", {
        method: "PATCH",
        body: JSON.stringify(input),
      });
    }

    const form = new FormData();
    for (const [key, value] of Object.entries(input)) {
      if (value instanceof File) form.append(key, value);
      else if (value !== undefined && value !== null) form.append(key, String(value));
    }

    return this.request<AuthUser>("profile/", { method: "PATCH", body: form });
  }

  async removeAvatar() {
    return this.request<unknown>("profile/avatar/", { method: "DELETE" });
  }

  async checkUsernameAvailability(
    username: string,
  ): Promise<{ available: boolean; valid: boolean }> {
    return this.request<{ available: boolean; valid: boolean }>(
      `profile/username/?username=${encodeURIComponent(username)}`,
    );
  }

  async updateUsername(username: string) {
    return this.request<AuthUser>("profile/username/", {
      method: "PATCH",
      body: JSON.stringify({ username }),
    });
  }

  async getSessions() {
    return this.request<AuthSession[]>("profile/sessions/");
  }

  async revokeSession(sessionId: string) {
    return this.request<unknown>(`profile/sessions/${encodeURIComponent(sessionId)}/`, { method: "DELETE" });
  }

  async revokeOtherSessions() {
    return this.request<{ revoked: number }>("profile/sessions/other/", this.json({}));
  }

  async getConnections() {
    return this.request<{ google_connected: boolean }>("profile/connections/");
  }

  async connectGoogle(code: string) {
    return this.request<{ google_connected: boolean }>("profile/connections/google/", {
      method: "PATCH",
      body: JSON.stringify({ code }),
    });
  }

  async disconnectGoogle() {
    return this.request<{ google_connected: boolean }>("profile/connections/google/", { method: "DELETE" });
  }

  async updateSettings(input: { theme: string }) {
    return this.request<{ theme: string }>("profile/settings/", {
      method: "PATCH",
      body: JSON.stringify(input),
    });
  }

  googleConnectStartUrl(next?: string) {
    const url = new URL(`${this.baseUrl}${this.apiPrefix}/auth/google/connect/start/`);
    if (next) url.searchParams.set("next", next);
    return url.toString();
  }

  async completeGoogleRedirect(code: string) {
    if (this.mode !== "token") {
      throw new AuthError("Google token exchange is only available in token mode.", 400);
    }

    const data = await this.request<AuthTokenResponse>(
      "auth/google/token-exchange/",
      this.json({ code }),
      false,
    );
    const tokens = readTokenPair(data);
    if (!tokens) {
      throw new AuthError("Google token exchange did not return an access token.", 500, data);
    }
    await this.tokenStorage.setTokens(tokens);
    return data.user ?? null;
  }

  googleStartUrl(next?: string) {
    const url = new URL(`${this.baseUrl}${this.apiPrefix}/auth/google/start/`);
    if (next) url.searchParams.set("next", next);
    url.searchParams.set("mode", this.mode);
    return url.toString();
  }

  authPageUrl(next?: string) {
    if (!this.authUrl) throw new AuthError("authUrl is required for redirect authentication.", 0);
    return createAuthRedirectUrl(this.authUrl, next);
  }

  redirectToAuth(next?: string) {
    const url = this.authPageUrl(next);
    if (typeof window === "undefined") throw new AuthError("Redirect authentication requires a browser.", 0);
    window.location.assign(url);
  }
}
