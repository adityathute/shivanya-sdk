import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function PartnerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="8.5" cy="8" r="3" stroke="currentColor" strokeWidth="2" />

            <path d="M3 19c.5-3.2 2.4-5 5.5-5s5 1.8 5.5 5" stroke="currentColor" strokeWidth="2" />

            <path d="M16 10.5c1.7-1.7 4.5-.5 4.5 1.8 0 2.4-3.5 4.7-4.5 5.3-1-.6-4.5-2.9-4.5-5.3 0-2.3 2.8-3.5 4.5-1.8Z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
