import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function EmptyStateIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
            <path d="M10 9h4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
