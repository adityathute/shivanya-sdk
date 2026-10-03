import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TooltipIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-3 3v-3H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
            <path d="M12 10v2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
