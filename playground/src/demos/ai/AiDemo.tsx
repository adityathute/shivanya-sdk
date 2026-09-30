import { useState } from "react";

import {
  Button,
  Input,
  Typography,
} from "shivanya-ui";

import { ShivanyaClient } from "shivanya-core";
import { ShivanyaAI } from "shivanya-ai";

import "./ai-demo.css";

const client = new ShivanyaClient({
  baseURL: "http://localhost:3000",
});

const ai = new ShivanyaAI(client);

function AIDemo() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) {
      return;
    }

    setLoading(true);
    setResponse("");
    setError("");

    try {
      const result = await ai.chat({
        message: trimmedMessage,
      });

      setResponse(result.content);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while contacting the AI.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleChat();
    }
  };

  return (
    <section className="ai-demo">
      <div className="ai-demo-header">
        <Typography variant="h2">
          AI SDK
        </Typography>

        <Typography color="secondary">
          Test the Shivanya AI SDK with the local AI API.
        </Typography>
      </div>

      <div className="ai-demo-chat">
        <div className="ai-demo-input-row">
          <Input
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask Shivanya AI..."
            disabled={loading}
            fullWidth
            aria-label="Ask Shivanya AI"
          />

          <Button
            type="button"
            onClick={handleChat}
            disabled={loading || !message.trim()}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>

        {loading && (
          <div className="ai-demo-status">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Shivanya AI is thinking...
            </Typography>
          </div>
        )}

        {error && (
          <div className="ai-demo-error">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              {error}
            </Typography>
          </div>
        )}

        {response && !error && (
          <div className="ai-demo-response">
            <Typography variant="h3">
              Response
            </Typography>

            <div className="ai-demo-response-content">
              <Typography>
                {response}
              </Typography>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AIDemo;