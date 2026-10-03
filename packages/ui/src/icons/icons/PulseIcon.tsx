import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function PulseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 12h3l2-4 3 8 2-5h8" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
