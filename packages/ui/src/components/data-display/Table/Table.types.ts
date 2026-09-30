import type {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

export type TableSize =
  | "sm"
  | "md"
  | "lg";

export type TableVariant =
  | "default"
  | "bordered"
  | "filled";

export type TableDensity =
  | "comfortable"
  | "compact";

export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement> {
  size?: TableSize;
  variant?: TableVariant;
  density?: TableDensity;
  hover?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  responsive?: boolean;
  maxHeight?: number | string;
  loading?: boolean;
  disabled?: boolean;
  emptyMessage?: ReactNode;
}

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

export interface TableRowProps
  extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
}

export interface TableHeaderCellProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
}