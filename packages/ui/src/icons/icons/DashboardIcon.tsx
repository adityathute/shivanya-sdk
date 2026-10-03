import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DashboardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
            stroke="currentColor" strokeWidth="2" />

            <rect
                x="6"
                y="6"
                width="5"
                height="5"
                rx="1"
            stroke="currentColor" strokeWidth="2" />

            <rect
                x="13"
                y="6"
                width="5"
                height="3"
                rx="1"
            stroke="currentColor" strokeWidth="2" />

            <rect
                x="13"
                y="11"
                width="5"
                height="7"
                rx="1"
            stroke="currentColor" strokeWidth="2" />

            <rect
                x="6"
                y="13"
                width="5"
                height="5"
                rx="1"
            stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
