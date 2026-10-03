import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TreeViewIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 6v12" stroke="currentColor" strokeWidth="2" />
            <path d="M8 9h8" stroke="currentColor" strokeWidth="2" />
            <path d="M8 15h8" stroke="currentColor" strokeWidth="2" />

            <circle cx="18" cy="9" r="1.5" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="15" r="1.5" stroke="currentColor" strokeWidth="2" />
            <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
