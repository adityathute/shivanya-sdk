import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MinusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
