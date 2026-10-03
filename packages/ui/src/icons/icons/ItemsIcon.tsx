import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ItemsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M9 9h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 12h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 15h4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
