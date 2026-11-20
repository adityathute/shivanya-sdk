import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function YoutubeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path fill="currentColor" d="M21.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.6.3A2.7 2.7 0 0 0 2.5 7.2C2 8.8 2 12 2 12s0 3.2.5 4.8a2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.6-.3a2.7 2.7 0 0 0 1.9-1.9C22 15.2 22 12 22 12s0-3.2-.5-4.8ZM10 15V9l5 3-5 3Z" />
    </IconBase>
  );
}