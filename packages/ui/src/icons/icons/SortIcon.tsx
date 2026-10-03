import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function SortIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 5v14M4 8l3-3 3 3M17 19V5M14 16l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  );
}
