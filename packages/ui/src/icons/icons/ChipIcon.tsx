import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ChipIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="8" width="12" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
            <path d="M9 8V6" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8V6" stroke="currentColor" strokeWidth="2" />
            <path d="M15 8V6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 16v2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16v2" stroke="currentColor" strokeWidth="2" />
            <path d="M15 16v2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
