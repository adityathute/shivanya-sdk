import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function PendingUpdatesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M19 8a7 7 0 0 0-12.5-2" stroke="currentColor" strokeWidth="2" /> <path d="M6.5 3.5v3h3" stroke="currentColor" strokeWidth="2" />
      <path d="M5 16a7 7 0 0 0 12.5 2" stroke="currentColor" strokeWidth="2" />
      <path d="M17.5 20.5v-3h-3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
