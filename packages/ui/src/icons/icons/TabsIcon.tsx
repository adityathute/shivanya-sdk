import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TabsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="6" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="10" y="6" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="16" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
            <path d="M4 10h16" stroke="currentColor" strokeWidth="2" />
            <path d="M6 15h12" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
