import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function UnlockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="4"
                y="10"
                width="16"
                height="10"
                rx="2"
            stroke="currentColor" strokeWidth="2" />

            <path d="M8 10V7a4 4 0 0 1 7.5-2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
