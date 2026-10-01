import type { ReactNode } from "react";
import type { ShellBranding } from "../types/shell.js";
import { AppShell } from "./AppShell.js";
import { ShellHeader } from "../components/ShellHeader.js";
import { ShellMain } from "../components/ShellMain.js";
import { ShellFooter } from "../components/ShellFooter.js";

export interface WebsiteShellProps {
  children: ReactNode;
  branding?: ShellBranding;
  headerEnd?: ReactNode;
  footer?: ReactNode;
  contentPadding?: number | string;
  className?: string;
}

export function WebsiteShell({
  children,
  branding,
  headerEnd,
  footer,
  contentPadding = 24,
  className = "",
}: WebsiteShellProps) {
  return (
    <AppShell className={`shivanya-website-shell ${className}`.trim()}>
      <ShellHeader branding={branding} showMenu={false} end={headerEnd} />
      <ShellMain
        style={{
          padding:
            typeof contentPadding === "number"
              ? `${contentPadding}px`
              : contentPadding,
        }}
      >
        {children}
      </ShellMain>
      {footer ?? <ShellFooter branding={branding} />}
    </AppShell>
  );
}
