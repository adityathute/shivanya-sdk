import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function NewOrdersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 5h10l2 3v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8l2-3Z" stroke="currentColor" strokeWidth="2" />

            <path d="M5 8h14" stroke="currentColor" strokeWidth="2" />

            <path d="M12 11v6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 14h6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
