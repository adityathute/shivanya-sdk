import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function DiskIoIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 2v6" stroke="currentColor" strokeWidth="2" />
      <path d="m6.5 5 2.5 3 2.5-3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 22v-6" stroke="currentColor" strokeWidth="2" />
      <path d="m12.5 19 2.5-3 2.5 3" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </IconBase>
  );
}
