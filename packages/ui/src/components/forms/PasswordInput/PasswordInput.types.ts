import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type PasswordInputSize =
  | "sm"
  | "md"
  | "lg";

export interface PasswordInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "size"
  > {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  success?: ReactNode;
  warning?: ReactNode;
  size?: PasswordInputSize;
  fullWidth?: boolean;
  revealable?: boolean;
  visible?: boolean;
}