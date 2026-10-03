import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function FocusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 3v3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 18v3" stroke="currentColor" strokeWidth="2" />
            <path d="M3 12h3" stroke="currentColor" strokeWidth="2" />
            <path d="M18 12h3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
