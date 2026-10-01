import type { HTMLAttributes } from "react";

export type ContainerElement = "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav";
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";
export type ContainerPadding = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  size?: ContainerSize;
  padding?: ContainerPadding;
  centered?: boolean;
}
