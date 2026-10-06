"use client";

import { useState } from "react";
import {
  Button,
  ErrorMessage,
  PasswordInput,
} from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";

export function Security() {
  const { client, logout } = useAuth();

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [deletionPassword, setDeletionPassword] = useState("");

  const changePassword = useAuthAction(async () =>
    client.changePassword({
      current_password: current,
      new_password: next,
      confirm_password: confirm,
    }),
  );

  const deletion = useAuthAction(async () =>
    client.deleteAccount(deletionPassword),
  );

  const hasPasswordFieldErrors =
    Object.keys(changePassword.fieldErrors).length > 0;

  const submitPassword = async () => {
    try {
      await changePassword.run();
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

        {!hasPasswordFieldErrors &&
          changePassword.error && (
            <ErrorMessage size="sm" variant="error">
              {changePassword.error}
            </ErrorMessage>
          )}

        <div className="shivanya-auth-fields">
          <div>
            <PasswordInput
              label="Current password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              fullWidth
              error={changePassword.fieldErrors.current_password}
            />
            {!changePassword.fieldErrors.current_password && null}
          </div>

          <div>
            <PasswordInput
              label="New password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              helperText="At least 8 characters."
              fullWidth
              error={changePassword.fieldErrors.new_password}
            />
            {changePassword.fieldErrors.new_password && (
              <ErrorMessage size="sm" variant="error">
                {changePassword.fieldErrors.new_password}
              </ErrorMessage>
            )}
          </div>

          <div>
            <PasswordInput
              label="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              fullWidth
              error={changePassword.fieldErrors.confirm_password}
            />
            {changePassword.fieldErrors.confirm_password && (
              <ErrorMessage size="sm" variant="error">
                {changePassword.fieldErrors.confirm_password}
              </ErrorMessage>
            )}
          </div>
        </div>

        <Button
          loading={changePassword.loading}
          onClick={submitPassword}
        >
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
          error={deletion.fieldErrors.current_password}
        />

        {deletion.fieldErrors.current_password && (
          <ErrorMessage size="sm" variant="error">
            {deletion.fieldErrors.current_password}
          </ErrorMessage>
        )}

        {!Object.keys(deletion.fieldErrors).length && deletion.error && (
          <ErrorMessage size="sm" variant="error">
            {deletion.error}
          </ErrorMessage>
        )}

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
