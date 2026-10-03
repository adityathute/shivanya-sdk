import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  );
}
