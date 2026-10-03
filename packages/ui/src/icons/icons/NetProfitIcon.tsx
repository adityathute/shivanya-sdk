import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function NetProfitIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />

            <path d="M12 4v8h8" stroke="currentColor" strokeWidth="2" />

            <path d="M12 12l5.5 5.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
