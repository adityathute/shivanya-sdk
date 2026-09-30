import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type HelperTextSize =
  | "sm"
  | "md"
  | "lg";

export type HelperTextVariant =
  | "default"
  | "success"
  | "error"
  | "warning";

export interface HelperTextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  size?: HelperTextSize;
  variant?: HelperTextVariant;
  children?: ReactNode;
}