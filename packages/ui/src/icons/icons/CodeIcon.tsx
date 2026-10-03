import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CodeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m8 9-4 3 4 3" stroke="currentColor" strokeWidth="2" /> <path d="m16 9 4 3-4 3" stroke="currentColor" strokeWidth="2" /> <path d="m14 5-4 14" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
