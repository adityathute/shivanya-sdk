import type { HTMLAttributes } from "react";

export type GridElement = "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav";
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12 | "1" | "2" | "3" | "4" | "5" | "6" | "12";
export type GridRows = "none" | 1 | 2 | 3 | 4 | 5 | 6 | "1" | "2" | "3" | "4" | "5" | "6";
export type GridGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type GridAlignment = "start" | "center" | "end" | "stretch";
export type GridContent = GridAlignment | "between" | "around" | "evenly";
export type GridAutoFlow = "row" | "column" | "dense" | "rowDense" | "columnDense";

export interface GridProps extends HTMLAttributes<HTMLElement> {
  as?: GridElement;
  columns?: GridColumns;
  rows?: GridRows;
  gap?: GridGap;
  columnGap?: GridGap;
  rowGap?: GridGap;
  alignItems?: GridAlignment;
  justifyItems?: GridAlignment;
  alignContent?: GridContent;
  justifyContent?: GridContent;
  autoFlow?: GridAutoFlow;
}
