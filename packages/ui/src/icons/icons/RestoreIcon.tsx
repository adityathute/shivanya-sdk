import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function RestoreIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 12a8 8 0 1 0 3-6.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 5v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}
