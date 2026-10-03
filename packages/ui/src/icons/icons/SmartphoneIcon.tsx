import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function SmartphoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M10 5h4" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none" />
    </IconBase>
  );
}
