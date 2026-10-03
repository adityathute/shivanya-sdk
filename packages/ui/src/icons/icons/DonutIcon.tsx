import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DonutIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M12 3a9 9 0 1 0 9 9h-9V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3v9h9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}