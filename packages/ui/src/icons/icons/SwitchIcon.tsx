import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function SwitchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="9" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
