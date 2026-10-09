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


export class SessionAuthTokenStorage implements AuthTokenStorage {
  private readonly fallback = new MemoryAuthTokenStorage();
  private readonly accessKey: string;
  private readonly refreshKey: string;

  constructor(key = "shivanya.auth") {
    this.accessKey = `${key}.access`;
    this.refreshKey = `${key}.refresh`;
  }

  private storage(): Storage | null {
    try {
      return typeof window !== "undefined" ? window.sessionStorage : null;
    } catch {
      return null;
    }
  }

  getAccessToken() {
    try {
      return this.storage()?.getItem(this.accessKey) ?? this.fallback.getAccessToken();
    } catch {
      return this.fallback.getAccessToken();
    }
  }

  getRefreshToken() {
    try {
      return this.storage()?.getItem(this.refreshKey) ?? this.fallback.getRefreshToken();
    } catch {
      return this.fallback.getRefreshToken();
    }
  }

  setTokens(tokens: AuthTokenPair) {
    try {
      const storage = this.storage();
      if (storage) {
        storage.setItem(this.accessKey, tokens.accessToken);
        if (tokens.refreshToken) storage.setItem(this.refreshKey, tokens.refreshToken);
        else storage.removeItem(this.refreshKey);
        return;
      }
    } catch {
      // Fall back to in-memory storage when browser storage is unavailable.
    }
    this.fallback.setTokens(tokens);
  }

  clearTokens() {
    try {
      const storage = this.storage();
      storage?.removeItem(this.accessKey);
      storage?.removeItem(this.refreshKey);
    } catch {
      // Continue clearing the in-memory fallback.
    }
    this.fallback.clearTokens();
  }
}
