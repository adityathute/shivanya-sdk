import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ReminderIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" stroke="currentColor" strokeWidth="2" />
            <path d="M10 21h4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
