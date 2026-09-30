import type { HTMLAttributes, ReactNode } from "react";

export type ErrorMessageSize = "sm" | "md" | "lg";
export type ErrorMessageVariant = "default" | "success" | "error" | "warning";

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ErrorMessageSize;
  variant?: ErrorMessageVariant;
  children?: ReactNode;
}
