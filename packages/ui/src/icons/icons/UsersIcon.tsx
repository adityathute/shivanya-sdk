import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function UsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 21v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="2" />

            <circle
                cx="9.5"
                cy="8"
                r="3"
            stroke="currentColor" strokeWidth="2" />

            <path d="M20 21v-1a3.5 3.5 0 0 0-2.5-3.35" stroke="currentColor" strokeWidth="2" />

            <path d="M16.5 5.2a3 3 0 0 1 0 5.6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
