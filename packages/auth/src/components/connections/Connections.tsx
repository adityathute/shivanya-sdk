"use client";

import { useCallback, useEffect, useState } from "react";
import { Button, Card, LinkIcon, Spinner, Typography } from "shivanya-ui";

import { useAuth } from "../../hooks/useAuth";
import { AuthMessage } from "../shared/AuthMessage";

export function Connections() {
  const { client } = useAuth();

  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const value = await client.getConnections();
      setConnected(value.google_connected);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to load connections.",
      );
    } finally {
      setLoading(false);
    }
  }, [client]);

  useEffect(() => {
    void load();
  }, [load]);

  const connectGoogle = () => {
    window.location.href = client.googleConnectStartUrl(window.location.href);
  };

  const disconnectGoogle = async () => {
    setWorking(true);
    setError(null);

    try {
      const value = await client.disconnectGoogle();
      setConnected(value.google_connected);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to disconnect Google.",
      );
    } finally {
      setWorking(false);
    }
  };

  return (
    <div className="shivanya-account-section shivanya-connections">
      <div className="shivanya-connections-header">
        <div className="shivanya-connections-title">
          <span className="shivanya-connections-title-icon">
            <LinkIcon size="sm" />
          </span>

          <div className="shivanya-connections-title-content">
            <Typography as="h3" variant="body" weight="semibold">
              Connections
            </Typography>

            <Typography as="p" variant="caption" color="muted">
              Manage services connected to your ShivanyaMS account.
            </Typography>
          </div>
        </div>
      </div>

      <AuthMessage message={error} />

      {loading ? (
        <div className="shivanya-connections-loading">
          <Spinner />
        </div>
      ) : (
        <div className="shivanya-connection-list">
          <Card
            className={`shivanya-connection-card ${
              connected ? "is-connected" : ""
            }`}
          >
            <div className="shivanya-connection-icon">
              <LinkIcon size="md" />
            </div>

            <div className="shivanya-connection-info">
              <Typography as="h4" variant="body" weight="semibold">
                Google
              </Typography>

              <div className="shivanya-connection-status">
                <span
                  className={`shivanya-connection-status-dot ${
                    connected ? "is-connected" : ""
                  }`}
                  aria-hidden="true"
                />

                <Typography
                  variant="caption"
                  size="xs"
                  color={connected ? "success" : "muted"}
                  weight="medium"
                >
                  {connected ? "Connected" : "Not connected"}
                </Typography>
              </div>
            </div>

            <div className="shivanya-connection-actions">
              {connected ? (
                <Button
                  size="sm"
                  variant="outline"
                  loading={working}
                  disabled={working}
                  onClick={disconnectGoogle}
                >
                  Disconnect
                </Button>
              ) : (
                <Button
                  size="sm"
                  loading={working}
                  disabled={working}
                  onClick={connectGoogle}
                >
                  Connect Google
                </Button>
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
