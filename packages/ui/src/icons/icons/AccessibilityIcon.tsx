import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function AccessibilityIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
            <path d="M7 9h10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v10" stroke="currentColor" strokeWidth="2" />
            <path d="M8 20l4-6 4 6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
