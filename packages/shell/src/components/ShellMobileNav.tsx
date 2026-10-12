"use client";

import { useEffect, useState } from "react";
import type { AnimationEvent, CSSProperties } from "react";

import type { ShellMobileNavProps } from "../types/shell.js";

import { ShellSidebar } from "./ShellSidebar.js";
import { DrawerHeader } from "./DrawerHeader.js";
import { useOptionalShell } from "../hooks/useShell.js";

export function ShellMobileNav({
  open: controlledOpen,
  onClose: controlledOnClose,
  size = 280,
  className = "",
  layerClassName = "",
  panelClassName = "",
  backdropClassName = "",
  headerClassName = "",
  sidebarClassName = "",
  ...props
}: ShellMobileNavProps) {
  const shell = useOptionalShell();

  const open = controlledOpen ?? shell?.mobileOpen ?? false;

  const close = controlledOnClose ?? shell?.closeMobile ?? (() => {});

  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
    }
  }, [open]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mounted, close]);

  if (!mounted) {
    return null;
  }

  const panelStyle = {
    "--shivanya-shell-mobile-width":
      typeof size === "number" ? `${size}px` : size,
  } as CSSProperties;

  const handleAnimationEnd = (event: AnimationEvent<HTMLElement>) => {
    if (
      event.target !== event.currentTarget ||
      event.animationName !== "shivanya-mobile-drawer-close"
    ) {
      return;
    }

    if (!open) {
      setMounted(false);
    }
  };

  return (
    <div
      className={[
        "shivanya-shell-mobile-layer",
        open
          ? "shivanya-shell-mobile-layer-open"
          : "shivanya-shell-mobile-layer-closing",
        layerClassName,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <button
        type="button"
        className={["shivanya-shell-mobile-backdrop", backdropClassName]
          .filter(Boolean)
          .join(" ")}
        onClick={close}
        aria-label="Close navigation"
      />

      <aside
        className={["shivanya-shell-mobile-panel", panelClassName]
          .filter(Boolean)
          .join(" ")}
        style={panelStyle}
        onAnimationEnd={handleAnimationEnd}
      >
        <DrawerHeader
          branding={props.branding}
          onClose={close}
          className={headerClassName}
        />

        <ShellSidebar
          {...props}
          collapsed={false}
          variant="static"
          branding={undefined}
          className={[
            "shivanya-shell-mobile-sidebar",
            className,
            sidebarClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {props.children}
        </ShellSidebar>
      </aside>
    </div>
  );
}
