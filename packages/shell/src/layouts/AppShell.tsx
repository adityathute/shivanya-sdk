import type { ReactNode } from "react";
import { ShellProvider } from "../context/ShellProvider.js";
import { ShellRoot } from "../components/ShellRoot.js";

export interface AppShellProps {
  children: ReactNode;
  className?: string;
  defaultSidebarOpen?: boolean;
  defaultSidebarCollapsed?: boolean;
  defaultMobileOpen?: boolean;
}

export function AppShell({
  children,
  className = "",
  defaultSidebarOpen,
  defaultSidebarCollapsed,
  defaultMobileOpen,
}: AppShellProps) {
  return (
    <ShellProvider
      defaultSidebarOpen={defaultSidebarOpen}
      defaultSidebarCollapsed={defaultSidebarCollapsed}
      defaultMobileOpen={defaultMobileOpen}
    >
      <ShellRoot className={className}>
        {children}
      </ShellRoot>
    </ShellProvider>
  );
}