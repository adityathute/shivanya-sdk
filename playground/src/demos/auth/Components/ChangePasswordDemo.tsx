"use client";

import { useState } from "react";
import { AuthProvider, useAuth } from "shivanya-auth";

function ChangePasswordForm() {
  const { user, loading, isAuthenticated, client, refreshUser } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <p>Please log in first to change your password.</p>;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      await client.changePassword({
        current_password: currentPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      });

      setMessage("Password changed successfully. Please sign in again.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      await refreshUser();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to change password.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <p>Status: Logged in</p>

      {user && <p>User: {user.email}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Current password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            required
          />
        </div>

        <div>
          <label>New password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Confirm new password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Changing..." : "Change Password"}
        </button>
      </form>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default function ChangePasswordDemo() {
  return (
    <section className="demo">
      <h1>Change Password</h1>
      <p>Authenticated password change integration check.</p>

      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <ChangePasswordForm />
      </AuthProvider>
    </section>
  );
}