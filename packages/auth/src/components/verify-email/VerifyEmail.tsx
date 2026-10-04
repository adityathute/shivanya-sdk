"use client";

import { useEffect, useState } from "react";
import { Button, Spinner } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";

export function VerifyEmail({
  token,
  onComplete,
}: {
  token: string;
  onComplete?: () => void;
}) {
  const { client } = useAuth();
  const [state, setState] = useState<"loading" | "success" | "error">(
    "loading",
  );
  const [message, setMessage] = useState("Verifying your email…");

  useEffect(() => {
    let active = true;
    client
      .verifyEmail(token)
      .then(() => {
        if (active) {
          setState("success");
          setMessage("Your email has been verified successfully.");
        }
      })
      .catch((error) => {
        if (active) {
          setState("error");
          setMessage(
            error instanceof Error ? error.message : "Verification failed.",
          );
        }
      });
    return () => {
      active = false;
    };
  }, [client, token]);

  return (
    <div className="shivanya-auth-success-panel">
      {state === "loading" && <Spinner size="lg" />}
      {state !== "loading" && (
        <div
          className={`shivanya-auth-success-icon ${state === "error" ? "is-error" : ""}`}
        >
          {state === "success" ? "✓" : "!"}
        </div>
      )}
      <h3>
        {state === "success"
          ? "Email verified"
          : state === "error"
            ? "Verification failed"
            : "Verify email"}
      </h3>
      <p>{message}</p>
      {state === "success" && (
        <Button fullWidth onClick={onComplete}>
          Continue
        </Button>
      )}
    </div>
  );
}
