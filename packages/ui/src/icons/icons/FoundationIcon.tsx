import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function FoundationIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 7.5 8 4.5 8-4.5M12 12v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}