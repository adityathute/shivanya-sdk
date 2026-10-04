export interface AuthTokenPair {
  accessToken: string;
  refreshToken?: string | null;
}

export interface AuthTokenStorage {
  getAccessToken(): string | null | Promise<string | null>;
  getRefreshToken(): string | null | Promise<string | null>;
  setTokens(tokens: AuthTokenPair): void | Promise<void>;
  clearTokens(): void | Promise<void>;
}

export class MemoryAuthTokenStorage implements AuthTokenStorage {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  getAccessToken() {
    return this.accessToken;
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  setTokens(tokens: AuthTokenPair) {
    this.accessToken = tokens.accessToken;
    this.refreshToken = tokens.refreshToken ?? null;
  }

  clearTokens() {
    this.accessToken = null;
    this.refreshToken = null;
  }
}
