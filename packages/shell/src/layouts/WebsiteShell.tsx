import type { CSSProperties, ReactNode } from "react";
import type { ShellBranding } from "../types/shell.js";

import { AppShell } from "./AppShell.js";
import { ShellHeader } from "../components/ShellHeader.js";
import { ShellMain } from "../components/ShellMain.js";
import { ShellFooter } from "../components/ShellFooter.js";

export interface WebsiteShellProps {
  children: ReactNode;
  branding?: ShellBranding;
  headerStart?: ReactNode;
  headerCenter?: ReactNode;
  headerEnd?: ReactNode;
  footer?: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  contentPadding?: number | string;
  className?: string;
}

export function WebsiteShell({
  children,
  branding,
  headerStart,
  headerCenter,
  headerEnd,
  footer,
  showHeader = true,
  showFooter = true,
  contentPadding = 24,
  className = "",
}: WebsiteShellProps) {
  const mainStyle = {
    "--shivanya-website-content-padding":
      typeof contentPadding === "number"
        ? `${contentPadding}px`
        : contentPadding,
  } as CSSProperties;

  return (
    <AppShell
      className={[
        "shivanya-website-shell",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {showHeader && (
        <ShellHeader
          branding={branding}
          start={headerStart}
          center={headerCenter}
          end={headerEnd}
          showMenu={false}
        />
      )}

      <ShellMain
        className="shivanya-website-shell-main"
        style={mainStyle}
      >
        {children}
      </ShellMain>

      {showFooter && (
        <ShellFooter className="shivanya-website-shell-footer">
          {footer}
        </ShellFooter>
      )}
    </AppShell>
  );
}