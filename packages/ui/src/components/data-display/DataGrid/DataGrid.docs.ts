export const dataGridDocs = {
  name: "DataGrid",
  category: "Data Display",

  description:
    "Configurable data grid with columns, sorting, selection, loading, empty states, row interaction, and responsive overflow.",

  importCode:
    'import { DataGrid } from "shivanya-ui";',

  usageCode:
    `<DataGrid
  columns={columns}
  data={rows}
  sortable
/>`,

  props: [
    {
      name: "columns",
      type: "DataGridColumn[]",
      defaultValue: "[]",
      description: "Column definitions.",
    },
    {
      name: "data",
      type: "T[]",
      defaultValue: "[]",
      description: "Rows to display.",
    },
    {
      name: "rowKey",
      type: "keyof T | string",
      defaultValue: '"id"',
      description: "Field used to identify rows.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Controls table density.",
    },
    {
      name: "bordered",
      type: "boolean",
      defaultValue: "true",
      description: "Adds a border around the grid.",
    },
    {
      name: "striped",
      type: "boolean",
      defaultValue: "false",
      description: "Adds alternating row backgrounds.",
    },
    {
      name: "hoverable",
      type: "boolean",
      defaultValue: "true",
      description: "Highlights rows on hover.",
    },
    {
      name: "stickyHeader",
      type: "boolean",
      defaultValue: "false",
      description: "Keeps the table header visible while scrolling.",
    },
    {
      name: "selectable",
      type: "boolean",
      defaultValue: "false",
      description: "Enables row selection.",
    },
    {
      name: "selectedRowKeys",
      type: "Array<string | number>",
      defaultValue: "undefined",
      description: "Controlled selected row keys.",
    },
    {
      name: "defaultSelectedRowKeys",
      type: "Array<string | number>",
      defaultValue: "[]",
      description: "Initial selected row keys for uncontrolled selection.",
    },
    {
      name: "onSelectedRowKeysChange",
      type: "(keys: Array<string | number>) => void",
      defaultValue: "undefined",
      description: "Called when row selection changes.",
    },
    {
      name: "sortable",
      type: "boolean",
      defaultValue: "false",
      description: "Enables sorting on sortable columns.",
    },
    {
      name: "sort",
      type: "DataGridSortState",
      defaultValue: "undefined",
      description: "Controlled sorting state.",
    },
    {
      name: "defaultSort",
      type: "DataGridSortState",
      defaultValue: '{ key: "", direction: "asc" }',
      description: "Initial sorting state.",
    },
    {
      name: "onSortChange",
      type: "(sort: DataGridSortState) => void",
      defaultValue: "undefined",
      description: "Called when sorting changes.",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "Shows loading skeleton rows.",
    },
    {
      name: "loadingRows",
      type: "number",
      defaultValue: "5",
      description: "Number of skeleton rows displayed while loading.",
    },
    {
      name: "emptyMessage",
      type: "ReactNode",
      defaultValue: '"No data available."',
      description: "Content displayed when there are no rows.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "true",
      description: "Allows the grid to fill its container.",
    },
    {
      name: "onRowClick",
      type: "(row: T, index: number) => void",
      defaultValue: "undefined",
      description: "Called when a row is clicked.",
    },
    {
      name: "rowClassName",
      type: "(row: T, index: number) => string | undefined",
      defaultValue: "undefined",
      description: "Returns a custom class for a row.",
    },
  ],
} as const;