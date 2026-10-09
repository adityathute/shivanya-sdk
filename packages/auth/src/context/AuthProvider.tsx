"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AuthClient } from "../client/auth-client";
import type { AuthConfig, AuthUser } from "../client/types";

export interface AuthContextValue {
  client: AuthClient;
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  refreshUser: () => Promise<AuthUser | null>;
  login: (email: string, password: string) => Promise<AuthUser>;
  logout: () => Promise<void>;
  clearAuth: () => void;
  getAccessToken: () => Promise<string | null>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({
  config,
  children,
}: {
  config: AuthConfig;
  children: ReactNode;
}) {
  const client = useMemo(
    () => new AuthClient(config),
    [
      config.baseUrl,
      config.apiPrefix,
      config.mode,
      config.authUrl,
      config.csrfCookieName,
      config.csrfHeaderName,
      config.credentials,
      config.tokenStorage,
      config.tokenRefreshPath,
    ],
  );
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const clearAuth = useCallback(() => {
    setUser(null);
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const nextUser = await client.getCurrentUser();
      setUser(nextUser);
      return nextUser;
    } catch {
      setUser(null);
      return null;
    }
  }, [client]);

  useEffect(() => {
    let active = true;

    const initialize = async () => {
      setLoading(true);
      try {
        const url = new URL(window.location.href);
        const exchangeCode = url.searchParams.get("auth_code");

        if (exchangeCode) {
          url.searchParams.delete("auth_code");
          window.history.replaceState(window.history.state, "", url.toString());
          await client.completeGoogleRedirect(exchangeCode);
        }

        const nextUser = await client.getCurrentUser();
        if (active) setUser(nextUser);
      } catch {
        if (active) {
          setUser(null);
          if (config.mode === "token") await client.clearAuth();
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    void initialize();
    return () => {
      active = false;
    };
  }, [client, config.mode]);

  const login = useCallback(
    async (email: string, password: string) => {
      await client.login({ email, password });

      const fullUser = await client.getCurrentUser();

      setUser(fullUser);

      return fullUser;
    },
    [client],
  );

  const logout = useCallback(async () => {
    try {
      await client.logout();
    } finally {
      setUser(null);
    }
  }, [client]);

  const getAccessToken = useCallback(() => client.getAccessToken(), [client]);

const value = useMemo<AuthContextValue>(
  () => ({
    client,
    user,
    loading,
    isAuthenticated: Boolean(user),
    refreshUser,
    login,
    logout,
    clearAuth,
    getAccessToken,
  }),
  [
    client,
    user,
    loading,
    refreshUser,
    login,
    logout,
    clearAuth,
    getAccessToken,
  ],
);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
