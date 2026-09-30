export const helperTextDocs = {
  name: "HelperText",
  category: "Forms",
  description:
    "Supporting text for a form control.",

  importCode:
    'import { HelperText } from "shivanya-ui";',

  usageCode: `
<HelperText>
  Enter the email address associated with your account.
</HelperText>
`,

  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the helper text size.",
    },
    {
      name: "variant",
      type:
        '"default" | "success" | "error" | "warning"',
      defaultValue: '"default"',
      description:
        "Controls the semantic text state.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Content displayed as supporting text.",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "undefined",
      description:
        "Adds a custom CSS class.",
    },
  ],
} as const;