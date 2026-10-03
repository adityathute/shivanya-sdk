import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CompassIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M15.5 8.5 14 14l-5.5 1.5L10 10z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
