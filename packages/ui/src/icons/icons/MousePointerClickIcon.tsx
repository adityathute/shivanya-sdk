import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MousePointerClickIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 3v12l3-3 2 5 2-.8-2-5 4-.5L7 3z" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 4.5l1-1" stroke="currentColor" strokeWidth="2" />
            <path d="M19 8h2" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 11.5l1 1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
