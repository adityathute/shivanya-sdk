import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function BadgeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l2.2 2.2 3.1-.4-.4 3.1L19 10l-2.1 2.1.4 3.1-3.1-.4L12 17l-2.2-2.2-3.1.4.4-3.1L5 10l2.1-2.1-.4-3.1 3.1.4L12 3z" stroke="currentColor" strokeWidth="2" />
            <path d="M9.5 10.5l1.7 1.7 3.3-3.3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
