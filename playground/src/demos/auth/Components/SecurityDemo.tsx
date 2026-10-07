"use client";

import { useState } from "react";
import {
  AuthModal,
  AuthProvider,
  Security,
  useAuth,
} from "shivanya-auth";
import { Button, Typography } from "shivanya-ui";
import "../auth-demo.css";

function SecurityTest() {
  const { loading, isAuthenticated } = useAuth();

  const [modalOpen, setModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="auth-demo-status">
        <span className="auth-demo-indicator loading" />

        <Typography variant="body">
          Checking authentication state…
        </Typography>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="auth-demo-panel">
          <div className="auth-demo-actions">
            <Button
              variant="primary"
              onClick={() => setModalOpen(true)}
            >
              Login
            </Button>
          </div>
        </div>

        <AuthModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </>
    );
  }

  return <Security />;
}

export default function SecurityDemo() {
  return (
    <section className="demo auth-demo">
      <AuthProvider
        config={{
          baseUrl: "http://localhost:8000",
          mode: "cookie",
        }}
      >
        <SecurityTest />
      </AuthProvider>
    </section>
  );
}