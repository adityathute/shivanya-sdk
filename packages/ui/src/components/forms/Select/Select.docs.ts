export const selectDocs = {
  name: "Select",
  category: "Forms",
  description:
    "Native select control with labels, options, and validation feedback.",

  importCode:
    'import { Select } from "shivanya-ui";',

  usageCode: `
<Select
  label="Country"
  options={[
    {
      value: "in",
      label: "India",
    },
  ]}
/>
`,

  props: [
    {
      name: "options",
      type: "SelectOption[]",
      defaultValue: "[]",
      description:
        "Options rendered when children are not supplied.",
    },
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Accessible label displayed above the select.",
    },
    {
      name: "helperText",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Supporting text displayed below the select.",
    },
    {
      name: "error",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Validation feedback displayed below the select.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the select height and text size.",
    },
    {
      name: "variant",
      type: '"default" | "success" | "error"',
      defaultValue: '"default"',
      description:
        "Controls the semantic visual state.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description:
        "Expands the field to the available container width.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description:
        "Marks the select as required.",
    },
  ],
} as const;