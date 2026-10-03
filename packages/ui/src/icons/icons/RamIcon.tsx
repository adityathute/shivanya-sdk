import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function RamIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 10h2v4H7z" fill="currentColor" stroke="none" />
      <path d="M11 10h2v4h-2z" fill="currentColor" stroke="none" />
      <path d="M15 10h2v4h-2z" fill="currentColor" stroke="none" />
      <path d="M7 4v3" stroke="currentColor" strokeWidth="2" />
      <path d="M11 4v3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 4v3" stroke="currentColor" strokeWidth="2" />
      <path d="M7 17v3" stroke="currentColor" strokeWidth="2" />
      <path d="M11 17v3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 17v3" stroke="currentColor" strokeWidth="2" />
      <path d="M2 10v4" stroke="currentColor" strokeWidth="2" />
      <path d="M22 10v4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
