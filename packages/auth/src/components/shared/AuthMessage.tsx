"use client";

import { Alert } from "shivanya-ui";

export function AuthMessage({
  message,
  variant = "danger",
}: {
  message?: string | null;
  variant?: "danger" | "success" | "warning" | "info";
}) {
  if (!message) return null;

  return (
    <div className="shivanya-auth-message">
      <Alert color={variant} size="sm">
        {message}
      </Alert>
    </div>
  );
}