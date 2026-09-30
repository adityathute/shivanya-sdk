export const labelDocs = {
  name: "Label",
  category: "Forms",
  description:
    "Accessible labels with size, validation, and required states.",

  importCode:
    'import { Label } from "shivanya-ui";',

  usageCode: `
<Label
  htmlFor="email"
  required
>
  Email
</Label>
`,

  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the label text size.",
    },
    {
      name: "variant",
      type: '"default" | "error" | "success"',
      defaultValue: '"default"',
      description:
        "Controls the semantic label state.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description:
        "Displays a required indicator.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Displays the label in a disabled state.",
    },
    {
      name: "htmlFor",
      type: "string",
      defaultValue: "undefined",
      description:
        "Associates the label with a form control.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Label content.",
    },
  ],
} as const;