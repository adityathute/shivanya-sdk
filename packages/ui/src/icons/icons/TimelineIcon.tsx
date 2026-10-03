import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TimelineIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
