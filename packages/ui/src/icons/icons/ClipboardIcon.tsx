import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ClipboardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="5" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M9 5.5h6" stroke="currentColor" strokeWidth="2" />
            <path d="M10 3h4v4h-4z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
