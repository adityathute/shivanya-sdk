import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="5"
                y="11"
                width="14"
                height="10"
                rx="2"
            stroke="currentColor" strokeWidth="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
