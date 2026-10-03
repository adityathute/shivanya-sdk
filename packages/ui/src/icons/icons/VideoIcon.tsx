import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function VideoIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M16 10l4-2v8l-4-2z" stroke="currentColor" strokeWidth="2" />
            <path d="M9 10l4 2-4 2z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
