"use client";

import { useCallback, useState } from "react";

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

  const errors =
    data.errors &&
    typeof data.errors === "object" &&
    !Array.isArray(data.errors)
      ? data.errors
      : data;

  const fieldErrors: AuthFieldErrors = {};

  for (const [field, messages] of Object.entries(
    errors as Record<string, unknown>,
  )) {
    // These are API response metadata, not field errors.
    if (
      field === "success" ||
      field === "message" ||
      field === "errors"
    ) {
      continue;
    }

    if (Array.isArray(messages)) {
      const message = messages.find(
        (item): item is string =>
          typeof item === "string" && item.length > 0,
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

function extractErrorMessage(value: unknown): string {
  if (value && typeof value === "object") {
    const error = value as {
      data?: unknown;
      message?: unknown;
    };

    if (error.data && typeof error.data === "object") {
      const data = error.data as Record<string, unknown>;

      if (
        typeof data.message === "string" &&
        data.message
      ) {
        return data.message;
      }
    }

    if (
      typeof error.message === "string" &&
      error.message
    ) {
      return error.message;
    }
  }

  return "Something went wrong.";
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
        const message = extractErrorMessage(value);

        setFieldErrors(fields);
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