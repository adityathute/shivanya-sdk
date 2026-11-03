import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function ThreadsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.5 22 3 18.5 3 12S6.5 2 12 2c4.5 0 7.5 2.5 8.2 6.5M12 17c-3.3 0-5-1.5-5-3.5S8.7 10 12 10c3.3 0 5 1.5 5 3.5 0 2.8-2.5 5-5.5 5-1.5 0-2.5-.5-3-1" />
      <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M12 17c1.5 0 2.5-.8 2.5-2 0-1-1-1.5-2.5-1.5s-2.5.5-2.5 1.5c0 1.2 1 2 2.5 2Z" />
    </IconBase>
  );
}