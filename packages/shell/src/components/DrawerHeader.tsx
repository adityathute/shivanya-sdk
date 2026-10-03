import {
  CloseIcon,
  IconButton,
} from "shivanya-ui";

import type { ShellBranding } from "../types/shell.js";
import { ShellBrand } from "./ShellBrand.js";

export interface DrawerHeaderProps {
  branding?: ShellBranding;
  onClose?: () => void;
}

export function DrawerHeader({
  branding,
  onClose,
}: DrawerHeaderProps) {
  return (
    <header className="shivanya-shell-drawer-header">
      {branding && (
        <ShellBrand
          branding={{
            ...branding,
            href: undefined,
          }}
        />
      )}

      <IconButton
        size="sm"
        variant="ghost"
        rounded
        iconRotateOnHover
        iconHoverColor="var(--shivanya-color-primary)"
        aria-label="Close menu"
        onClick={onClose}
      >
        <CloseIcon size="sm" />
      </IconButton>
    </header>
  );
}