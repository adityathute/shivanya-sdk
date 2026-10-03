import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function FlexIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="8" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="10" y="8" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="16" y="8" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
