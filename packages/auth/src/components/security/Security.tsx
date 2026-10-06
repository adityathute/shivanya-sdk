"use client";

import { useState } from "react";
import {
  Button,
  ErrorMessage,
  PasswordInput,
} from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export function Security() {
  const { logout } = useAuth();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [deletionPassword, setDeletionPassword] = useState("");

  const {
    run,
    loading,
    error,
    fieldErrors,
  } = useAuthAction(async () =>
    useAuth().client.changePassword({
      current_password: current,
      new_password: next,
      confirm_password: confirm,
    }),
  );

  const deletion = useAuthAction(async () =>
    useAuth().client.deleteAccount(deletionPassword),
  );

  const hasPasswordFieldErrors =
    Object.keys(fieldErrors).length > 0;

  const submitPassword = async () => {
    try {
      await run();
      setCurrent("");
      setNext("");
      setConfirm("");
      await logout();
    } catch {}
  };

  const scheduleDeletion = async () => {
    if (!window.confirm("Schedule this account for deletion?")) return;

    try {
      await deletion.run();
    } catch {}
  };

  return (
    <div className="shivanya-account-section">
      <div className="shivanya-account-section-header">
        <div>
          <h3>Security</h3>
          <p>Protect your account and manage sensitive actions.</p>
        </div>
      </div>

      <section className="shivanya-security-card">
        <h4>Change password</h4>
        <p>Use a new password you do not reuse elsewhere.</p>

        {!hasPasswordFieldErrors && (
          <AuthMessage message={error} />
        )}

        <div className="shivanya-auth-fields">
          <div>
            <PasswordInput
              label="Current password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              fullWidth
              error={fieldErrors.current_password}
            />

            {fieldErrors.current_password && (
              <ErrorMessage size="sm" variant="error">
                {fieldErrors.current_password}
              </ErrorMessage>
            )}
          </div>

          <div>
            <PasswordInput
              label="New password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              helperText="At least 8 characters."
              fullWidth
              error={fieldErrors.new_password}
            />

            {fieldErrors.new_password && (
              <ErrorMessage size="sm" variant="error">
                {fieldErrors.new_password}
              </ErrorMessage>
            )}
          </div>

          <div>
            <PasswordInput
              label="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              fullWidth
              error={fieldErrors.confirm_password}
            />

            {fieldErrors.confirm_password && (
              <ErrorMessage size="sm" variant="error">
                {fieldErrors.confirm_password}
              </ErrorMessage>
            )}
          </div>
        </div>

        <Button loading={loading} onClick={submitPassword}>
          Change password
        </Button>
      </section>

      <section className="shivanya-security-card shivanya-security-danger">
        <h4>Delete account</h4>
        <p>
          Your account can be scheduled for deletion. This action should only be
          used when you are sure.
        </p>

        <PasswordInput
          label="Current password"
          value={deletionPassword}
          onChange={(e) => setDeletionPassword(e.target.value)}
          fullWidth
        />

        <AuthMessage message={deletion.error} />

        <Button
          variant="danger"
          loading={deletion.loading}
          onClick={scheduleDeletion}
        >
          Schedule account deletion
        </Button>
      </section>

      <Button variant="outline" onClick={() => logout()}>
        Sign out
      </Button>
    </div>
  );
}
