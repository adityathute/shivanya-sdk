import { createContext } from "react";
import type { ShellContextValue } from "../types/shell.js";

export const ShellContext = createContext<ShellContextValue | null>(null);
