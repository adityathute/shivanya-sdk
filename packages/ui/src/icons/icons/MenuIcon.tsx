import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" stroke="currentColor" strokeWidth="2" />
            <path d="M4 12h16" stroke="currentColor" strokeWidth="2" />
            <path d="M4 17h16" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
