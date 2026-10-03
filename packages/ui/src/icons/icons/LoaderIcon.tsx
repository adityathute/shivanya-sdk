import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function LoaderIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3v2" stroke="currentColor" strokeWidth="2" />
            <path d="M17.66 6.34l-1.41 1.41" stroke="currentColor" strokeWidth="2" />
            <path d="M21 12h-2" stroke="currentColor" strokeWidth="2" />
            <path d="M17.66 17.66l-1.41-1.41" stroke="currentColor" strokeWidth="2" />
            <path d="M12 21v-2" opacity=".6" stroke="currentColor" strokeWidth="2" />
            <path d="M6.34 17.66l1.41-1.41" opacity=".5" stroke="currentColor" strokeWidth="2" />
            <path d="M3 12h2" opacity=".4" stroke="currentColor" strokeWidth="2" />
            <path d="M6.34 6.34l1.41 1.41" opacity=".3" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
