import { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
export function useLayout() {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within a LayoutProvider.");
    }
    return context;
}
