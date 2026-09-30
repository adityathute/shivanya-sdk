export const textareaDocs = {
  name: "Textarea",
  category: "Forms",

  description:
    "Multiline text control with helper, validation, and character count support.",

  importCode:
    'import { Textarea } from "shivanya-ui";',

  usageCode: `
<Textarea
  label="Message"
  placeholder="Write your message..."
  showCount
  maxLength={200}
/>
`,

  props: [
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Label displayed above the textarea.",
    },
    {
      name: "helperText",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Supporting information displayed below the textarea.",
    },
    {
      name: "error",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Validation feedback displayed below the textarea.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the textarea size and text size.",
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
        "Expands the textarea to the available width.",
    },
    {
      name: "showCount",
      type: "boolean",
      defaultValue: "false",
      description:
        "Shows the current character count.",
    },
    {
      name: "maxLength",
      type: "number",
      defaultValue: "undefined",
      description:
        "Sets the maximum number of characters.",
    },
  ],
} as const;