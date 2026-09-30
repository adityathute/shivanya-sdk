import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

export type SelectSize =
  | "sm"
  | "md"
  | "lg";

export type SelectVariant =
  | "default"
  | "success"
  | "error";

export interface SelectOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "size"
  > {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  size?: SelectSize;
  variant?: SelectVariant;
  fullWidth?: boolean;
  options?: SelectOption[];
}