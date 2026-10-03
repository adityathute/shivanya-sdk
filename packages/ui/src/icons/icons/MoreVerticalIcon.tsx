import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MoreVerticalIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="5" r="1" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="19" r="1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
