import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ExpensesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5v-7Z" stroke="currentColor" strokeWidth="2" />

            <path d="M4 9V7.5A2.5 2.5 0 0 1 6.5 5H16" stroke="currentColor" strokeWidth="2" />

            <path d="M20 11h-4a1.5 1.5 0 0 0 0 3h4" stroke="currentColor" strokeWidth="2" />

            <circle cx="16.5" cy="12.5" r="0.5" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
