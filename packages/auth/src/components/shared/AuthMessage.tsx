import type { CSSProperties } from "react";
import { Alert } from "shivanya-ui";

export function AuthMessage({
  message,
  variant = "danger",
  style,
}: {
  message?: string | null;
  variant?: "danger" | "success" | "warning" | "info";
  style?: CSSProperties;
}) {
  if (!message) return null;

  return (
    <div className="shivanya-auth-message" style={style}>
      <Alert color={variant} size="sm">
        {message}
      </Alert>
    </div>
  );
}