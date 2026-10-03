import type { ShellFooterProps } from "../types/shell.js";
import { ShellBrand } from "./ShellBrand.js";

export function ShellFooter({
  children,
  branding,
  className = "",
}: ShellFooterProps) {
  return (
    <footer
      className={[
        "shivanya-shell-footer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shivanya-shell-footer-brand">
        {branding && <ShellBrand branding={branding} />}
      </div>

      <div className="shivanya-shell-footer-content">
        {children}
      </div>

      <div className="shivanya-shell-footer-copy">
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
}