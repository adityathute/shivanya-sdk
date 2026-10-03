import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ToastIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M9 10h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 14h4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
