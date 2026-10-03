import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function SettingsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />

            <path d="M12 2.5v2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 19.5v2" stroke="currentColor" strokeWidth="2" />

            <path d="M2.5 12h2" stroke="currentColor" strokeWidth="2" />
            <path d="M19.5 12h2" stroke="currentColor" strokeWidth="2" />

            <path d="M5.3 5.3l1.4 1.4" stroke="currentColor" strokeWidth="2" />
            <path d="M17.3 17.3l1.4 1.4" stroke="currentColor" strokeWidth="2" />

            <path d="M18.7 5.3l-1.4 1.4" stroke="currentColor" strokeWidth="2" />
            <path d="M6.7 17.3l-1.4 1.4" stroke="currentColor" strokeWidth="2" />

            <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
