import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function EyeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="2" />
            <circle
                cx="12"
                cy="12"
                r="3"
            stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
