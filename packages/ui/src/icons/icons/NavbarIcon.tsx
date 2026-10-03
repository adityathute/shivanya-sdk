import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function NavbarIcon(props: IconProps) {
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
        d="M3 9h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="6"
        cy="6.5"
        r="0.75"
        fill="currentColor"
      />
      <circle
        cx="9"
        cy="6.5"
        r="0.75"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="6.5"
        r="0.75"
        fill="currentColor"
      />
    </IconBase>
  );
}