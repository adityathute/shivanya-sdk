"use client";

import { useMemo, useState } from "react";
import {
  AuthModal,
  AuthProvider,
  type AuthMode,
  useAuth,
} from "shivanya-auth";
import "./auth-demo.css";

const apiUrl =
  (import.meta.env.VITE_AUTH_API_URL as string | undefined) ??
  "http://localhost:8000";

const defaultAuthUrl =
  (import.meta.env.VITE_AUTH_URL as string | undefined) ?? "";

function AuthStatus() {
  const {
    user,
    loading,
    isAuthenticated,
    logout,
    refreshUser,
    client,
    getAccessToken,
  } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  const readToken = async () => {
    setToken(await getAccessToken());
  };

  if (loading) {
    return <div className="auth-demo-status">Checking session…</div>;
  }

  return (
    <div className="auth-demo-status">
      <div className="auth-demo-status-row">
        <strong>{isAuthenticated ? "Authenticated" : "Not authenticated"}</strong>
        {user?.email && <span>{user.email}</span>}
      </div>

      {isAuthenticated && (
        <div className="auth-demo-actions">
          <button type="button" onClick={refreshUser}>
            Refresh user
          </button>
          <button type="button" onClick={() => client.refresh()}>
            Refresh session
          </button>
          <button type="button" onClick={readToken}>
            Read access token
          </button>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      )}

      {token && (
        <div className="auth-demo-token">
          <span>Access token</span>
          <code>{token}</code>
        </div>
      )}
    </div>
  );
}

function AuthDemoContent({
  mode,
  authUrl,
}: {
  mode: AuthMode;
  authUrl: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const config = useMemo(
    () => ({
      baseUrl: apiUrl,
      mode,
      authUrl: authUrl || undefined,
    }),
    [mode, authUrl],
  );

  const openHostedAuth = () => {
    const client = new (require("shivanya-auth").AuthClient)(config);
    client.redirectToAuth(window.location.href);
  };

  return (
    <AuthProvider key={mode} config={config}>
      <div className="auth-demo-panel">
        <div className="auth-demo-header">
          <div>
            <h2>{mode === "cookie" ? "Cookie mode" : "Token mode"}</h2>
            <p>
              {mode === "cookie"
                ? "Browser session using HttpOnly cookies."
                : "Access and refresh tokens with Bearer authentication."}
            </p>
          </div>
          <span className="auth-demo-badge">{mode}</span>
        </div>

        <div className="auth-demo-actions">
          <button type="button" onClick={() => setModalOpen(true)}>
            Open Auth Modal
          </button>
          <button
            type="button"
            disabled={!authUrl}
            onClick={openHostedAuth}
          >
            Open Hosted Auth
          </button>
        </div>

        {!authUrl && (
          <p className="auth-demo-help">
            Set <code>VITE_AUTH_URL</code> to enable hosted Auth redirect.
          </p>
        )}

        <AuthStatus />

        <AuthModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </AuthProvider>
  );
}

export default function AuthDemo() {
  const [mode, setMode] = useState<AuthMode>("cookie");
  const [authUrl, setAuthUrl] = useState(defaultAuthUrl);

  return (
    <section className="demo auth-demo">
      <div className="auth-demo-title">
        <div>
          <h1>Auth V2</h1>
          <p>Test Cookie and Token authentication with the Auth UI.</p>
        </div>

        <div className="auth-demo-mode">
          <button
            type="button"
            className={mode === "cookie" ? "active" : ""}
            onClick={() => setMode("cookie")}
          >
            Cookie
          </button>
          <button
            type="button"
            className={mode === "token" ? "active" : ""}
            onClick={() => setMode("token")}
          >
            Token
          </button>
        </div>
      </div>

      <label className="auth-demo-input">
        <span>Hosted Auth URL</span>
        <input
          value={authUrl}
          onChange={(event) => setAuthUrl(event.target.value)}
          placeholder="http://localhost:3000/auth"
        />
      </label>

      <AuthDemoContent mode={mode} authUrl={authUrl} />
    </section>
  );
}
