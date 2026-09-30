import type {
  CSSProperties,
  ReactNode,
  RefObject,
} from "react";

export type PortalState =
  | "default"
  | "mounted"
  | "unmounted"
  | "disabled";

export interface PortalProps {
  children?: ReactNode;
  container?: HTMLElement | RefObject<HTMLElement | null> | null;
  disabled?: boolean;
  state?: PortalState;
  className?: string;
  style?: CSSProperties;
}
