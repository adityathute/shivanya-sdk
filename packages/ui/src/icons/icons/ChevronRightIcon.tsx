import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ChevronRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
