import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function GlobeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle
                cx="12"
                cy="12"
                r="9"
            stroke="currentColor" strokeWidth="2" />

            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" />

            <path d="M12 3C9.5 5.5 8 8.6 8 12C8 15.4 9.5 18.5 12 21" stroke="currentColor" strokeWidth="2" />

            <path d="M12 3C14.5 5.5 16 8.6 16 12C16 15.4 14.5 18.5 12 21" stroke="currentColor" strokeWidth="2" />

            <path d="M5.5 7H18.5" stroke="currentColor" strokeWidth="2" />

            <path d="M5.5 17H18.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
