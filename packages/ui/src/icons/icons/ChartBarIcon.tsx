import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ChartBarIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="2" />
            <path d="M7 20v-6" stroke="currentColor" strokeWidth="2" />
            <path d="M12 20V9" stroke="currentColor" strokeWidth="2" />
            <path d="M17 20V5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
