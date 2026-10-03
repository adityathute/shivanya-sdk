import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function EyeOffIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" />
            <path d="M10.6 10.6A3 3 0 0 0 13.4 13.4" stroke="currentColor" strokeWidth="2" />
            <path d="M9.9 5.1A11 11 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-4 4.8" stroke="currentColor" strokeWidth="2" />
            <path d="M6.2 6.2A17 17 0 0 0 2 12s4 7 10 7a9 9 0 0 0 3-.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
