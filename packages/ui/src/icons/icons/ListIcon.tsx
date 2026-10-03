import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ListIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 7h10" stroke="currentColor" strokeWidth="2" />
            <path d="M9 12h10" stroke="currentColor" strokeWidth="2" />
            <path d="M9 17h10" stroke="currentColor" strokeWidth="2" />

            <circle cx="5" cy="7" r="1" stroke="currentColor" strokeWidth="2" />
            <circle cx="5" cy="12" r="1" stroke="currentColor" strokeWidth="2" />
            <circle cx="5" cy="17" r="1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
