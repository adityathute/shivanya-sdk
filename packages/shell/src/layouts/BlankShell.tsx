import type { ReactNode } from "react";
import { AppShell } from "./AppShell.js";

export function BlankShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AppShell className={`shivanya-blank-shell ${className}`.trim()}>
      {children}
    </AppShell>
  );
}
