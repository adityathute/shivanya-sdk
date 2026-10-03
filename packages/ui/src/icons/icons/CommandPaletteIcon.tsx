import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CommandPaletteIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 10h8" stroke="currentColor" strokeWidth="2" />
            <path d="M8 14h5" stroke="currentColor" strokeWidth="2" />
            <path d="M16 8l2 2-2 2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
