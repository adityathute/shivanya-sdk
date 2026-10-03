import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function StocksIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 18V9" stroke="currentColor" strokeWidth="2" />
            <path d="M9 18V6" stroke="currentColor" strokeWidth="2" />
            <path d="M13 18V11" stroke="currentColor" strokeWidth="2" />
            <path d="M17 18V4" stroke="currentColor" strokeWidth="2" />

            <path d="M4 18h16" stroke="currentColor" strokeWidth="2" />

            <path d="M6 8l3-2 4 4 5-6" stroke="currentColor" strokeWidth="2" />
            <path d="M16 4h2v2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
