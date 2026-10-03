import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function AnalyticsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 18h16" stroke="currentColor" strokeWidth="2" />
            <path d="M7 16v-5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16V8" stroke="currentColor" strokeWidth="2" />
            <path d="M17 16v-9" stroke="currentColor" strokeWidth="2" />
            <path d="M5 9l4-3 3 2 5-4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
