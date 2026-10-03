import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LinkIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9.5 14.5 14.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 17.5H6a4 4 0 0 1 0-8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.5 6.5H18a4 4 0 0 1 0 8h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}
