import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function WindowIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 8h18" stroke="currentColor" strokeWidth="2" />
            <path d="M9 8v12" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="6" r="0.5" fill="currentColor" stroke="none" />
            <circle cx="8" cy="6" r="0.5" fill="currentColor" stroke="none" />
            <circle cx="10" cy="6" r="0.5" fill="currentColor" stroke="none" />
    </IconBase>
  );
}
