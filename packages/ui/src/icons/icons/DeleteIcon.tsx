import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DeleteIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 6h18" stroke="currentColor" strokeWidth="2" />
            <path d="M8 6V4h8v2" stroke="currentColor" strokeWidth="2" />
            <path d="M19 6l-1 15H6L5 6" stroke="currentColor" strokeWidth="2" />
            <path d="M10 11v6" stroke="currentColor" strokeWidth="2" />
            <path d="M14 11v6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
