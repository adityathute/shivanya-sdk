import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ThemeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3a9 9 0 1 0 9 9A7 7 0 0 1 12 3z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
