export const calendarDocs = {
  name: "Calendar",
  category: "Data Display",
  description:
    "Interactive date calendar with single and range selection, navigation, bounds, and month/year views.",

  importCode:
    'import { Calendar } from "shivanya-ui";',

  usageCode:
    '<Calendar onChange={(date) => console.log(date)} />',

  props: [
    {
      name: "mode",
      type: '"single" | "range"',
      defaultValue: '"single"',
      description: "Selection mode.",
    },
    {
      name: "value",
      type: "Date | CalendarRange | null",
      defaultValue: "undefined",
      description: "Controlled selection.",
    },
    {
      name: "defaultValue",
      type: "Date | CalendarRange | null",
      defaultValue: "undefined",
      description: "Initial selection.",
    },
    {
      name: "minDate",
      type: "Date",
      defaultValue: "undefined",
      description: "Earliest selectable date.",
    },
    {
      name: "maxDate",
      type: "Date",
      defaultValue: "undefined",
      description: "Latest selectable date.",
    },
    {
      name: "firstDayOfWeek",
      type: "0 | 1 | 2 | 3 | 4 | 5 | 6",
      defaultValue: "0",
      description:
        "First weekday index, where Sunday is 0.",
    },
    {
      name: "showOutsideDays",
      type: "boolean",
      defaultValue: "true",
      description:
        "Displays dates from adjacent months.",
    },
    {
      name: "showWeekNumbers",
      type: "boolean",
      defaultValue: "false",
      description:
        "Reserved for week-number display compatibility.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables calendar interaction.",
    },
    {
      name: "readOnly",
      type: "boolean",
      defaultValue: "false",
      description:
        "Prevents changing the current selection.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Calendar size.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description:
        "Uses the available container width.",
    },
  ],
} as const;