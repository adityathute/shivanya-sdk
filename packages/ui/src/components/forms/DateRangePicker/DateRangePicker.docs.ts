export const dateRangePickerDocs = {
  name: "DateRangePicker",
  category: "Forms",
  description:
    "Two-ended date range control with independent start and end bounds.",
  importCode:
    'import { DateRangePicker } from "shivanya-ui";',
  usageCode:
    "<DateRangePicker value={range} onChange={setRange} />",
  props: [
    {
      name: "value",
      type: "DateRange | null",
      defaultValue: "undefined",
      description: "Controlled date range.",
    },
    {
      name: "defaultValue",
      type: "DateRange | null",
      defaultValue: "null",
      description: "Initial date range for uncontrolled usage.",
    },
    {
      name: "onChange",
      type: "(range: DateRange) => void",
      defaultValue: "undefined",
      description: "Called when either date changes or the range is cleared.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Controls the input height.",
    },
    {
      name: "radius",
      type: '"sm" | "md" | "lg" | "full"',
      defaultValue: '"md"',
      description: "Controls the border radius.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description: "Makes the date range picker use the available width.",
    },
    {
      name: "minDate",
      type: "Date | null",
      defaultValue: "undefined",
      description: "Minimum selectable date.",
    },
    {
      name: "maxDate",
      type: "Date | null",
      defaultValue: "undefined",
      description: "Maximum selectable date.",
    },
    {
      name: "clearable",
      type: "boolean",
      defaultValue: "false",
      description: "Shows a button that clears both dates.",
    },
  ],
} as const;