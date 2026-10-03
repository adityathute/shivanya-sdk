import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ServerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="3"
                y="4"
                width="18"
                height="6"
                rx="1.5"
            stroke="currentColor" strokeWidth="2" />

            <rect
                x="3"
                y="14"
                width="18"
                height="6"
                rx="1.5"
            stroke="currentColor" strokeWidth="2" />

            <path
                d="M7 7h.01"
            stroke="currentColor" strokeWidth="2" />

            <path
                d="M7 17h.01"
            stroke="currentColor" strokeWidth="2" />

            <path
                d="M11 7h6"
            stroke="currentColor" strokeWidth="2" />

            <path
                d="M11 17h6"
            stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
