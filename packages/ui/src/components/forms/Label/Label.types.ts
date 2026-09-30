import type {
  LabelHTMLAttributes,
  ReactNode,
} from "react";

export type LabelSize =
  | "sm"
  | "md"
  | "lg";

export type LabelVariant =
  | "default"
  | "error"
  | "success";

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: LabelSize;
  variant?: LabelVariant;
  required?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}