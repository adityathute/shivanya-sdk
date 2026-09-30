import type { ReactElement, ReactNode } from "react";

export type FocusTrapState =
  | "default"
  | "active"
  | "inactive"
  | "disabled";

export interface FocusTrapProps {
  children?: ReactElement | ReactNode;
  className?: string;
  state?: FocusTrapState;
  disabled?: boolean;
  autoFocus?: boolean;
  restoreFocus?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
}
