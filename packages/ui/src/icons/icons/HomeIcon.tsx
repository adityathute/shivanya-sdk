import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function HomeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 10.5L12 4l8 6.5" stroke="currentColor" strokeWidth="2" />

            <path d="M6 9.5V20h12V9.5" stroke="currentColor" strokeWidth="2" />

            <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
