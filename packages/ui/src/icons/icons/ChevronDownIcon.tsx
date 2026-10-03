import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ChevronDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
