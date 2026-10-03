import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MousePointerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M5 3.5 19 14l-6.5 1.5L10 22 5 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}