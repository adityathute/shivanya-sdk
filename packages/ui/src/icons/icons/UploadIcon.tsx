import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function UploadIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 16V5" stroke="currentColor" strokeWidth="2" />
            <path d="M8 9l4-4 4 4" stroke="currentColor" strokeWidth="2" />
            <path d="M5 19h14" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
