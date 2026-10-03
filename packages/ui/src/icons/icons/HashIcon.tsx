import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function HashIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M10 3 8 21M16 3l-2 18M4 9h16M3 15h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}