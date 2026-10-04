"use client";

import { useCallback, useState } from "react";
import { AuthError } from "../client/types";

export function useAuthAction<TArgs extends unknown[], TResult>(action: (...args: TArgs) => Promise<TResult>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = useCallback(async (...args: TArgs) => {
    setLoading(true);
    setError(null);
    try {
      return await action(...args);
    } catch (value) {
      const message = value instanceof AuthError || value instanceof Error ? value.message : "Something went wrong.";
      setError(message);
      throw value;
    } finally {
      setLoading(false);
    }
  }, [action]);

  return { run, loading, error, setError };
}
