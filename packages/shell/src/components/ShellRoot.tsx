import type { CSSProperties } from "react";
import type { ShellRootProps } from "../types/shell.js";
import "../styles/shell.css";

export function ShellRoot({ children, className = "", style }: ShellRootProps) {
  return (
    <div className={`shivanya-shell ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
