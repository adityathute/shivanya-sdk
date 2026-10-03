import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 19 19 5M9 5h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  );
}
