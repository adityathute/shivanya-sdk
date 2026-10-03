import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TypeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M4 5h16M12 5v14M8 19h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}