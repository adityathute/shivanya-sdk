import type { HTMLAttributes, ReactNode } from "react";

export type DrawerPosition = "left" | "right" | "top" | "bottom";
export type DrawerSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type DrawerVariant = "default" | "filled" | "outlined";
export type DrawerRadius = "none" | "sm" | "md" | "lg";
export type DrawerState = "default" | "open" | "disabled";

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  position?: DrawerPosition;
  size?: DrawerSize;
  variant?: DrawerVariant;
  radius?: DrawerRadius;
  state?: DrawerState;
  disabled?: boolean;
  overlay?: boolean;
  title?: ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
