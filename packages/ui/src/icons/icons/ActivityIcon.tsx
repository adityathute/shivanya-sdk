import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ActivityIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
                d="M3 12h4l2.5-7 5 14L17 12h4"
            stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
