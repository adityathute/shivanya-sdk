"use client";

import { useCallback, useState } from "react";
import { AuthError } from "../client/types";

export type AuthFieldErrors = Record<string, string>;

function extractFieldErrors(value: unknown): AuthFieldErrors {
  if (!value || typeof value !== "object") {
    return {};
  }

  const error = value as {
    data?: unknown;
  };

  if (!error.data || typeof error.data !== "object") {
    return {};
  }

  const data = error.data as Record<string, unknown>;
  const errors = data.errors;

  if (
    !errors ||
    typeof errors !== "object" ||
    Array.isArray(errors)
  ) {
    return {};
  }

  const fieldErrors: AuthFieldErrors = {};

  for (const [field, messages] of Object.entries(
    errors as Record<string, unknown>,
  )) {
    if (Array.isArray(messages)) {
      const message = messages.find(
        (item): item is string =>
          typeof item === "string",
      );

      if (message) {
        fieldErrors[field] = message;
      }
    } else if (typeof messages === "string") {
      fieldErrors[field] = messages;
    }
  }

  return fieldErrors;
}

export function useAuthAction<
  TArgs extends unknown[],
  TResult,
>(
  action: (...args: TArgs) => Promise<TResult>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] =
    useState<AuthFieldErrors>({});

  const run = useCallback(
    async (...args: TArgs) => {
      setLoading(true);
      setError(null);
      setFieldErrors({});

      try {
        return await action(...args);
      } catch (value) {
        const fields = extractFieldErrors(value);

        setFieldErrors(fields);

        const message =
          value instanceof AuthError || value instanceof Error
            ? value.message
            : "Something went wrong.";

        setError(message);

        throw value;
      } finally {
        setLoading(false);
      }
    },
    [action],
  );

  return {
    run,
    loading,
    error,
    fieldErrors,
    setError,
    setFieldErrors,
  };
}