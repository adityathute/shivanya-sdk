import type { HTMLAttributes, ReactNode } from "react";

export type AccordionSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AccordionVariant = "default" | "bordered" | "filled" | "ghost";
export type AccordionRadius = "none" | "sm" | "md" | "lg" | "full";
export type AccordionState = "default" | "loading" | "disabled";
export type AccordionExpandMode = "multiple" | "single";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  size?: AccordionSize;
  variant?: AccordionVariant;
  radius?: AccordionRadius;
  state?: AccordionState;
  expandMode?: AccordionExpandMode;
  collapsible?: boolean;
  defaultExpandedKeys?: string[];
  expandedKeys?: string[];
  onExpandedKeysChange?: (keys: string[]) => void;
  children?: ReactNode;
}

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  itemKey: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  icon?: ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  children?: ReactNode;
}
