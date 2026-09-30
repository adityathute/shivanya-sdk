import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type ScrollAreaSize = "sm" | "md" | "lg";
export type ScrollAreaVariant = "default" | "bordered" | "filled";
export type ScrollAreaRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "full";
export type ScrollAreaState =
  | "default"
  | "disabled";
export type ScrollAreaType =
  | "vertical"
  | "horizontal"
  | "both";
export type ScrollbarVisibility =
  | "auto"
  | "always"
  | "hidden";

export interface ScrollAreaProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: ScrollAreaSize;
  variant?: ScrollAreaVariant;
  radius?: ScrollAreaRadius;
  state?: ScrollAreaState;
  disabled?: boolean;
  type?: ScrollAreaType;
  scrollbar?: ScrollbarVisibility;
  maxHeight?: CSSProperties["maxHeight"];
  maxWidth?: CSSProperties["maxWidth"];
}
