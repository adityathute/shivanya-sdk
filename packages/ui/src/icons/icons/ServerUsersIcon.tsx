import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ServerUsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="7" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="16.5" r="1" fill="currentColor" stroke="none" />
      <path d="M11 7.5h7" stroke="currentColor" strokeWidth="2" />
      <path d="M11 16.5h7" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
