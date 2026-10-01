import { useEffect } from "react";
import type { ShellMobileNavProps } from "../types/shell.js";
import { ShellSidebar } from "./ShellSidebar.js";
import { useShell } from "../hooks/useShell.js";

export function ShellMobileNav(props: ShellMobileNavProps) {
  const shell = useShell();
  const open = props.open ?? shell.mobileOpen;
  const close = props.onClose ?? shell.closeMobile;

  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="shivanya-shell-mobile-layer"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <button
        type="button"
        className="shivanya-shell-mobile-backdrop"
        onClick={close}
        aria-label="Close navigation"
      />
      <div
        className="shivanya-shell-mobile-panel"
        style={{
          width:
            typeof props.size === "number" ? `${props.size}px` : props.size,
        }}
      >
        <button
          type="button"
          className="shivanya-shell-mobile-close"
          onClick={close}
          aria-label="Close navigation"
        >
          ×
        </button>
        <ShellSidebar
          {...props}
          collapsed={false}
          variant="static"
          className={`shivanya-shell-mobile-sidebar ${props.className || ""}`}
        />
      </div>
    </div>
  );
}
