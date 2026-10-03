import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function WifiIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 9.5a10 10 0 0 1 14 0" stroke="currentColor" strokeWidth="2" />

            <path d="M8 12.5a6 6 0 0 1 8 0" stroke="currentColor" strokeWidth="2" />

            <path d="M10.8 15.5a2 2 0 0 1 2.4 0" stroke="currentColor" strokeWidth="2" />

            <circle
                cx="12"
                cy="19"
                r="1"
                fill="currentColor"
                stroke="none"
            />
    </IconBase>
  );
}
