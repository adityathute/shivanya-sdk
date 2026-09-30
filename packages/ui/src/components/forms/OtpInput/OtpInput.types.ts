import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type OtpInputLength = 4 | 6;

export type OtpInputSize =
  | "sm"
  | "md"
  | "lg";

export interface OtpInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "value"
    | "defaultValue"
    | "onChange"
    | "size"
    | "type"
  > {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  success?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  length?: OtpInputLength;
  size?: OtpInputSize;
  autoFocus?: boolean;
}