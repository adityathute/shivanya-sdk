import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function PaginationIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 7l-3 5 3 5" stroke="currentColor" strokeWidth="2" />
            <path d="M16 7l3 5-3 5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
