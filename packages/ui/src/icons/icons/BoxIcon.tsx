import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function BoxIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l8 4.5-8 4.5-8-4.5 8-4.5z" stroke="currentColor" strokeWidth="2" />
            <path d="M4 7.5V16.5L12 21" stroke="currentColor" strokeWidth="2" />
            <path d="M20 7.5V16.5L12 21" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
