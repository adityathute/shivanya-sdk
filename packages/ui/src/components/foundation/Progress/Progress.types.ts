import type { HTMLAttributes } from "react";

export type ProgressSize = "sm" | "md" | "lg";
export type ProgressVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "info";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  showValue?: boolean;
}
