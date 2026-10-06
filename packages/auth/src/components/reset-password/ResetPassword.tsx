"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  Button,
  CheckIcon,
  ErrorMessage,
  LockIcon,
  PasswordInput,
  Typography,
} from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export interface ResetPasswordProps {
  token: string;
  onComplete?: () => void;
}

export function ResetPassword({ token, onComplete }: ResetPasswordProps) {
  const { client } = useAuth();

  const [valid, setValid] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [completed, setCompleted] = useState(false);

  const { run, loading, error, fieldErrors } = useAuthAction(async () =>
    client.resetPassword({
      token,
      new_password: password,
      confirm_password: confirm,
    }),
  );

  const hasFieldErrors = Object.keys(fieldErrors).length > 0;

  useEffect(() => {
    let active = true;

    setValid(null);
    setCompleted(false);

    client
      .validateResetPassword(token)
      .then((value) => {
        if (active) {
          setValid(value.valid);
        }
      })
      .catch(() => {
        if (active) {
          setValid(false);
        }
      });

    return () => {
      active = false;
    };
  }, [client, token]);

  if (valid === null) {
    return (
      <div className="shivanya-reset-password-loading">
        <div className="shivanya-reset-password-icon">
          <LockIcon />
        </div>

        <Typography as="h2" variant="h4" weight="bold" align="center">
          Checking reset link
        </Typography>

        <Typography
          as="p"
          variant="body"
          size="sm"
          color="secondary"
          align="center"
        >
          Please wait while we verify your password reset link.
        </Typography>
      </div>
    );
  }

  if (!valid) {
    return (
      <div className="shivanya-reset-password-state">
        <div className="shivanya-reset-password-error-icon">!</div>

        <Typography as="h2" variant="h4" weight="bold" align="center">
          Reset link expired
        </Typography>

        <Typography
          as="p"
          variant="body"
          size="sm"
          color="secondary"
          align="center"
        >
          This password reset link is invalid or has expired.
        </Typography>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="shivanya-reset-password-state">
        <div className="shivanya-reset-password-success-icon">
          <CheckIcon />
        </div>

        <Typography as="h2" variant="h4" weight="bold" align="center">
          Password updated
        </Typography>

        <Typography
          as="p"
          variant="body"
          size="sm"
          color="secondary"
          align="center"
        >
          Your password has been changed successfully.
        </Typography>

        <Button type="button" fullWidth onClick={onComplete}>
          Back to sign in
        </Button>
      </div>
    );
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await run();
      setCompleted(true);
    } catch {}
  };

  return (
    <div className="shivanya-reset-password">
      <div className="shivanya-reset-password-heading">
        <div className="shivanya-reset-password-icon">
          <LockIcon />
        </div>

        <Typography as="h2" variant="h3" weight="bold" align="center">
          Choose a New Password
        </Typography>

        <Typography
          as="p"
          variant="body"
          size="sm"
          color="secondary"
          align="center"
        >
          Choose a new password for your account
        </Typography>
      </div>

      {!hasFieldErrors && <AuthMessage message={error} />}

      <form className="shivanya-reset-password-form" onSubmit={submit}>
        <div>
          <PasswordInput
            label="New password"
            placeholder="Enter your new password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            helperText="Use at least 8 characters."
            required
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
            label="Confirm password"
            placeholder="Confirm your new password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            autoComplete="new-password"
            required
            fullWidth
            error={fieldErrors.confirm_password}
          />

          {fieldErrors.confirm_password && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.confirm_password}
            </ErrorMessage>
          )}
        </div>

        <Button
          type="submit"
          fullWidth
          loading={loading}
          loadingText="Resetting password…"
        >
          Reset password
        </Button>
      </form>
    </div>
  );
}
