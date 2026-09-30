export const switchDocs = {
  name: "Switch",
  category: "Forms",

  description:
    "Accessible on/off control with semantic switch behavior.",

  importCode:
    'import { Switch } from "shivanya-ui";',

  usageCode: `
<Switch
  label="Enable notifications"
/>
`,

  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the switch size.",
    },
    {
      name: "variant",
      type: '"default" | "success" | "error"',
      defaultValue: '"default"',
      description:
        "Controls the semantic visual state.",
    },
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Label displayed next to the switch.",
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
        "Validation feedback displayed below the switch.",
    },
    {
      name: "checked",
      type: "boolean",
      defaultValue: "undefined",
      description:
        "Controls the checked state.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      defaultValue: "false",
      description:
        "Sets the initial checked state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Prevents interaction with the switch.",
    },
  ],
} as const;