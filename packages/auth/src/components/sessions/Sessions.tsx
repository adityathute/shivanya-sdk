"use client";

import { useCallback, useEffect, useState } from "react";
import { Button, Card, MonitorIcon, Spinner, Typography } from "shivanya-ui";
import { capitalizeWords } from "shivanya-core";

import { useAuth } from "../../hooks/useAuth";
import { AuthMessage } from "../shared/AuthMessage";
import type { AuthSession } from "../../client/types";

export function Sessions() {
  const { client } = useAuth();

  const [sessions, setSessions] = useState<AuthSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [working, setWorking] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      setSessions(await client.getSessions());
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to load sessions.",
      );
    } finally {
      setLoading(false);
    }
  }, [client]);

  useEffect(() => {
    void load();
  }, [load]);

  const revoke = async (id: string) => {
    setWorking(id);
    setError(null);

    try {
      await client.revokeSession(id);
      await load();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to sign out session.",
      );
    } finally {
      setWorking(null);
    }
  };

  const revokeOthers = async () => {
    setWorking("others");
    setError(null);

    try {
      await client.revokeOtherSessions();
      await load();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to sign out other sessions.",
      );
    } finally {
      setWorking(null);
    }
  };

  return (
    <div className="shivanya-account-section shivanya-sessions">
      <div className="shivanya-sessions-header">
        <div className="shivanya-sessions-title">
          <span className="shivanya-sessions-title-icon">
            <MonitorIcon size="sm" />
          </span>

          <div className="shivanya-sessions-title-content">
            <Typography as="h3" variant="body" weight="semibold">
              Sessions
            </Typography>

            <Typography as="p" variant="caption" color="muted">
              Review where your ShivanyaMS account is signed in.
            </Typography>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={revokeOthers}
          loading={working === "others"}
          disabled={loading || sessions.length <= 1}
        >
          Sign out others
        </Button>
      </div>

      <AuthMessage message={error} />

      {loading ? (
        <div className="shivanya-sessions-loading">
          <Spinner />
        </div>
      ) : (
        <div className="shivanya-session-list">
          {sessions.map((session) => (
            <Card
              key={session.id}
              fullWidth
              className={`shivanya-session-card ${
                session.current ? "is-current" : ""
              }`}
            >
              <div className="shivanya-session-device">
                <div className="shivanya-session-device-icon">
                  <MonitorIcon size="md" />
                </div>
              </div>

              <div className="shivanya-session-info">
                <div className="shivanya-session-name">
                  <Typography as="h4" variant="body" weight="semibold">
                    {capitalizeWords(session.device || "Unknown device")}
                  </Typography>

                  {session.current && (
                    <span
                      className="shivanya-session-live-dot"
                      aria-label="Live session"
                    />
                  )}
                </div>

                <Typography as="p" variant="caption" color="muted">
                  {session.ip_address || "IP unavailable"}
                </Typography>

                <Typography as="p" variant="caption" color="muted">
                  Last active{" "}
                  {session.last_active_at
                    ? new Date(session.last_active_at).toLocaleString()
                    : "—"}
                </Typography>
              </div>

              <div className="shivanya-session-actions">
                {session.current ? (
                  <Typography variant="caption" color="success" weight="medium">
                    Current session
                  </Typography>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    loading={working === session.id}
                    disabled={working !== null}
                    onClick={() => revoke(session.id)}
                  >
                    Sign out
                  </Button>
                )}
              </div>
            </Card>
          ))}

          {sessions.length === 0 && (
            <Typography
              variant="body"
              color="muted"
              className="shivanya-sessions-empty"
            >
              No active sessions found.
            </Typography>
          )}
        </div>
      )}
    </div>
  );
}
