import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CursorIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 3v15l4-4 3 7 2-1-3-7h6z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
