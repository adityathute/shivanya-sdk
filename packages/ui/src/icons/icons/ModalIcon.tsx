import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ModalIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <rect x="7" y="8" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
