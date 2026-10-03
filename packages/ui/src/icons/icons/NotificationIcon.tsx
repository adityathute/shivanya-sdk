import { IconBase } from "../IconBase";
import type { IconProps } from "../types";

export function NotificationIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 4a4 4 0 0 1 4 4v3.5c0 .8.3 1.6.9 2.2l.6.6c.4.4.1 1.2-.5 1.2H7c-.6 0-.9-.8-.5-1.2l.6-.6c.6-.6.9-1.4.9-2.2V8a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="2" />
            <path d="M10 18a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}
