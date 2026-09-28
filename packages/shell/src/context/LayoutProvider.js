import { useMemo, useState, } from "react";
import { LayoutContext, } from "./LayoutContext";
export function LayoutProvider({ children, }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const value = useMemo(() => ({
        sidebarOpen,
        setSidebarOpen,
        sidebarCollapsed,
        setSidebarCollapsed,
    }), [sidebarOpen, sidebarCollapsed]);
    return (<LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>);
}
