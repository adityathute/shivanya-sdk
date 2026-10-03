import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function GridIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
