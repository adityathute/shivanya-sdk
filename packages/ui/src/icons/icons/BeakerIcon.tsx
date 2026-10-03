import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function BeakerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 3V7L5 14.5A4 4 0 0 0 8.5 20H15.5A4 4 0 0 0 19 14.5L15 7V3" stroke="currentColor" strokeWidth="2" />

            <path d="M9 7H15" stroke="currentColor" strokeWidth="2" />

            <path d="M7.5 15H16.5" stroke="currentColor" strokeWidth="2" />

            <path d="M9.5 12L10.8 13.3L12.5 11.6L14.5 13.6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
