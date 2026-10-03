import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function FilterIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </IconBase>
  );
}
