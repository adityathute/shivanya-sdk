import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function RefreshIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 5v5h-5" stroke="currentColor" strokeWidth="2" />

            <path d="M20 10a8 8 0 1 0 2 5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
