import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ShieldCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3L5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3z" stroke="currentColor" strokeWidth="2" />
            <path d="M9.5 12.5l2 2 3.5-4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
