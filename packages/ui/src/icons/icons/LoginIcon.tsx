import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LoginIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="2" />
            <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="2" />
            <path d="M15 12H4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
