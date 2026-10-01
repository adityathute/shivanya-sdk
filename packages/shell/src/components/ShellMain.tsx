import type { ShellMainProps } from "../types/shell.js";

export function ShellMain({
  children,
  as: Component = "main",
  className = "",
  style,
}: ShellMainProps) {
  return (
    <Component
      className={`shivanya-shell-main ${className}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
}
