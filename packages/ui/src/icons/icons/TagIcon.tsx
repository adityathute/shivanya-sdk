import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TagIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3.4 13.4a2 2 0 0 1-.6-1.4V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.4Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="7.5" cy="7.5" r="1.25" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
