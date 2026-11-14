import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function AdmitCardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        x="4"
        y="3.5"
        width="16"
        height="17"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <rect
        x="7"
        y="7"
        width="4.5"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="9.25"
        cy="8.7"
        r="1"
        fill="currentColor"
      />

      <path
        d="M7.8 11a1.6 1.6 0 0 1 2.9 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M14 8h3M14 11h3M7 15h10M7 18h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </IconBase>
  );
}