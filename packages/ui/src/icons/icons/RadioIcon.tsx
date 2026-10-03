import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function RadioIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
