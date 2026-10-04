"use client";

import { useState, type FormEvent } from "react";
import { Button, Input, PasswordInput } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export function Register({
  onSuccess,
  onLogin,
}: {
  onSuccess?: (email: string) => void;
  onLogin?: () => void;
}) {
  const { client } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [created, setCreated] = useState(false);

  const { run, loading, error } = useAuthAction(async () =>
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
      <div className="shivanya-auth-success-panel">
        <div className="shivanya-auth-success-icon">✓</div>
        <h3>Check your email</h3>
        <p>
          Your account was created. Verify your email before signing in.
        </p>
        <Button fullWidth onClick={onLogin}>
          Back to sign in
        </Button>
      </div>
    );
  }

  return (
    <div className="shivanya-auth-form">
      <AuthMessage message={error} />

      <form onSubmit={submit}>
        <div className="shivanya-auth-grid-2">
          <Input
            label="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
            required
            fullWidth
          />

          <Input
            label="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
            fullWidth
          />
        </div>

        <div className="shivanya-auth-fields">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            fullWidth
          />

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            helperText="Use at least 12 characters."
            required
            fullWidth
          />

          <PasswordInput
            label="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            autoComplete="new-password"
            required
            fullWidth
          />
        </div>

        <Button
          type="submit"
          fullWidth
          loading={loading}
          loadingText="Creating account…"
        >
          Create account
        </Button>
      </form>

      <div className="shivanya-auth-divider">
        <span>or</span>
      </div>

      <Button
        type="button"
        variant="outline"
        fullWidth
        onClick={continueWithGoogle}
      >
        Continue with Google
      </Button>

      <div className="shivanya-auth-switch">
        <span>Already have an account?</span>

        <button
          type="button"
          className="shivanya-auth-link"
          onClick={onLogin}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}