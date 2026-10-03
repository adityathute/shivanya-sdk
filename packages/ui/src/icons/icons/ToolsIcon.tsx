import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ToolsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14.7 6.3a4.5 4.5 0 0 0-5.9 5.9L4.5 16.5a2.12 2.12 0 1 0 3 3l4.3-4.3a4.5 4.5 0 0 0 5.9-5.9l-2.8 2.8-3-3 2.8-2.8Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
            <path d="M18.5 14.8v1.2M18.5 21v1.2M14.8 18.5H16M21 18.5h1.2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
