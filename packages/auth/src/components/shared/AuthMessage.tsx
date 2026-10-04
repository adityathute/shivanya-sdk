"use client";

import { Alert } from "shivanya-ui";

export function AuthMessage({ message, variant = "danger" }: { message?: string | null; variant?: "danger" | "success" | "warning" | "info" }) {
  if (!message) return null;
  return <Alert color={variant} size="sm">{message}</Alert>;
}
