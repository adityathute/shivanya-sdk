import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DeviceMobileIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="7"
                y="2"
                width="10"
                height="20"
                rx="2"
            stroke="currentColor" strokeWidth="2" />
            <line
                x1="10"
                y1="5"
                x2="14"
                y2="5"
            stroke="currentColor" strokeWidth="2" />
            <circle
                cx="12"
                cy="18"
                r="1"
                fill="currentColor"
                stroke="none"
            />
    </IconBase>
  );
}
