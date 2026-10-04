"use client";

import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
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
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ config, children }: { config: AuthConfig; children: ReactNode }) {
  const client = useMemo(() => new AuthClient(config), [config.baseUrl, config.apiPrefix, config.csrfCookieName, config.csrfHeaderName, config.credentials]);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    client.getCurrentUser()
      .then((nextUser) => { if (active) setUser(nextUser); })
      .catch(() => { if (active) setUser(null); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [client]);

  const login = useCallback(async (email: string, password: string) => {
    const nextUser = await client.login({ email, password });
    setUser(nextUser);
    return nextUser;
  }, [client]);

  const logout = useCallback(async () => {
    try { await client.logout(); } finally { setUser(null); }
  }, [client]);

  const value = useMemo<AuthContextValue>(() => ({
    client,
    user,
    loading,
    isAuthenticated: Boolean(user),
    refreshUser,
    login,
    logout,
  }), [client, user, loading, refreshUser, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
