import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type RadioSize =
  | "sm"
  | "md"
  | "lg";

export type RadioVariant =
  | "default"
  | "error"
  | "success";

export interface RadioProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  size?: RadioSize;
  variant?: RadioVariant;
}