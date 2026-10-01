"use client";
import {
  memo,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import type { PortalProps } from "./Portal.types";

export function Portal({
  children,
  container,
  disabled = false,
  state = "default",
}: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (
    !mounted ||
    disabled ||
    state === "disabled" ||
    state === "unmounted"
  ) {
    return null;
  }

  let target: HTMLElement = document.body;

  if (container) {
    if ("current" in container) {
      target = container.current ?? document.body;
    } else {
      target = container;
    }
  }

  return createPortal(children, target);
}

Portal.displayName = "Portal";

export default memo(Portal);

