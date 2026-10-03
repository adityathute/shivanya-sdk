import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function BellIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 16H6l1.5-2v-3a4.5 4.5 0 1 1 9 0v3z" stroke="currentColor" strokeWidth="2" />
            <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
