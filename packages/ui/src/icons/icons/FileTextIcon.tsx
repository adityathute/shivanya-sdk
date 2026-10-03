import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function FileTextIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
            <path d="M14 3v4h4" stroke="currentColor" strokeWidth="2" />
            <path d="M9 11h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 15h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 19h4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
