import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ToggleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        x="3"
        y="7"
        width="18"
        height="10"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="16"
        cy="12"
        r="3"
        fill="currentColor"
      />
    </IconBase>
  );
}