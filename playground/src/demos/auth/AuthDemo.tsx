"use client";

import { useMemo, useState } from "react";
import {
  AuthClient,
  AuthModal,
  AuthProvider,
  type AuthMode,
  useAuth,
} from "shivanya-auth";
import { Button, Input, Typography } from "shivanya-ui";
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
    return (
      <div className="auth-demo-status">
        <Typography variant="body">
          Checking session…
        </Typography>
      </div>
    );
  }

  return (
    <div className="auth-demo-status">
      <div className="auth-demo-status-row">
        <div>
          <Typography variant="body">
            {isAuthenticated
              ? "Authenticated"
              : "Not authenticated"}
          </Typography>

          {user?.email && (
            <Typography variant="body">
              {user.email}
            </Typography>
          )}
        </div>

        <span
          className={`auth-demo-indicator ${
            isAuthenticated ? "authenticated" : ""
          }`}
        />
      </div>

      {isAuthenticated && (
        <div className="auth-demo-actions">
          <Button
            variant="secondary"
            onClick={refreshUser}
          >
            Refresh user
          </Button>

          <Button
            variant="secondary"
            onClick={() => client.refresh()}
          >
            Refresh session
          </Button>

          <Button
            variant="secondary"
            onClick={readToken}
          >
            Read access token
          </Button>

          <Button
            variant="danger"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      )}

      {token && (
        <div className="auth-demo-token">
          <Typography variant="body">
            Access token
          </Typography>

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
    const client = new AuthClient(config);
    client.redirectToAuth(window.location.href);
  };

  return (
    <AuthProvider key={mode} config={config}>
      <div className="auth-demo-panel">
        <div className="auth-demo-header">
          <div>
            <Typography variant="h2">
              {mode === "cookie"
                ? "Cookie mode"
                : "Token mode"}
            </Typography>

            <Typography variant="body">
              {mode === "cookie"
                ? "Browser session using HttpOnly cookies."
                : "Access and refresh tokens with Bearer authentication."}
            </Typography>
          </div>

          <span className="auth-demo-badge">
            {mode}
          </span>
        </div>

        <div className="auth-demo-actions">
          <Button
            variant="primary"
            onClick={() => setModalOpen(true)}
          >
            Open Auth Modal
          </Button>

          <Button
            variant="secondary"
            disabled={!authUrl}
            onClick={openHostedAuth}
          >
            Open Hosted Auth
          </Button>
        </div>

        {!authUrl && (
          <Typography variant="body">
            Set <code>VITE_AUTH_URL</code> to enable hosted Auth
            redirect.
          </Typography>
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
          <Typography variant="h1">
            Auth
          </Typography>

          <Typography variant="body">
            Test Cookie and Token authentication with the Auth UI.
          </Typography>
        </div>

        <div className="auth-demo-mode">
          <Button
            variant={mode === "cookie" ? "primary" : "secondary"}
            onClick={() => setMode("cookie")}
          >
            Cookie
          </Button>

          <Button
            variant={mode === "token" ? "primary" : "secondary"}
            onClick={() => setMode("token")}
          >
            Token
          </Button>
        </div>
      </div>

      <div className="auth-demo-input">
        <Input
          label="Hosted Auth URL"
          value={authUrl}
          onChange={(event) => setAuthUrl(event.target.value)}
          placeholder="http://localhost:3000/auth"
          fullWidth
        />
      </div>

      <AuthDemoContent
        mode={mode}
        authUrl={authUrl}
      />
    </section>
  );
}