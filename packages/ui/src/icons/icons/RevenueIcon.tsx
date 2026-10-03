import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function RevenueIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 16l4-4 3 3 7-7" stroke="currentColor" strokeWidth="2" />
            <path d="M16 8h3v3" stroke="currentColor" strokeWidth="2" />
            <path d="M4 19h16" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
