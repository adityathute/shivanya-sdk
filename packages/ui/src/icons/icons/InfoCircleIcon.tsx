import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function InfoCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/><path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </IconBase>
  );
}
