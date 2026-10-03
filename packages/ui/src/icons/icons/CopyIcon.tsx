import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CopyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="8" y="8" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M6 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
