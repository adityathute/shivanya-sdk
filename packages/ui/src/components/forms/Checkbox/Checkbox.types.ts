import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type CheckboxSize =
  | "sm"
  | "md"
  | "lg";

export type CheckboxVariant =
  | "default"
  | "error"
  | "success";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
}