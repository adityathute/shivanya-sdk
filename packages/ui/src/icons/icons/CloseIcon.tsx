import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m6 6 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}