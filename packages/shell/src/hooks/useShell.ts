"use client";

import { useContext } from "react";
import { ShellContext } from "../context/ShellContext.js";

export function useShell() {
  const shell = useContext(ShellContext);

  if (!shell) {
    throw new Error("useShell must be used within a ShellProvider.");
  }

  return shell;
}

export function useOptionalShell() {
  return useContext(ShellContext);
}