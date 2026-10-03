import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DiskUsageIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 7h10" stroke="currentColor" strokeWidth="2" />
      <path d="M7 11h10" stroke="currentColor" strokeWidth="2" />
      <path d="M7 15h6" stroke="currentColor" strokeWidth="2" />
      <path d="M7 18h3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="17" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}
