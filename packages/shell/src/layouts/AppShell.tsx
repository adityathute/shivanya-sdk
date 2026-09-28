import type { ReactNode } from "react";

import { LayoutProvider } from "../context/LayoutProvider";

export interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function AppShell({
  children,
  className = "",
}: AppShellProps) {
  return (
    <LayoutProvider>
      <div className={`shivanya-app-shell ${className}`.trim()}>
        {children}
      </div>
    </LayoutProvider>
  );
}