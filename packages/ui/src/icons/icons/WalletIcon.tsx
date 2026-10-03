import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function WalletIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7A2 2 0 0 1 6 5H17A2 2 0 0 1 19 7V17A2 2 0 0 1 17 19H6A2 2 0 0 1 4 17V7Z" stroke="currentColor" strokeWidth="2" />

            <path d="M4 9H19" stroke="currentColor" strokeWidth="2" />

            <path d="M15 13H19V16H15A1.5 1.5 0 0 1 15 13Z" stroke="currentColor" strokeWidth="2" />

            <circle
                cx="16.8"
                cy="14.5"
                r="0.5"
                fill="currentColor"
                stroke="none"
            />
    </IconBase>
  );
}
