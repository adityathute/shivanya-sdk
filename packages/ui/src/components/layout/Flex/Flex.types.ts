import type { HTMLAttributes } from "react";

export type FlexElement = "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span";
export type FlexDirection = "row" | "column" | "rowReverse" | "columnReverse";
export type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type FlexWrap = "nowrap" | "wrap" | "wrapReverse";
export type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export interface FlexProps extends HTMLAttributes<HTMLElement> {
  as?: FlexElement;
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  gap?: FlexGap;
}
