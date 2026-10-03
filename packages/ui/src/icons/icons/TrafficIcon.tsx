import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TrafficIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 4v16" stroke="currentColor" strokeWidth="2" /> <path d="m4 7 3-3 3 3" stroke="currentColor" strokeWidth="2" /> <path d="M17 20V4" stroke="currentColor" strokeWidth="2" />
      <path d="m14 17 3 3 3-3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12h6" stroke="currentColor" strokeWidth="2" />
      <path d="M14 12h6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
