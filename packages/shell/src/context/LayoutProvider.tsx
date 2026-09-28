import {
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  LayoutContext,
  type LayoutContextValue,
} from "./LayoutContext";

export interface LayoutProviderProps {
  children: ReactNode;
}

export function LayoutProvider({
  children,
}: LayoutProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const value = useMemo<LayoutContextValue>(
    () => ({
      sidebarOpen,
      setSidebarOpen,
      sidebarCollapsed,
      setSidebarCollapsed,
    }),
    [sidebarOpen, sidebarCollapsed]
  );

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}