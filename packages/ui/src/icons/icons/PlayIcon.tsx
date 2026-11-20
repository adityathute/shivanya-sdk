import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function PlayIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m10 8 6 4-6 4V8Z"
        fill="currentColor"
        stroke="none"
      />
    </IconBase>
  );
}