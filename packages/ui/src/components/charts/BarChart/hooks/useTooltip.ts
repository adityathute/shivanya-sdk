"use client";

import { useCallback, useState } from "react";
export default function useTooltip<T>() {
  const [tooltip, setTooltip] = useState<T | null>(null);
  const showTooltip = useCallback((payload: T) => setTooltip(payload), []);
  const hideTooltip = useCallback(() => setTooltip(null), []);
  return { tooltip, showTooltip, hideTooltip };
}
