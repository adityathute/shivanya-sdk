import type { HTMLAttributes, ReactNode } from "react";

export type TimelineSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type TimelineVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type TimelineOrientation =
  | "vertical"
  | "horizontal";

export type TimelineAlign =
  | "start"
  | "center"
  | "end";

export type TimelineLineStyle =
  | "solid"
  | "dashed"
  | "dotted";

export type TimelineDotVariant =
  | "filled"
  | "outlined";

export type TimelineState =
  | "default"
  | "loading"
  | "disabled";

export interface TimelineProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: TimelineSize;
  variant?: TimelineVariant;
  orientation?: TimelineOrientation;
  align?: TimelineAlign;
  lineStyle?: TimelineLineStyle;
  dotVariant?: TimelineDotVariant;
  state?: TimelineState;
  disabled?: boolean;
  children?: ReactNode;
}

export interface TimelineItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  timestamp?: ReactNode;
  icon?: ReactNode;
  avatar?: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}