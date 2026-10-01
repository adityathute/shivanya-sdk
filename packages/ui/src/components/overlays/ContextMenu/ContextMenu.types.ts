import type { HTMLAttributes, ReactNode } from "react";

export type ContextMenuSize = "sm" | "md" | "lg";
export type ContextMenuVariant = "default" | "filled" | "outlined";
export type ContextMenuRadius = "none" | "sm" | "md" | "lg";
export type ContextMenuState = "default" | "open" | "disabled";

export interface ContextMenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  open?: boolean;
  size?: ContextMenuSize;
  variant?: ContextMenuVariant;
  radius?: ContextMenuRadius;
  state?: ContextMenuState;
  disabled?: boolean;
  closeOnClick?: boolean;
  closeOnEscape?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
