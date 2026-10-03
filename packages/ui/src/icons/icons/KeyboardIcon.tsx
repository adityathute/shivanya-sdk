import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function KeyboardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="3"
                y="6"
                width="18"
                height="12"
                rx="2"
            stroke="currentColor" strokeWidth="2" />
            <path d="M6 10h1M9 10h1M12 10h1M15 10h1M18 10h1" stroke="currentColor" strokeWidth="2" />
            <path d="M6 13h1M9 13h1M12 13h6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
