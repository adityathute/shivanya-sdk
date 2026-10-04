import type {
  ApiResponse,
  AuthConfig,
  AuthSession,
  AuthUser,
  ChangePasswordInput,
  LoginInput,
  ProfileInput,
  RegisterInput,
  ResetPasswordInput,
} from "./types";
import { AuthError } from "./types";

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

export class AuthClient {
  private readonly baseUrl: string;
  private readonly apiPrefix: string;
  private readonly csrfCookieName: string;
  private readonly csrfHeaderName: string;
  private readonly credentials: RequestCredentials;
  private refreshPromise: Promise<boolean> | null = null;

  constructor(config: AuthConfig) {
    this.baseUrl = trimUrl(config.baseUrl);
    this.apiPrefix = `/${(config.apiPrefix ?? "api/v1").replace(/^\/+|\/+$/g, "")}`;
    this.csrfCookieName = config.csrfCookieName ?? "csrfToken";
    this.csrfHeaderName = config.csrfHeaderName ?? "X-CSRFToken";
    this.credentials = config.credentials ?? "include";
  }

  private url(path: string) {
    return `${this.baseUrl}${this.apiPrefix}/${path.replace(/^\/+/, "")}`;
  }

  private async request<T>(path: string, options: RequestInit = {}, retry = true): Promise<T> {
    const method = (options.method ?? "GET").toUpperCase();
    const headers = new Headers(options.headers);
    const bodyIsFormData = typeof FormData !== "undefined" && options.body instanceof FormData;

    if (!bodyIsFormData && options.body !== undefined && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    if (unsafeMethods.has(method)) {
      const csrf = readCookie(this.csrfCookieName);
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

    if (response.status === 401 && retry && !path.startsWith("auth/refresh/") && !path.startsWith("auth/login/") && !path.startsWith("auth/register/")) {
      const refreshed = await this.refresh();
      if (refreshed) return this.request<T>(path, options, false);
    }

    if (!response.ok) {
      throw new AuthError(extractMessage(data, "Authentication request failed."), response.status, data);
    }

    if (data && typeof data === "object" && "data" in data) {
      return (data as ApiResponse<T>).data as T;
    }

    return data as T;
  }

  private json(body: unknown): RequestInit {
    return { method: "POST", body: JSON.stringify(body) };
  }

  async login(input: LoginInput): Promise<AuthUser> {
    await this.request<{ user: Pick<AuthUser, "id" | "email"> }>("auth/login/", this.json(input));
    return this.getCurrentUser();
  }

  async register(input: RegisterInput) {
    return this.request<{ id: string; email: string }>("auth/register/", this.json(input));
  }

  async logout() {
    return this.request<unknown>("auth/logout/", this.json({}));
  }

  async refresh() {
    if (!this.refreshPromise) {
      this.refreshPromise = this.request<unknown>("auth/refresh/", this.json({}), false)
        .then(() => true)
        .catch(() => false)
        .finally(() => {
          this.refreshPromise = null;
        });
    }
    return this.refreshPromise;
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
    return this.request<unknown>("auth/reset-password/", this.json(input));
  }

  async changePassword(input: ChangePasswordInput) {
    return this.request<unknown>("auth/change-password/", this.json(input));
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

  googleConnectStartUrl(next?: string) {
    const url = new URL(
      `${this.baseUrl}${this.apiPrefix}/auth/google/connect/start/`,
    );

    if (next) {
      url.searchParams.set("next", next);
    }

    return url.toString();
  }

  googleStartUrl(next?: string) {
    const url = new URL(`${this.baseUrl}${this.apiPrefix}/auth/google/start/`);
    if (next) url.searchParams.set("next", next);
    return url.toString();
  }
}
