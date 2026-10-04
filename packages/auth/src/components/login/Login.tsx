"use client";

import { useState, type FormEvent } from "react";
import { Button, Input, PasswordInput } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export interface LoginProps {
  onSuccess?: () => void;
  onRegister?: () => void;
  onForgotPassword?: () => void;
  showGoogle?: boolean;
}

export function Login({ onSuccess, onRegister, onForgotPassword, showGoogle = true }: LoginProps) {
  const { client, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { run, loading, error } = useAuthAction(async () => login(email.trim(), password));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try { await run(); onSuccess?.(); } catch {}
  };

  return (
    <div className="shivanya-auth-form">
      <AuthMessage message={error} />
      <form onSubmit={submit}>
        <div className="shivanya-auth-fields">
          <Input label="Email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
          <PasswordInput label="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
        </div>
        <div className="shivanya-auth-row shivanya-auth-row-end">
          <button type="button" className="shivanya-auth-link" onClick={onForgotPassword}>Forgot password?</button>
        </div>
        <Button type="submit" fullWidth loading={loading} loadingText="Signing in…">Sign in</Button>
      </form>
      {showGoogle && (
        <>
          <div className="shivanya-auth-divider"><span>or</span></div>
          <Button type="button" variant="outline" fullWidth onClick={() => { window.location.href = client.googleStartUrl(window.location.href); }}>Continue with Google</Button>
        </>
      )}
      <div className="shivanya-auth-switch">
        <span>Don't have an account?</span>
        <button type="button" className="shivanya-auth-link" onClick={onRegister}>Create account</button>
      </div>
    </div>
  );
}
