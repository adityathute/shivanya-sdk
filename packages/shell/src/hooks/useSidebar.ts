import { useShell } from "./useShell.js";

export function useSidebar() {
  const {
    sidebarOpen,
    sidebarCollapsed,
    setSidebarOpen,
    setSidebarCollapsed,
    toggleSidebar,
    toggleSidebarCollapsed,
  } = useShell();

  return {
    sidebarOpen,
    sidebarCollapsed,
    setSidebarOpen,
    setSidebarCollapsed,
    toggleSidebar,
    toggleSidebarCollapsed,
  };
}