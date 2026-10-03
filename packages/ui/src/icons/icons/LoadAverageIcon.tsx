import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LoadAverageIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 17h3l2-6 3 8 3-10 2 8h3" stroke="currentColor" strokeWidth="2" /> <path d="M4 21h16" stroke="currentColor" strokeWidth="2" />
      <path d="M4 3v14" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
