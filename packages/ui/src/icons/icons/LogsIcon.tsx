import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LogsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="4"
                y="3"
                width="16"
                height="18"
                rx="2"
            stroke="currentColor" strokeWidth="2" />

            <path d="M8 8h8" stroke="currentColor" strokeWidth="2" />
            <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
            <path d="M8 16h5" stroke="currentColor" strokeWidth="2" />

            <circle cx="6" cy="8" r=".5" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="12" r=".5" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="16" r=".5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
