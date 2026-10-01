import type { HTMLAttributes, ReactNode } from "react";

export type CommandPaletteSize = "sm" | "md" | "lg";
export type CommandPaletteVariant = "default" | "filled" | "outlined";
export type CommandPaletteRadius = "none" | "sm" | "md" | "lg";
export type CommandPaletteState = "default" | "open" | "disabled";

export interface CommandPaletteProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  size?: CommandPaletteSize;
  variant?: CommandPaletteVariant;
  radius?: CommandPaletteRadius;
  state?: CommandPaletteState;
  disabled?: boolean;
  placeholder?: string;
  overlay?: boolean;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
