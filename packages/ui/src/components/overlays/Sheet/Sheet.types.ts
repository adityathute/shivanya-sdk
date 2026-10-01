import type { HTMLAttributes, ReactNode } from "react";

export type SheetPosition = "left" | "right" | "top" | "bottom";
export type SheetSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type SheetVariant = "default" | "filled" | "outlined";
export type SheetRadius = "none" | "sm" | "md" | "lg";
export type SheetState = "default" | "open" | "disabled";

export interface SheetProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  position?: SheetPosition;
  size?: SheetSize;
  variant?: SheetVariant;
  radius?: SheetRadius;
  state?: SheetState;
  disabled?: boolean;
  overlay?: boolean;
  title?: ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
