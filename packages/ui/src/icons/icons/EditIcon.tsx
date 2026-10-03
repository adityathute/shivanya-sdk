import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function EditIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M17.25 2.75a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L17.25 2.75z" stroke="currentColor" strokeWidth="2" />
            <path d="M14.5 5.5l4 4" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
