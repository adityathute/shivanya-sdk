import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function UserPlusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2"/><path d="M3 20a6 6 0 0 1 12 0M19 9v6M16 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </IconBase>
  );
}
