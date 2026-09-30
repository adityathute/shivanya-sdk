import { forwardRef } from "react";

import type {
  TableBodyProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderCellProps,
  TableProps,
  TableRowProps,
} from "./Table.types";

const TableBase = forwardRef<
  HTMLTableElement,
  TableProps
>(function Table(
  {
    size = "md",
    variant = "default",
    density = "comfortable",
    hover = false,
    striped = false,
    stickyHeader = false,
    responsive = false,
    maxHeight,
    loading = false,
    disabled = false,
    children,
    className,
    ...props
  },
  ref,
) {
  const wrapperClasses = [
    "shivanya-table-wrapper",
    responsive ? "is-responsive" : "",
    maxHeight ? "has-max-height" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const tableClasses = [
    "shivanya-table",
    `shivanya-table-${size}`,
    `shivanya-table-${variant}`,
    `shivanya-table-${density}`,
    hover ? "is-hoverable" : "",
    striped ? "is-striped" : "",
    stickyHeader ? "is-sticky" : "",
    loading ? "is-loading" : "",
    disabled ? "is-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const wrapperStyle = maxHeight
    ? {
        maxHeight,
      }
    : undefined;

  return (
    <div
      className={wrapperClasses}
      style={wrapperStyle}
    >
      <table
        ref={ref}
        {...props}
        className={tableClasses}
        aria-busy={
          loading || undefined
        }
        aria-disabled={
          disabled || undefined
        }
      >
        {children}
      </table>
    </div>
  );
});

const TableHead = forwardRef<
  HTMLTableSectionElement,
  TableHeadProps
>(function TableHead(
  { className, ...props },
  ref,
) {
  return (
    <thead
      ref={ref}
      {...props}
      className={[
        "shivanya-table-head",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
});

const TableBody = forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(function TableBody(
  { className, ...props },
  ref,
) {
  return (
    <tbody
      ref={ref}
      {...props}
      className={[
        "shivanya-table-body",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
});

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(function TableFooter(
  { className, ...props },
  ref,
) {
  return (
    <tfoot
      ref={ref}
      {...props}
      className={[
        "shivanya-table-footer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
});

const TableRow = forwardRef<
  HTMLTableRowElement,
  TableRowProps
>(function TableRow(
  {
    selected = false,
    className,
    ...props
  },
  ref,
) {
  return (
    <tr
      ref={ref}
      {...props}
      className={[
        "shivanya-table-row",
        selected ? "is-selected" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-selected={
        selected || undefined
      }
    />
  );
});

const TableCell = forwardRef<
  HTMLTableCellElement,
  TableCellProps
>(function TableCell(
  { className, ...props },
  ref,
) {
  return (
    <td
      ref={ref}
      {...props}
      className={[
        "shivanya-table-cell",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
});

const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(function TableHeaderCell(
  {
    scope = "col",
    className,
    ...props
  },
  ref,
) {
  return (
    <th
      ref={ref}
      {...props}
      scope={scope}
      className={[
        "shivanya-table-header-cell",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
});

TableBase.displayName = "Table";
TableHead.displayName = "TableHead";
TableBody.displayName = "TableBody";
TableFooter.displayName = "TableFooter";
TableRow.displayName = "TableRow";
TableCell.displayName = "TableCell";
TableHeaderCell.displayName =
  "TableHeaderCell";

type TableComponent =
  typeof TableBase & {
    Head: typeof TableHead;
    Body: typeof TableBody;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Cell: typeof TableCell;
    HeaderCell: typeof TableHeaderCell;
  };

export const Table =
  TableBase as TableComponent;

Table.Head = TableHead;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.HeaderCell = TableHeaderCell;

export {
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableHeaderCell,
};