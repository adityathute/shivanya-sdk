import type { HTMLAttributes } from "react";

export type BoxElement = "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span";
export type BoxSpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type BoxRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type BoxShadow = "none" | "sm" | "md" | "lg";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: BoxElement;
  padding?: BoxSpacing;
  margin?: BoxSpacing;
  rounded?: BoxRounded;
  shadow?: BoxShadow;
}
