import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LayoutIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 10h18M10 10v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}