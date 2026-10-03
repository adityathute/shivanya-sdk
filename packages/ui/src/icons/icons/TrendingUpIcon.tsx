import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TrendingUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 16l5-5 3 3 8-8" stroke="currentColor" strokeWidth="2" />
            <path d="M15 6h5v5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
