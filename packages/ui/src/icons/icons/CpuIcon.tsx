import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CpuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M9 2v3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 2v3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 19v3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 19v3" stroke="currentColor" strokeWidth="2" />
      <path d="M2 9h3" stroke="currentColor" strokeWidth="2" />
      <path d="M2 15h3" stroke="currentColor" strokeWidth="2" />
      <path d="M19 9h3" stroke="currentColor" strokeWidth="2" />
      <path d="M19 15h3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
