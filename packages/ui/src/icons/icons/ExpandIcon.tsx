import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ExpandIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3 3 6 6M21 3l-6 6M21 21l-6-6M3 21l6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}