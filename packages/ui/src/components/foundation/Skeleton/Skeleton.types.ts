import type { HTMLAttributes, ReactNode } from "react";

export type SkeletonElement = "div" | "span";
export type SkeletonVariant = "text" | "rectangular" | "rounded" | "circular";
export type SkeletonAnimation = "none" | "pulse" | "wave";

export interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  as?: SkeletonElement;
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  loading?: boolean;
  count?: number;
  inline?: boolean;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  children?: ReactNode;
}
