import type { ShellBranding } from "../types/shell.js";
import { ShellBrand } from "./ShellBrand.js";

export function DrawerHeader({
  branding,
  onClose,
}: {
  branding?: ShellBranding;
  onClose?: () => void;
}) {
  return (
    <header className="shivanya-shell-drawer-header">
      {branding && <ShellBrand branding={{ ...branding, href: undefined }} />}
      <button type="button" onClick={onClose} aria-label="Close menu">
        ×
      </button>
    </header>
  );
}
