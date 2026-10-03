import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TrendingDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 8l5 5 3-3 8 8" stroke="currentColor" strokeWidth="2" />
            <path d="M15 18h5v-5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
