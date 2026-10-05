"use client";

import { useState } from "react";
import { AuthModal, AuthProvider, useAuth } from "shivanya-auth";
import { Button, Typography } from "shivanya-ui";
import "../auth-demo.css";

function AuthProviderTest() {
  const { user, loading, isAuthenticated, refreshUser, logout } = useAuth();

  const [modalOpen, setModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="auth-demo-status">
        <span className="auth-demo-indicator loading" />

        <Typography variant="body">Checking authentication state…</Typography>
      </div>
    );
  }

  return (
    <>
      <div className="auth-demo-panel">
        <div className="auth-demo-status-row">
          <div>
            <Typography variant="body">
              {isAuthenticated ? "Authenticated" : "Not authenticated"}
            </Typography>

            {user?.email && (
              <Typography variant="body">{user.email}</Typography>
            )}
          </div>

          <span
            className={`auth-demo-indicator ${
              isAuthenticated ? "authenticated" : "unauthenticated"
            }`}
          />
        </div>

        {isAuthenticated ? (
          <div className="auth-demo-actions">
            <Button variant="secondary" onClick={refreshUser}>
              Refresh user
            </Button>

            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="auth-demo-actions">
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Login
            </Button>
          </div>
        )}
      </div>

      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default function AuthProviderDemo() {
  return (
    <section className="demo auth-demo">
      <div className="auth-demo-header">
        <div>
          <Typography variant="h2">AuthProvider</Typography>

          <Typography variant="body">
            Provider state and session integration.
          </Typography>
        </div>

        <span className="auth-demo-badge">Provider</span>
      </div>

      <AuthProvider
        config={{
          baseUrl: "http://localhost:8000",
          mode: "cookie",
        }}
      >
        <AuthProviderTest />
      </AuthProvider>
    </section>
  );
}
