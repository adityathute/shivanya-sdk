import type {
  FieldsetHTMLAttributes,
  ReactNode,
} from "react";

export type FormGroupSpacing =
  | "sm"
  | "md"
  | "lg";

export interface FormGroupProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  spacing?: FormGroupSpacing;
  label?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}