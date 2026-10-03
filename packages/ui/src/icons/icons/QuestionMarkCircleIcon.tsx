import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function QuestionMarkCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9.75 9a2.25 2.25 0 1 1 3.78 1.64c-.72.67-1.53 1.16-1.53 2.36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.5h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  );
}