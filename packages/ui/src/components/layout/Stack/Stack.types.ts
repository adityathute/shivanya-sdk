import type { HTMLAttributes } from "react";
export type StackElement = "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span";
export type StackDirection = "row" | "column";
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export interface StackProps extends HTMLAttributes<HTMLElement> { as?: StackElement; direction?: StackDirection; gap?: StackGap; align?: StackAlign; justify?: StackJustify; wrap?: boolean; }
