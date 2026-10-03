import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ContainerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 5v14" stroke="currentColor" strokeWidth="2" />
            <path d="M16 5v14" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
