import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
            stroke="currentColor" strokeWidth="2" />
            <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
