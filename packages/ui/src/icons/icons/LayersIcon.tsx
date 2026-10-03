import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LayersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 4 4 8l8 4 8-4-8-4Z" stroke="currentColor" strokeWidth="2" />
            <path d="M4 12l8 4 8-4" stroke="currentColor" strokeWidth="2" />
            <path d="M4 16l8 4 8-4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
