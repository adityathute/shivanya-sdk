"use client";

import { useState, type FormEvent } from "react";
import { Button, Input, PasswordInput, Typography } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export interface LoginProps {
  onSuccess?: () => void;
  onRegister?: () => void;
  onForgotPassword?: () => void;
  showGoogle?: boolean;
}

export function Login({
  onSuccess,
  onRegister,
  onForgotPassword,
  showGoogle = true,
}: LoginProps) {
  const { client, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { run, loading, error } = useAuthAction(async () =>
    login(email.trim(), password),
  );

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await run();
      onSuccess?.();
    } catch {}
  };

  return (
    <div className="shivanya-login">
      <AuthMessage message={error} />

      <form className="shivanya-login-form" onSubmit={submit}>
        <div className="shivanya-login-fields">
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

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
          />
        </div>

        <div className="shivanya-login-forgot">
          <button
            type="button"
            className="shivanya-login-link"
            onClick={onForgotPassword}
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          fullWidth
          loading={loading}
          loadingText="Signing in…"
        >
          Login
        </Button>
      </form>

      {showGoogle && (
        <>
          <div className="shivanya-login-divider">
            <span className="shivanya-login-divider-line" />

            <Typography as="span" variant="caption" color="secondary">
              or
            </Typography>

            <span className="shivanya-login-divider-line" />
          </div>

          <Button
            type="button"
            variant="outline-secondary"
            fullWidth
            onClick={() => {
              window.location.href = client.googleStartUrl(
                window.location.href,
              );
            }}
          >
            <span className="shivanya-login-google">
              <svg
                className="shivanya-login-google-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.27c0-.79-.07-1.55-.23-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.39Z"
                />
                <path
                  fill="#34A853"
                  d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.48-4.04H3.27v2.5A9.75 9.75 0 0 0 12 21.75Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.52 13.84A5.86 5.86 0 0 1 6.21 12c0-.64.11-1.26.31-1.84v-2.5H3.27A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.02 4.34l3.25-2.5Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.12c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.18 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.73 5.41l3.25 2.5C7.29 7.84 9.45 6.12 12 6.12Z"
                />
              </svg>

              <span>Sign in with Google</span>
            </span>
          </Button>
        </>
      )}

      <div className="shivanya-login-register">
        <Typography as="span" variant="caption" color="secondary" size="sm">
          Don't have an account?
        </Typography>

        <button
          type="button"
          className="shivanya-login-link"
          onClick={onRegister}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
