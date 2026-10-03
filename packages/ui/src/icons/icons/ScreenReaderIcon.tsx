import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ScreenReaderIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="4"
                y="5"
                width="16"
                height="11"
                rx="2"
            stroke="currentColor" strokeWidth="2" />
            <path d="M9 19h6" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16v3" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10.5" r="2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
