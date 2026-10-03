import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TasksIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="m8.5 9 1.5 1.5L13 7.5" stroke="currentColor" strokeWidth="2" />
            <path d="M8.5 14H15" stroke="currentColor" strokeWidth="2" />
            <path d="M8.5 17H15" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
