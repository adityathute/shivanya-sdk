import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LiveVisitorsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M6 20a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="2" />
      <path d="M19 7a5 5 0 0 1 2 4" stroke="currentColor" strokeWidth="2" />
      <path d="M17.5 8.5a3 3 0 0 1 1 2.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
