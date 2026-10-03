import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ListsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 6h11" stroke="currentColor" strokeWidth="2" />
            <path d="M8 12h11" stroke="currentColor" strokeWidth="2" />
            <path d="M8 18h11" stroke="currentColor" strokeWidth="2" />
            <path d="M4 6h.01" stroke="currentColor" strokeWidth="2" />
            <path d="M4 12h.01" stroke="currentColor" strokeWidth="2" />
            <path d="M4 18h.01" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
