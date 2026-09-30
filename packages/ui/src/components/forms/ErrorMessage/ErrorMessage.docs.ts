export const errorMessageDocs = {
  name: "ErrorMessage",
  category: "Forms",
  description: "Accessible validation feedback.",
  importCode: 'import { ErrorMessage } from "shivanya-ui";',
  usageCode: `
<ErrorMessage>
  Something went wrong. Please try again.
</ErrorMessage>
`,
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Controls the message text size.",
    },
    {
      name: "variant",
      type: '"default" | "success" | "error" | "warning"',
      defaultValue: '"default"',
      description: "Controls the semantic message state.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Content displayed inside the validation message.",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "undefined",
      description: "Adds a custom CSS class to the message.",
    },
  ],
} as const;