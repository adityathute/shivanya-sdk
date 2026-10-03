import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ImageIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="9" cy="10" r="1.5" stroke="currentColor" strokeWidth="2" />
            <path d="M5 17l5-5 3 3 3-4 3 6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
