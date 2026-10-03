import type { ShellRootProps } from "../types/shell.js";

export function ShellRoot({
  children,
  className = "",
  style,
}: ShellRootProps) {
  return (
    <div
      className={`shivanya-shell ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}