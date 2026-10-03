import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function PopoverIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M10 15l2 4 2-4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
