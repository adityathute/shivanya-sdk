import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ActiveUsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="2" />
      <path d="m16 15 2 2 3.5-4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
