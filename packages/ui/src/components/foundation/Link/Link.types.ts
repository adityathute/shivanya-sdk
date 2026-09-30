import type { AnchorHTMLAttributes, ReactNode } from "react";

export type LinkVariant = "default" | "primary" | "secondary" | "muted" | "danger";
export type LinkSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: LinkVariant;
  size?: LinkSize;
  underline?: boolean;
  external?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}
