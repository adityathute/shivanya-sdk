import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ReportsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 4h9l3 3v13H6z" stroke="currentColor" strokeWidth="2" />
            <path d="M15 4v3h3" stroke="currentColor" strokeWidth="2" />
            <path d="M9 16l2-2 2 1 2-3" stroke="currentColor" strokeWidth="2" />
            <path d="M9 10h2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
