"use client";

import { useState, type FormEvent } from "react";
import { Button, Input } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export function ForgotPassword({ onBack }: { onBack?: () => void }) {
  const { client } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { run, loading, error } = useAuthAction(async () => client.forgotPassword(email.trim()));
  const submit = async (event: FormEvent) => { event.preventDefault(); try { await run(); setSent(true); } catch {} };

  if (sent) return <div className="shivanya-auth-success-panel"><div className="shivanya-auth-success-icon">✓</div><h3>Check your inbox</h3><p>If an account exists for that email, a password reset link has been sent.</p><Button fullWidth onClick={onBack}>Back to sign in</Button></div>;
  return <div className="shivanya-auth-form"><AuthMessage message={error} /><form onSubmit={submit}><Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required fullWidth /><Button type="submit" fullWidth loading={loading} loadingText="Sending…">Send reset link</Button></form><button type="button" className="shivanya-auth-back" onClick={onBack}>Back to sign in</button></div>;
}
