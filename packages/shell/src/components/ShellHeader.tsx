import type { CSSProperties } from "react";
import type { ShellHeaderProps } from "../types/shell.js";
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

  const menuAction = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      shell.toggleMobile();
    } else {
      shell.toggleSidebar();
    }
  };

  return (
    <header
      className={`shivanya-shell-header shivanya-shell-header-${position} ${className}`.trim()}
      style={
        {
          "--shivanya-shell-header-height":
            typeof height === "number"
              ? `${height}px`
              : height,
        } as CSSProperties
      }
    >
      <div className="shivanya-shell-header-inner">
        <div className="shivanya-shell-header-start">
          {showMenu && (
            <button
              type="button"
              className="shivanya-shell-menu-button"
              onClick={menuAction}
              aria-label={menuLabel}
              title={menuLabel}
            >
              <span aria-hidden="true">☰</span>
            </button>
          )}

          {start}

          {branding && (
            <ShellBrand
              branding={branding}
              compact={shell.sidebarCollapsed}
            />
          )}
        </div>

        <div className="shivanya-shell-header-center">
          {center}
        </div>

        <div className="shivanya-shell-header-end">
          {end}
        </div>
      </div>

      {children}
    </header>
  );
}