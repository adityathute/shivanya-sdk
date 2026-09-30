export const radioDocs = {
  name: "Radio",
  category: "Forms",
  description:
    "Accessible radio control for mutually exclusive choices.",

  importCode:
    'import { Radio } from "shivanya-ui";',

  usageCode: `
<Radio
  name="plan"
  value="pro"
  label="Pro"
/>
`,

  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the radio size.",
    },
    {
      name: "variant",
      type: '"default" | "error" | "success"',
      defaultValue: '"default"',
      description:
        "Controls the semantic visual state.",
    },
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Label displayed next to the radio control.",
    },
    {
      name: "description",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Supporting text displayed below the label.",
    },
    {
      name: "error",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Validation feedback displayed below the radio.",
    },
  ],
} as const;