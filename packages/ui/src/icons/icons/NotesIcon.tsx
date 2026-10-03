import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function NotesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 3.5h8l4 4V20.5H6z" stroke="currentColor" strokeWidth="2" />
            <path d="M14 3.5v4h4" stroke="currentColor" strokeWidth="2" />
            <path d="M9 12h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 16h6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
