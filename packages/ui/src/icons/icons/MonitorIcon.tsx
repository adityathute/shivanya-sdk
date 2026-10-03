import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MonitorIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="3"
                y="4"
                width="18"
                height="12"
                rx="2"
            stroke="currentColor" strokeWidth="2" />

            <path d="M12 16V20" stroke="currentColor" strokeWidth="2" />

            <path d="M8 20H16" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
