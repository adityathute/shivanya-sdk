import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function NumberIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 5L7 19" stroke="currentColor" strokeWidth="2" />
            <path d="M17 5l-2 14" stroke="currentColor" strokeWidth="2" />
            <path d="M5 10h14" stroke="currentColor" strokeWidth="2" />
            <path d="M4 14h14" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
