import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function AspectRatioIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 10l3-3" stroke="currentColor" strokeWidth="2" />
            <path d="M8 10V7h3" stroke="currentColor" strokeWidth="2" />
            <path d="M16 14l-3 3" stroke="currentColor" strokeWidth="2" />
            <path d="M16 14v3h-3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
