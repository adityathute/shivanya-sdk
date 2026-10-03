import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function StackIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="5" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="6" y="10" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="6" y="15" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
