import type { HTMLAttributes } from "react";

export type SpinnerElement = "span" | "div";
export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "inherit";

export interface SpinnerProps extends HTMLAttributes<HTMLElement> {
  as?: SpinnerElement;
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
}
