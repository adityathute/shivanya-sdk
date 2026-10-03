import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CalendarIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 3v4" stroke="currentColor" strokeWidth="2" />
            <path d="M16 3v4" stroke="currentColor" strokeWidth="2" />
            <path d="M4 9h16" stroke="currentColor" strokeWidth="2" />
            <path d="M8 13h.01" stroke="currentColor" strokeWidth="2" />
            <path d="M12 13h.01" stroke="currentColor" strokeWidth="2" />
            <path d="M16 13h.01" stroke="currentColor" strokeWidth="2" />
            <path d="M8 17h.01" stroke="currentColor" strokeWidth="2" />
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" />
            <path d="M16 17h.01" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
