"use client";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type {
  ChangeEvent,
  MouseEvent,
} from "react";

import type {
  DataGridColumn,
  DataGridProps,
  DataGridSortState,
} from "./DataGrid.types";

function getValue<T>(
  row: T,
  field: keyof T | string | undefined,
): unknown {
  if (field === undefined) {
    return undefined;
  }

  return String(field)
    .split(".")
    .reduce<unknown>((value, key) => {
      if (
        value !== null &&
        typeof value === "object"
      ) {
        return (
          value as Record<string, unknown>
        )[key];
      }

      return undefined;
    }, row as unknown);
}

function compareValues(
  first: unknown,
  second: unknown,
): number {
  if (
    first === null ||
    first === undefined
  ) {
    return second === null ||
      second === undefined
      ? 0
      : 1;
  }

  if (
    second === null ||
    second === undefined
  ) {
    return -1;
  }

  if (
    typeof first === "number" &&
    typeof second === "number"
  ) {
    return first - second;
  }

  if (
    first instanceof Date &&
    second instanceof Date
  ) {
    return (
      first.getTime() -
      second.getTime()
    );
  }

  return String(first).localeCompare(
    String(second),
    undefined,
    {
      numeric: true,
      sensitivity: "base",
    },
  );
}

function getRowKey<T>(
  row: T,
  rowKey: keyof T | string,
  index: number,
): string {
  return String(
    getValue(row, rowKey) ?? index,
  );
}

export function DataGrid<
  T extends Record<string, unknown>,
