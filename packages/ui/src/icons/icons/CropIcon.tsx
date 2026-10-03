import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CropIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M6 3v15a3 3 0 0 0 3 3h12M3 6h15a3 3 0 0 1 3 3v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3h3M3 3v3M21 21h-3M21 21v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  );
}