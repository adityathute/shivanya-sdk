import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ErrorIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v6" stroke="currentColor" strokeWidth="2" />
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
