
import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ReportIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M5 21V4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 5h13l-2.5 4L18 13H5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconBase>
  );
}
