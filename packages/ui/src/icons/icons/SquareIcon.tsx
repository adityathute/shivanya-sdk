import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function SquareIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="2"
                ry="2"
            stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
