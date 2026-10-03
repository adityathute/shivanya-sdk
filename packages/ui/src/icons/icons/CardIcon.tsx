import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M4 9h16" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
