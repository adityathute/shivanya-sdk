import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ERPIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />

            <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
            <path d="M9 9v11" stroke="currentColor" strokeWidth="2" />
            <path d="M15 9v11" stroke="currentColor" strokeWidth="2" />

            <circle cx="6" cy="6.5" r=".6" stroke="currentColor" strokeWidth="2" />
            <circle cx="9" cy="6.5" r=".6" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="6.5" r=".6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
