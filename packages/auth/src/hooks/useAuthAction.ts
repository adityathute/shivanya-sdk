"use client";

import { useCallback, useState } from "react";
import { AuthError } from "../client/types";

export type AuthFieldErrors = Record<string, string>;

function extractFieldErrors(value: unknown): AuthFieldErrors {
  if (!(value instanceof AuthError)) {
    return {};
  }

  const data = value.data;

  if (!data || typeof data !== "object") {
    return {};
  }

  const errors = (data as { errors?: unknown }).errors;

  if (!errors || typeof errors !== "object" || Array.isArray(errors)) {
    return {};
  }

  const result: AuthFieldErrors = {};

  for (const [field, value] of Object.entries(errors)) {
    if (Array.isArray(value)) {
      const message = value.find(
        (item): item is string => typeof item === "string",
      );

      if (message) {
        result[field] = message;
      }
    } else if (typeof value === "string") {
      result[field] = value;
    }
  }

  return result;
}

export function useAuthAction<TArgs extends unknown[], TResult>(
  action: (...args: TArgs) => Promise<TResult>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<AuthFieldErrors>({});

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
