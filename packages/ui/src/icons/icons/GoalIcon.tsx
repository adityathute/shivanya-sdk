import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function GoalIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </IconBase>
  );
}
