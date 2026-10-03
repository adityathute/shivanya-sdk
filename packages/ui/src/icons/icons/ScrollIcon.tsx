import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ScrollIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="7" y="4" width="10" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
