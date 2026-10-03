import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s-6-5.5-6-11a6 6 0 1 1 12 0c0 5.5-6 11-6 11Z" stroke="currentColor" strokeWidth="2" />

            <circle
                cx="12"
                cy="10"
                r="2.5"
            stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
