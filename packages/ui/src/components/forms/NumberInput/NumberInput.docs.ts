export const numberInputDocs = {
  name: "NumberInput",
  category: "Forms",
  description:
    "Numeric input with min/max, step, prefix, suffix, and increment controls.",

  importCode:
    'import { NumberInput } from "shivanya-ui";',

  usageCode: `
<NumberInput
  value={10}
  onChange={setValue}
  min={0}
  max={100}
/>
`,

  props: [
    {
      name: "value",
      type: 'number | ""',
      defaultValue: "undefined",
      description:
        "Controlled numeric value.",
    },
    {
      name: "defaultValue",
      type: 'number | ""',
      defaultValue: '""',
      description:
        "Initial value for uncontrolled usage.",
    },
    {
      name: "onChange",
      type: '(value: number | "") => void',
      defaultValue: "undefined",
      description:
        "Called when the numeric value changes.",
    },
    {
      name: "min",
      type: "number",
      defaultValue: "undefined",
      description:
        "Minimum allowed value.",
    },
    {
      name: "max",
      type: "number",
      defaultValue: "undefined",
      description:
        "Maximum allowed value.",
    },
    {
      name: "step",
      type: "number",
      defaultValue: "1",
      description:
        "Amount added or subtracted by the controls.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the input height and text size.",
    },
    {
      name: "prefix",
      type: "string",
      defaultValue: "undefined",
      description:
        "Text displayed before the numeric value.",
    },
    {
      name: "suffix",
      type: "string",
      defaultValue: "undefined",
      description:
        "Text displayed after the numeric value.",
    },
  ],
} as const;