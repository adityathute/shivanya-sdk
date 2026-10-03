import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function BoltIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
