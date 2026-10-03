import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ProcessesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="4" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="14" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M5.5 7h3" stroke="currentColor" strokeWidth="2" />
      <path d="M15.5 7h3" stroke="currentColor" strokeWidth="2" />
      <path d="M5.5 17h3" stroke="currentColor" strokeWidth="2" />
      <path d="M15.5 17h3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
