import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ResultIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4M12 13v4M9 20h6M10 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}