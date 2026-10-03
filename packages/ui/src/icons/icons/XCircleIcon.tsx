import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function XCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/><path d="m9 9 6 6M15 9l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </IconBase>
  );
}
