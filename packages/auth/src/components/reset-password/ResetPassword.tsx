"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button, PasswordInput } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export function ResetPassword({ token, onComplete }: { token: string; onComplete?: () => void }) {
  const { client } = useAuth();
  const [valid, setValid] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { run, loading, error } = useAuthAction(async () => client.resetPassword({ token, new_password: password, confirm_password: confirm }));

  useEffect(() => { client.validateResetPassword(token).then((value) => setValid(value.valid)).catch(() => setValid(false)); }, [client, token]);

  if (valid === null) return <div className="shivanya-auth-loading">Checking reset link…</div>;
  if (!valid) return <div className="shivanya-auth-success-panel"><h3>Reset link expired</h3><p>This password reset link is invalid or has expired.</p></div>;

  const submit = async (event: FormEvent) => { event.preventDefault(); try { await run(); onComplete?.(); } catch {} };
  return <div className="shivanya-auth-form"><AuthMessage message={error} /><form onSubmit={submit}><PasswordInput label="New password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required fullWidth /><PasswordInput label="Confirm password" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" required fullWidth /><Button type="submit" fullWidth loading={loading} loadingText="Updating…">Reset password</Button></form></div>;
}
