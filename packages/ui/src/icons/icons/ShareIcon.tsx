import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ShareIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2"/><path d="m8 11 8-4M8 13l8 4" stroke="currentColor" strokeWidth="2"/>
    </IconBase>
  );
}
