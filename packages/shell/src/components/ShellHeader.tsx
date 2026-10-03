"use client";

import type { CSSProperties } from "react";
import type { ShellHeaderProps } from "../types/shell.js";
import { Button } from "shivanya-ui";
import { useShell } from "../hooks/useShell.js";
import { ShellBrand } from "./ShellBrand.js";

export function ShellHeader({
  branding,
  start,
  center,
  end,
  showMenu = true,
  menuLabel = "Open menu",
  position = "sticky",
  height = 64,
  className = "",
  children,
}: ShellHeaderProps) {
  const shell = useShell();

  return (
    <header
      className={`shivanya-shell-header shivanya-shell-header-${position} ${className}`.trim()}
      style={
        {
          "--shivanya-shell-header-height":
            typeof height === "number" ? `${height}px` : height,
        } as CSSProperties
      }
    >
      <div className="shivanya-shell-header-inner">
        <div className="shivanya-shell-header-start">
          {showMenu && (
            <div className="shivanya-shell-mobile-menu">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                rounded
                onClick={shell.toggleMobile}
                aria-label={menuLabel}
                title={menuLabel}
              >
                ☰
              </Button>
            </div>
          )}

          {branding && <ShellBrand branding={branding} compact={false} />}

          {start}
        </div>

        <div className="shivanya-shell-header-center">{center}</div>

        <div className="shivanya-shell-header-end">{end}</div>
      </div>

      {children}
    </header>
  );
}
