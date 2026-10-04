"use client";

import { useCallback, useEffect, useState } from "react";
import { Button, Card, Spinner } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { AuthMessage } from "../shared/AuthMessage";
import type { AuthSession } from "../../client/types";

export function Sessions() {
  const { client } = useAuth();
  const [sessions, setSessions] = useState<AuthSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [working, setWorking] = useState<string | null>(null);
  const load = useCallback(async () => { setLoading(true); setError(null); try { setSessions(await client.getSessions()); } catch (e) { setError(e instanceof Error ? e.message : "Unable to load sessions."); } finally { setLoading(false); } }, [client]);
  useEffect(() => { void load(); }, [load]);
  const revoke = async (id: string) => { setWorking(id); try { await client.revokeSession(id); await load(); } catch (e) { setError(e instanceof Error ? e.message : "Unable to sign out session."); } finally { setWorking(null); } };
  const revokeOthers = async () => { setWorking("others"); try { await client.revokeOtherSessions(); await load(); } catch (e) { setError(e instanceof Error ? e.message : "Unable to sign out other sessions."); } finally { setWorking(null); } };
  return <div className="shivanya-account-section"><div className="shivanya-account-section-header"><div><h3>Sessions</h3><p>Review where your ShivanyaMS account is signed in.</p></div><Button variant="outline" size="sm" onClick={revokeOthers} loading={working === "others"}>Sign out others</Button></div><AuthMessage message={error} />{loading ? <div className="shivanya-auth-loading"><Spinner /></div> : <div className="shivanya-session-list">{sessions.map((session) => <Card key={session.id} className={`shivanya-session-card ${session.current ? "is-current" : ""}`}><div className="shivanya-session-main"><div className="shivanya-session-icon">◉</div><div><strong>{session.device || "Unknown device"}</strong><span>{session.ip_address || "IP unavailable"}</span><small>Last active {session.last_active_at ? new Date(session.last_active_at).toLocaleString() : "—"}</small></div></div><div className="shivanya-session-actions">{session.current ? <span className="shivanya-session-current">Current</span> : <Button variant="ghost" size="sm" loading={working === session.id} onClick={() => revoke(session.id)}>Sign out</Button>}</div></Card>)}{sessions.length === 0 && <p className="shivanya-auth-muted">No active sessions found.</p>}</div>}</div>;
}
