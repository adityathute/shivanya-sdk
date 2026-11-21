
import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function BookmarkIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M6 4.75C6 4.336 6.336 4 6.75 4h10.5c.414 0 .75.336.75.75V21l-6-4-6 4V4.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}
