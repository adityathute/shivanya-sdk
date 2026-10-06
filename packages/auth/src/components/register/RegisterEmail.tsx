"use client";

import { useState, type FormEvent } from "react";
import {
  Button,
  Input,
  PasswordInput,
  Typography,
  ErrorMessage,
} from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export interface RegisterEmailProps {
  onSuccess?: (email: string) => void;
  onLogin?: () => void;
  showGoogle?: boolean;
}

export function RegisterEmail({
  onSuccess,
  onLogin,
  showGoogle = true,
}: RegisterEmailProps) {
  const { client } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [created, setCreated] = useState(false);

  const { run, loading, error, fieldErrors } = useAuthAction(async () =>
    client.register({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      password,
      confirm_password: confirm,
    }),
  );

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await run();
      setCreated(true);
      onSuccess?.(email.trim());
    } catch {}
  };

  const continueWithGoogle = () => {
    window.location.href = client.googleStartUrl(window.location.href);
  };

  if (created) {
    return (
      <div className="shivanya-register-email-success">
        <div className="shivanya-register-email-success-icon">✓</div>

        <Typography as="h3" variant="h4" weight="bold" align="center">
          Check your email
        </Typography>

        <Typography
          as="p"
          variant="body"
          size="sm"
          color="secondary"
          align="center"
        >
          Your account was created. Verify your email before signing in.
        </Typography>

        <Button fullWidth onClick={onLogin}>
          Back to sign in
        </Button>
      </div>
    );
  }

  return (
    <div className="shivanya-register-email">
      {Object.keys(fieldErrors).length === 0 && <AuthMessage message={error} />}

      <form className="shivanya-register-email-form" onSubmit={submit}>
        <div className="shivanya-register-email-name-fields">
          <Input
            label="First Name"
            placeholder="Enter your first name"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
            fullWidth
          />

          <Input
            label="Last Name"
            placeholder="Enter your last name"
            autoComplete="family-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
            fullWidth
          />
        </div>

        <div className="shivanya-register-email-fields">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
          />

          {fieldErrors.email && (
            <ErrorMessage size="sm">{fieldErrors.email}</ErrorMessage>
          )}

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            autoComplete="new-password"
            helperText="Use at least 8 characters."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
          />

          {fieldErrors.password && (
            <ErrorMessage size="sm">{fieldErrors.password}</ErrorMessage>
          )}

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            required
            fullWidth
          />
        </div>

        {fieldErrors.confirm_password && (
          <ErrorMessage size="sm">{fieldErrors.confirm_password}</ErrorMessage>
        )}

        <Button
          type="submit"
          fullWidth
          loading={loading}
          loadingText="Creating account…"
        >
          Register
        </Button>
      </form>

      {showGoogle && (
        <button
          type="button"
          className="shivanya-register-email-google-link"
          onClick={continueWithGoogle}
        >
          ← Continue with Google
        </button>
      )}

      <div className="shivanya-register-email-switch">
        <Typography as="span" variant="caption" color="secondary" size="sm">
          Already have an account?
        </Typography>

        <button
          type="button"
          className="shivanya-register-email-link"
          onClick={onLogin}
        >
          Login Now
        </button>
      </div>
    </div>
  );
}
