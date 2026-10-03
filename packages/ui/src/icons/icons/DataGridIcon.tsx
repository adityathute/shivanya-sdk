import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DataGridIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M4 10h16" stroke="currentColor" strokeWidth="2" />
            <path d="M4 15h16" stroke="currentColor" strokeWidth="2" />
            <path d="M10 5v14" stroke="currentColor" strokeWidth="2" />
            <path d="M15 5v14" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
