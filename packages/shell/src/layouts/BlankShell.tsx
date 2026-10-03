import type { ReactNode } from "react";
import { AppShell } from "./AppShell.js";

export interface BlankShellProps {
  children: ReactNode;
  className?: string;
}

export function BlankShell({
  children,
  className = "",
}: BlankShellProps) {
  return (
    <AppShell
      className={[
        "shivanya-blank-shell",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </AppShell>
  );
}