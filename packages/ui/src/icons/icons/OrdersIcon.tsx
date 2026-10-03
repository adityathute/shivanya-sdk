import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function OrdersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 19 7v10l-7 4-7-4V7l7-4Z" stroke="currentColor" strokeWidth="2" />

            <path d="M5 7l7 4 7-4" stroke="currentColor" strokeWidth="2" />

            <path d="M12 11v10" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
