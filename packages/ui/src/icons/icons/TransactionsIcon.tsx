import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TransactionsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M9 8h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 12h6" stroke="currentColor" strokeWidth="2" />
            <path d="M9 16h4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
