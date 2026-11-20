import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function GuideIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 6.5C9.5 4.5 6 4 3 5v14c3-.8 6.5-.3 9 1.5M12 6.5C14.5 4.5 18 4 21 5v14c-3-.8-6.5-.3-9 1.5M12 6.5v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9h3M6 12h3M15 9h3M15 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconBase>
  );
}