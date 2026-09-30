import type {
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

export interface FormFieldProps
  extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  children: ReactElement;
  size?: "sm" | "md" | "lg";
}