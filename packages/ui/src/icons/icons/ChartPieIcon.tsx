import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ChartPieIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle
                cx="12"
                cy="12"
                r="9"
            stroke="currentColor" strokeWidth="2" />
            <path d="M12 3v9h9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L18.5 18.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
