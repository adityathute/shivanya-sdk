import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function CubeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 4.5 7 12 11l7.5-4L12 3Z" stroke="currentColor" strokeWidth="2" />
            <path d="M4.5 7v10L12 21V11" stroke="currentColor" strokeWidth="2" />
            <path d="M19.5 7v10L12 21" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
