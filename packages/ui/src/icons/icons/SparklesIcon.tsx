import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function SparklesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3z" stroke="currentColor" strokeWidth="2" />

            <path d="M18.5 14l.6 1.9L21 16.5l-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6.6-1.9z" stroke="currentColor" strokeWidth="2" />

            <path d="M6 15l.8 2.4L9.2 18l-2.4.6L6 21l-.8-2.4L2.8 18l2.4-.6L6 15z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
