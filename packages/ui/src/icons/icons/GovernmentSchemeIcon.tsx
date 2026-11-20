import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function GovernmentSchemeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m3 9 9-6 9 6H3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18M2 18h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}