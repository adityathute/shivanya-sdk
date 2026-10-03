import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function SpacerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" />
            <path d="M8 9l-3 3 3 3" stroke="currentColor" strokeWidth="2" />
            <path d="M16 9l3 3-3 3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
