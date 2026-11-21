
import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LikeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M7 10v10H4.5A1.5 1.5 0 0 1 3 18.5v-7A1.5 1.5 0 0 1 4.5 10H7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10l4-6a2 2 0 0 1 2 2v4h4.5a2 2 0 0 1 1.96 2.39l-1.5 7A2 2 0 0 1 16 21H7V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}
