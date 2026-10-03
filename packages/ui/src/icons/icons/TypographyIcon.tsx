import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function TypographyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6h12" stroke="currentColor" strokeWidth="2" />
            <path d="M12 6v12" stroke="currentColor" strokeWidth="2" />
            <path d="M9 18h6" stroke="currentColor" strokeWidth="2" />

            <path d="M16 9h2" stroke="currentColor" strokeWidth="2" />
            <path d="M16 12h2" stroke="currentColor" strokeWidth="2" />
            <path d="M16 15h2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
