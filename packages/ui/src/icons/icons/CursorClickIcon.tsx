import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CursorClickIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 4l4.8 11.2 1.6-4.8 4.6-1.6L7 4z" stroke="currentColor" strokeWidth="2" />
            <path d="M13 13l4 7" stroke="currentColor" strokeWidth="2" />
            <path d="M18.5 2.5v2" stroke="currentColor" strokeWidth="2" />
            <path d="M21.5 5.5h-2" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 4l1.5-1.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
