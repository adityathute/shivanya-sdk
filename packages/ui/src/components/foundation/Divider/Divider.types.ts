import type { HTMLAttributes } from "react";

export type DividerElement = "hr" | "div";
export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed" | "dotted";
export type DividerThickness = "sm" | "md" | "lg";
export type DividerSpacing = "sm" | "md" | "lg";

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  as?: DividerElement;
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  thickness?: DividerThickness;
  spacing?: DividerSpacing;
}
