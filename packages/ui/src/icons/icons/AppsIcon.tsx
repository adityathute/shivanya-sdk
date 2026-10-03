import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function AppsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
            <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
            <rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
