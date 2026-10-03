import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ImagesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        x="3"
        y="4"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m3 15 4-4 3 3 2-2 5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="13"
        cy="8"
        r="1.5"
        fill="currentColor"
      />
      <path
        d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </IconBase>
  );
}