import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ChevronUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m18 15-6-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  );
}
