import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LogoIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="2"
            stroke="currentColor" strokeWidth="2" />
            <path d="M8 15l3-4 2 2 3-4" stroke="currentColor" strokeWidth="2" />
            <circle cx="9" cy="9" r="1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
