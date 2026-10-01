import type { HTMLAttributes, ReactNode } from "react";

export type TooltipSize = "xs" | "sm" | "md" | "lg" | "xl";

export type TooltipVariant =
  | "default"
  | "bordered"
  | "filled"
  | "ghost";

export type TooltipRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "full";

export type TooltipPlacement =
  | "top"
  | "right"
  | "bottom"
  | "left";

export type TooltipState =
  | "default"
  | "loading"
  | "disabled";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  content: ReactNode;
  placement?: TooltipPlacement;
  size?: TooltipSize;
  variant?: TooltipVariant;
  radius?: TooltipRadius;
  state?: TooltipState;
  disabled?: boolean;
  children?: ReactNode;
}