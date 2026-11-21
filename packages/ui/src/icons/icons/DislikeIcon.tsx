
import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DislikeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M7 14V4H4.5A1.5 1.5 0 0 0 3 5.5v7A1.5 1.5 0 0 0 4.5 14H7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m7 14 4 6a2 2 0 0 0 2-2v-4h4.5a2 2 0 0 0 1.96-2.39l-1.5-7A2 2 0 0 0 16 3H7v11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}
