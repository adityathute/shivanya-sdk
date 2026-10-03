import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TagsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m8 4 9.4 9.4a2 2 0 0 1 0 2.8l-4.2 4.2a2 2 0 0 1-2.8 0L3 13V6a2 2 0 0 1 2-2h3Z" stroke="currentColor" strokeWidth="2" />
            <path d="M14 4h3a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" />
            <circle cx="7" cy="7" r="1.2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
