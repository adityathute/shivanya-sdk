
import {
  CloseIcon,
  IconButton,
} from "shivanya-ui";

import type { ShellBranding } from "../types/shell.js";
import { ShellBrand } from "./ShellBrand.js";

export interface DrawerHeaderProps {
  branding?: ShellBranding;
  onClose?: () => void;
  className?: string;
}

export function DrawerHeader({
  branding,
  onClose,
  className = "",
}: DrawerHeaderProps) {
  return (
    <header
      className={[
        "shivanya-shell-drawer-header",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {branding && (
        <ShellBrand
          branding={{
            ...branding,
            href: undefined,
          }}
          compact={false}
        />
      )}

      <IconButton
        size="sm"
        variant="ghost"
        rounded
        iconRotateOnHover
        iconHoverColor="var(--shivanya-color-primary)"
        aria-label="Close menu"
        title="Close menu"
        onClick={onClose}
      >
        <CloseIcon size="sm" />
      </IconButton>
    </header>
  );
}
