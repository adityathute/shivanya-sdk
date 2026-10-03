import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function StepperIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 12h2" stroke="currentColor" strokeWidth="2" />
            <path d="M14 12h2" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
