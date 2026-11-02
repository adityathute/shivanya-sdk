import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function AdmitCardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 5h16v4a3 3 0 0 0 0 6v4H4v-4a3 3 0 0 0 0-6V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 8v2M12 14v2M12 11v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}