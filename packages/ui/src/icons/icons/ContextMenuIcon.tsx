import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ContextMenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="7" cy="12" r="1.2" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="1.2" stroke="currentColor" strokeWidth="2" />
            <circle cx="17" cy="12" r="1.2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
