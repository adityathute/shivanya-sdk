import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MoonIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}