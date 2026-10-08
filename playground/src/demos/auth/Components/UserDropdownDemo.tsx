"use client";

import { useState } from "react";
import {
  AuthModal,
  AuthProvider,
  UserDropdown,
  useAuth,
  type UserDropdownView,
} from "shivanya-auth";
import { Typography } from "shivanya-ui";
import "../auth-demo.css";

function UserDropdownTest() {
  const { loading } = useAuth();

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

  const handleNavigate = (view: UserDropdownView) => {
    console.log(`Navigate to ${view}`);
  };

  return (
    <>
      <div className="user-dropdown-demo">
        <UserDropdown
          onNavigate={handleNavigate}
          onLogin={() => setModalOpen(true)}
          onRegister={() => setModalOpen(true)}
        />
      </div>

      <AuthModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default function UserDropdownDemo() {
  return (
    <section className="demo auth-demo">
      <AuthProvider
        config={{
          baseUrl: "http://localhost:8000",
          mode: "cookie",
        }}
      >
        <UserDropdownTest />
      </AuthProvider>
    </section>
  );
}