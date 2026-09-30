import type {
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export type TextareaSize =
  | "sm"
  | "md"
  | "lg";

export type TextareaVariant =
  | "default"
  | "success"
  | "error";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  size?: TextareaSize;
  variant?: TextareaVariant;
  fullWidth?: boolean;
  showCount?: boolean;
}