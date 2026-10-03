"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import { ShellContext } from "./ShellContext.js";
import type { ShellProviderProps } from "../types/shell.js";

export function ShellProvider({
  children,
  defaultSidebarOpen = true,
  defaultSidebarCollapsed = false,
  defaultMobileOpen = false,
}: ShellProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    defaultSidebarCollapsed,
  );
  const [mobileOpen, setMobileOpen] = useState(defaultMobileOpen);

  const toggleSidebar = useCallback(
    () => setSidebarOpen((value) => !value),
    [],
  );
  const toggleSidebarCollapsed = useCallback(
    () => setSidebarCollapsed((value) => !value),
    [],
  );
  const toggleMobile = useCallback(() => setMobileOpen((value) => !value), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const value = useMemo(
    () => ({
      sidebarOpen,
      sidebarCollapsed,
      mobileOpen,
      setSidebarOpen,
      setSidebarCollapsed,
      setMobileOpen,
      toggleSidebar,
      toggleSidebarCollapsed,
      toggleMobile,
      closeMobile,
    }),
    [
      sidebarOpen,
      sidebarCollapsed,
      mobileOpen,
      toggleSidebar,
      toggleSidebarCollapsed,
      toggleMobile,
      closeMobile,
    ],
  );

  return (
    <ShellContext.Provider value={value}>{children}</ShellContext.Provider>
  );
}
