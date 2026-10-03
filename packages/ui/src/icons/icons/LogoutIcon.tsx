import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LogoutIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" />
            <path d="M14 17l5-5-5-5" stroke="currentColor" strokeWidth="2" />
            <path d="M20 12H9" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
