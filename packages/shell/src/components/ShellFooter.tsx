import type { ShellFooterProps } from "../types/shell.js";
import { ShellBrand } from "./ShellBrand.js";

export function ShellFooter({
  children,
  branding,
  className = "",
}: ShellFooterProps) {
  return (
    <footer className={`shivanya-shell-footer ${className}`.trim()}>
      {branding && <ShellBrand branding={branding} />}
      {children}
      <span className="shivanya-shell-footer-copy">
        © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
