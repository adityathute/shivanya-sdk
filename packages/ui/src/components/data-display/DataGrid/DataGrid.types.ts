import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type DataGridSize =
  | "sm"
  | "md"
  | "lg";

export type DataGridAlign =
  | "left"
  | "center"
  | "right";

export type DataGridSortDirection =
  | "asc"
  | "desc";

export interface DataGridColumn<
  T = Record<string, unknown>,
> {
  key: string;
  title: ReactNode;
  field?: keyof T | string;

  render?: (
    value: unknown,
    row: T,
    index: number,
  ) => ReactNode;

  sortable?: boolean;

  align?: DataGridAlign;

  width?: string | number;

  minWidth?: string | number;

  headerClassName?: string;

  cellClassName?: string;
}

export interface DataGridSortState {
  key: string;
  direction: DataGridSortDirection;
}

export interface DataGridProps<
  T = Record<string, unknown>,
> extends HTMLAttributes<HTMLDivElement> {
  columns: DataGridColumn<T>[];

  data: T[];

  rowKey?: keyof T | string;

  size?: DataGridSize;

  bordered?: boolean;

  striped?: boolean;

  hoverable?: boolean;

  stickyHeader?: boolean;

  selectable?: boolean;

  selectedRowKeys?: Array<string | number>;

  defaultSelectedRowKeys?: Array<
    string | number
  >;

  onSelectedRowKeysChange?: (
    keys: Array<string | number>,
  ) => void;

  sortable?: boolean;

  sort?: DataGridSortState;

  defaultSort?: DataGridSortState;

  onSortChange?: (
    sort: DataGridSortState,
  ) => void;

  loading?: boolean;

  loadingRows?: number;

  emptyMessage?: ReactNode;

  fullWidth?: boolean;

  onRowClick?: (
    row: T,
    index: number,
  ) => void;

  rowClassName?: (
    row: T,
    index: number,
  ) => string | undefined;
}