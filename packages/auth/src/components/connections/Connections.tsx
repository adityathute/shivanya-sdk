"use client";

import { useEffect, useState } from "react";
import { Button, Card } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { AuthMessage } from "../shared/AuthMessage";

export function Connections() {
  const { client } = useAuth();

  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    client
      .getConnections()
      .then((value) => setConnected(value.google_connected))
      .catch((e) =>
        setError(
          e instanceof Error
            ? e.message
            : "Unable to load connections.",
        ),
      );
  }, [client]);

  const connectGoogle = () => {
    window.location.href = client.googleConnectStartUrl(
      window.location.href,
    );
  };

  const disconnectGoogle = async () => {
    try {
      const value = await client.disconnectGoogle();
      setConnected(value.google_connected);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Unable to disconnect Google.",
      );
    }
  };

  return (
    <div className="shivanya-account-section">
      <div className="shivanya-account-section-header">
        <div>
          <h3>Connections</h3>
          <p>
            Manage services connected to your ShivanyaMS account.
          </p>
        </div>
      </div>

      <AuthMessage message={error} />

      <Card className="shivanya-connection-card">
        <div>
          <strong>Google</strong>
          <p>
            {connected
              ? "Connected to this account."
              : "Not connected."}
          </p>
        </div>

        <span
          className={`shivanya-connection-status ${
            connected ? "is-connected" : ""
          }`}
        >
          {connected ? "Connected" : "Not connected"}
        </span>

        {connected ? (
          <Button
            size="sm"
            variant="outline"
            onClick={disconnectGoogle}
          >
            Disconnect
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={connectGoogle}
          >
            Connect Google
          </Button>
        )}
      </Card>
    </div>
  );
}