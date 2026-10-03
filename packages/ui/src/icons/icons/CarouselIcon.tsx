import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CarouselIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="5" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 7v10" stroke="currentColor" strokeWidth="2" />
            <path d="M21 7v10" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
