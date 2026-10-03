import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function MemoryIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5.5C10.2 3.8 7 4.2 6 6.6C3.7 6.2 2 8 2.6 10.3C.8 11.7 1.2 14.6 3.2 15.6C2.9 18 5.2 19.8 7.4 19C8.5 21.1 11.3 21.2 12 19.2C12.7 21.2 15.5 21.1 16.6 19C18.8 19.8 21.1 18 20.8 15.6C22.8 14.6 23.2 11.7 21.4 10.3C22 8 20.3 6.2 18 6.6C17 4.2 13.8 3.8 12 5.5Z" stroke="currentColor" strokeWidth="2" />

            <path d="M12 7.5V18" stroke="currentColor" strokeWidth="2" />

            <path d="M9 9.5C10 10.2 10.5 11.1 10.5 12" stroke="currentColor" strokeWidth="2" />
            <path d="M15 9.5C14 10.2 13.5 11.1 13.5 12" stroke="currentColor" strokeWidth="2" />

            <path d="M9 15C10 14.4 11 14.4 12 15" stroke="currentColor" strokeWidth="2" />
            <path d="M15 15C14 14.4 13 14.4 12 15" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
