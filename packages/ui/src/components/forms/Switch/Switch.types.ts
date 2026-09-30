import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type SwitchSize =
  | "sm"
  | "md"
  | "lg";

export type SwitchVariant =
  | "default"
  | "error"
  | "success";

export interface SwitchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  size?: SwitchSize;
  variant?: SwitchVariant;
}