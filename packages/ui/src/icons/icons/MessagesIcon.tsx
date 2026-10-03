import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MessagesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4 4v-4H7a2 2 0 0 1-2-2V6z" stroke="currentColor" strokeWidth="2" />
            <path d="M8 8h8" stroke="currentColor" strokeWidth="2" />
            <path d="M8 11h6" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
