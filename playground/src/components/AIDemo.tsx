import { useState } from "react";
import { Button, Typography } from "shivanya-ui";
import { ShivanyaClient } from "shivanya-core";
import { ShivanyaAI } from "shivanya-ai";

const client = new ShivanyaClient({
  baseURL: "http://localhost:3000",
});

const ai = new ShivanyaAI(client);

function AIDemo() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    if (!message.trim()) {
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const result = await ai.chat({
        message,
      });

      setResponse(result.content);
    } catch (error) {
      setResponse(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Typography variant="h2">
        AI SDK
      </Typography>

      <Typography>
        Test the Shivanya AI SDK with the local AI API.
      </Typography>

      <div style={{ marginTop: 20 }}>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask Shivanya AI..."
          style={{
            width: 400,
            padding: 12,
            marginRight: 10,
          }}
        />

        <Button
          onClick={handleChat}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </div>

      {response && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h3">
            Response
          </Typography>

          <Typography>
            {response}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default AIDemo;