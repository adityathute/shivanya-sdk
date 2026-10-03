import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function UserCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="2" />
            <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M17 8l2 2 4-4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
