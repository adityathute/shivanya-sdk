"use client";

import { useState, type FormEvent } from "react";
import {
  Button,
  CheckIcon,
  Input,
  LockIcon,
  Typography,
} from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export interface ForgotPasswordProps {
  onBack?: () => void;
}

export function ForgotPassword({
  onBack,
}: ForgotPasswordProps) {
  const { client } = useAuth();

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const { run, loading, error } = useAuthAction(async () =>
    client.forgotPassword(email.trim()),
  );

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await run();
      setSent(true);
    } catch {}
  };

  if (sent) {
    return (
      <div className="shivanya-forgot-password-success-view">
        <div className="shivanya-forgot-password-success-icon">
          <CheckIcon />
        </div>

        <Typography
          as="h2"
          variant="h3"
          weight="bold"
          align="center"
        >
          Check your inbox
        </Typography>

        <Typography
          as="p"
          variant="body"
          size="sm"
          color="secondary"
          align="center"
          className="shivanya-forgot-password-success-text"
        >
          If an account exists for that email, a password reset
          link has been sent.
        </Typography>

        <Button
          type="button"
          fullWidth
          onClick={onBack}
        >
          Back to sign in
        </Button>
      </div>
    );
  }

  return (
    <div className="shivanya-forgot-password">
      <div className="shivanya-forgot-password-heading">
        <div className="shivanya-forgot-password-icon">
          <LockIcon />
        </div>

        <Typography
          as="h2"
          variant="h3"
          weight="bold"
          align="center"
        >
          Reset Your Password
        </Typography>

        <Typography
          as="p"
          variant="body"
          size="sm"
          color="secondary"
          align="center"
        >
          We'll help you reset your password
        </Typography>
      </div>

      <AuthMessage message={error} />

      <form
        className="shivanya-forgot-password-form"
        onSubmit={submit}
      >
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

        <Button
          type="submit"
          fullWidth
          loading={loading}
          loadingText="Sending…"
        >
          Send reset link
        </Button>
      </form>

      <button
        type="button"
        className="shivanya-forgot-password-back"
        onClick={onBack}
      >
        Back to sign in
      </button>
    </div>
  );
}