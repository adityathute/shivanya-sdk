import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type InputSize =
  | "sm"
  | "md"
  | "lg";

export type InputProps =
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    label?: ReactNode;
    helperText?: ReactNode;
    error?: ReactNode;
    success?: ReactNode;
    warning?: ReactNode;

    leftIcon?: ReactNode;
    rightIcon?: ReactNode;

    prefix?: ReactNode;
    suffix?: ReactNode;

    startAddon?: ReactNode;
    endAddon?: ReactNode;

    loading?: boolean;
    showCounter?: boolean;

    size?: InputSize;

    rounded?: boolean;
    fullWidth?: boolean;
  };