import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ContrastIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M12 4v16" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
