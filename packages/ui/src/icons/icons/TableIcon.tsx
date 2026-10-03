import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TableIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
            <path d="M9 5v14" stroke="currentColor" strokeWidth="2" />
            <path d="M15 5v14" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
