import {
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface LayoutContextValue {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext =
  createContext<LayoutContextValue | undefined>(
    undefined
  );