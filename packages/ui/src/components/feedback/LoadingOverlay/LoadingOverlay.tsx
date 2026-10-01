import type { LoadingOverlayProps } from "./LoadingOverlay.types";
import { forwardRef } from "react";

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(function LoadingOverlay(
  { open=true, label="Loading…", fullscreen=false, transparent=false, children, className, ...props }, ref,
) {
  if (!open) return children ?? null;
  const classes = ["shivanya-loading-overlay", fullscreen ? "is-fullscreen" : "", transparent ? "is-transparent" : "", className].filter(Boolean).join(" ");
  return <div ref={ref} {...props} className={classes} aria-busy="true" role="status">
    <span className="shivanya-loading-overlay-spinner" aria-hidden="true" />
    {label && <span className="shivanya-loading-overlay-label">{label}</span>}
    {children}
  </div>;
});
LoadingOverlay.displayName = "LoadingOverlay";
