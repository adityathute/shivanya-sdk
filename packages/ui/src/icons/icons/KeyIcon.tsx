import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function KeyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle
        cx="8"
        cy="16"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m10.5 13.5 7-7M15 9l2 2M17 6.5l1.5 1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}