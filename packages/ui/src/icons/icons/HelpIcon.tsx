import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function HelpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M9.8 9.5a2.2 2.2 0 1 1 3.8 1.5c-.8.7-1.6 1.2-1.6 2.3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16h.01" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
