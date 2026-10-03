import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function PlusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 6v12" stroke="currentColor" strokeWidth="2" />
            <path d="M6 12h12" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