>({
  columns,
  data,
  rowKey = "id",
  size = "md",
  bordered = true,
  striped = false,
  hoverable = true,
  stickyHeader = false,
  selectable = false,
  selectedRowKeys,
  defaultSelectedRowKeys = [],
  onSelectedRowKeysChange,
  sortable = false,
  sort,
  defaultSort = {
    key: "",
    direction: "asc",
  },
  onSortChange,
  loading = false,
  loadingRows = 5,
  emptyMessage = "No data available.",
  fullWidth = true,
  onRowClick,
  rowClassName,
  className,
  ...props
}: DataGridProps<T>) {
  const [
    internalSelectedRowKeys,
    setInternalSelectedRowKeys,
  ] = useState<Array<string | number>>(
    defaultSelectedRowKeys,
  );

  const [
    internalSort,
    setInternalSort,
  ] = useState<DataGridSortState>(
    defaultSort,
  );

  const selectAllRef =
    useRef<HTMLInputElement>(null);

  const activeSelectedRowKeys =
    selectedRowKeys ??
    internalSelectedRowKeys;

  const activeSort =
    sort ??
    internalSort;

  const selectedKeySet = useMemo(
    () =>
      new Set(
        activeSelectedRowKeys.map(
          String,
        ),
      ),
    [activeSelectedRowKeys],
  );

  const allSelected =
    data.length > 0 &&
    data.every((row, index) =>
      selectedKeySet.has(
        getRowKey(
          row,
          rowKey,
          index,
        ),
      ),
    );

  const someSelected =
    !allSelected &&
    data.some((row, index) =>
      selectedKeySet.has(
        getRowKey(
          row,
          rowKey,
          index,
        ),
      ),
    );

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate =
        someSelected;
    }
  }, [someSelected]);

  const updateSelection = (
    next: Array<string | number>,
  ) => {
    if (
      selectedRowKeys === undefined
    ) {
      setInternalSelectedRowKeys(
        next,
      );
    }

    onSelectedRowKeysChange?.(
      next,
    );
  };

  const toggleRow = (
    key: string,
  ) => {
    const next =
      selectedKeySet.has(key)
        ? activeSelectedRowKeys.filter(
            (item) =>
              String(item) !== key,
          )
        : [
            ...activeSelectedRowKeys,
            key,
          ];

    updateSelection(next);
  };

  const toggleAll = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      updateSelection(
        data.map((row, index) =>
          getRowKey(
            row,
            rowKey,
            index,
          ),
        ),
      );
    } else {
      updateSelection([]);
    }
  };

  const updateSort = (
    key: string,
  ) => {
    const next: DataGridSortState = {
      key,
      direction:
        activeSort.key === key &&
        activeSort.direction === "asc"
          ? "desc"
          : "asc",
    };

    if (sort === undefined) {
      setInternalSort(next);
    }

    onSortChange?.(next);
  };

  const sortedData = useMemo(() => {
    if (
      !sortable ||
      !activeSort.key
    ) {
      return data;
    }

    const column =
      columns.find(
        (item) =>
          item.key ===
          activeSort.key,
      );

    if (
      !column ||
      column.sortable === false
    ) {
      return data;
    }

    return [...data].sort(
      (first, second) => {
        const firstValue =
          getValue(
            first,
            column.field,
          );

        const secondValue =
          getValue(
            second,
            column.field,
          );

        const result =
          compareValues(
            firstValue,
            secondValue,
          );

        return activeSort.direction ===
          "asc"
          ? result
          : -result;
      },
    );
  }, [
    data,
    columns,
    sortable,
    activeSort,
  ]);

  const classes = [
    "shivanya-data-grid",
    `shivanya-data-grid-${size}`,
    bordered
      ? "is-bordered"
      : "",
    striped
      ? "is-striped"
      : "",
    hoverable
      ? "is-hoverable"
      : "",
    stickyHeader
      ? "is-sticky"
      : "",
    fullWidth
      ? "is-full"
      : "",
    onRowClick
      ? "is-clickable"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const columnCount =
    columns.length +
    (selectable ? 1 : 0);

  return (
    <div
      {...props}
      className={classes}
    >
      <div className="shivanya-data-grid-scroll">
        <table>
          <thead>
            <tr>
              {selectable && (
                <th className="data-grid-selection-cell">
                  <input
                    ref={selectAllRef}
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    disabled={
                      loading ||
                      data.length === 0
                    }
                    aria-label="Select all rows"
                  />
                </th>
              )}

              {columns.map(
                (column) => {
                  const align =
                    column.align ??
                    "left";

                  const isSortable =
                    sortable &&
                    column.sortable !==
                      false;

                  return (
                    <th
                      key={column.key}
                      style={{
                        width:
                          column.width,
                        minWidth:
                          column.minWidth,
                      }}
                      className={[
                        `align-${align}`,
                        column.headerClassName,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {isSortable ? (
                        <button
                          type="button"
                          className="data-grid-sort"
                          onClick={() =>
                            updateSort(
                              column.key,
                            )
                          }
                          aria-label={`Sort by ${String(
                            column.title,
                          )}`}
                        >
                          <span className="data-grid-sort-label">
                            {column.title}
                          </span>

                          <span
                            className="data-grid-sort-indicator"
                            aria-hidden="true"
                          >
                            {activeSort.key ===
                            column.key
                              ? activeSort.direction ===
                                "asc"
                                ? "↑"
                                : "↓"
                              : "↕"}
                          </span>
                        </button>
                      ) : (
                        column.title
                      )}
                    </th>
                  );
                },
              )}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array.from(
                {
                  length: Math.max(
                    1,
                    loadingRows,
                  ),
                },
                (_, index) => (
                  <tr
                    key={`loading-${index}`}
                    className="data-grid-skeleton-row"
                  >
                    {selectable && (
                      <td className="data-grid-selection-cell">
                        <span />
                      </td>
                    )}

                    {columns.map(
                      (column) => (
                        <td
                          key={
                            column.key
                          }
                        >
                          <span />
                        </td>
                      ),
                    )}
                  </tr>
                ),
              )
            ) : sortedData.length ===
              0 ? (
              <tr>
                <td
                  colSpan={columnCount}
                  className="data-grid-empty"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              sortedData.map(
                (row, index) => {
                  const key =
                    getRowKey(
                      row,
                      rowKey,
                      index,
                    );

                  const handleRowClick =
                    onRowClick
                      ? () =>
                          onRowClick(
                            row,
                            index,
                          )
                      : undefined;

                  const handleRowKeyDown =
                    onRowClick
                      ? (
                          event: React.KeyboardEvent<HTMLTableRowElement>,
                        ) => {
                          if (
                            event.key ===
                              "Enter" ||
                            event.key ===
                              " "
                          ) {
                            event.preventDefault();
                            onRowClick(
                              row,
                              index,
                            );
                          }
                        }
                      : undefined;

                  return (
                    <tr
                      key={key}
                      className={[
                        rowClassName?.(
                          row,
                          index,
                        ),
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={
                        handleRowClick
                      }
                      onKeyDown={
                        handleRowKeyDown
                      }
                      tabIndex={
                        onRowClick
                          ? 0
                          : undefined
                      }
                    >
                      {selectable && (
                        <td
                          className="data-grid-selection-cell"
                          onClick={(
                            event: MouseEvent<HTMLTableCellElement>,
                          ) =>
                            event.stopPropagation()
                          }
                        >
                          <input
                            type="checkbox"
                            checked={selectedKeySet.has(
                              key,
                            )}
                            onChange={() =>
                              toggleRow(
                                key,
                              )
                            }
                            aria-label={`Select row ${
                              index + 1
                            }`}
                          />
                        </td>
                      )}

                      {columns.map(
                        (column) => {
                          const value =
                            getValue(
                              row,
                              column.field,
                            );

                          return (
                            <td
                              key={
                                column.key
                              }
                              className={[
                                `align-${
                                  column.align ??
                                  "left"
                                }`,
                                column.cellClassName,
                              ]
                                .filter(
                                  Boolean,
                                )
                                .join(
                                  " ",
                                )}
                            >
                              {column.render
                                ? column.render(
                                    value,
                                    row,
                                    index,
                                  )
                                : String(
                                    value ??
                                      "",
                                  )}
                            </td>
                          );
                        },
                      )}
                    </tr>
                  );
                },
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

DataGrid.displayName = "DataGrid";
