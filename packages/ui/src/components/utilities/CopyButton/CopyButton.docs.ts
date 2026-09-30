export const copyButtonDocs = {
  name: "CopyButton",

  category: "Utilities",

  description:
    "Copies text to the clipboard with a single click and automatically updates its label after a successful copy.",

  importCode:
    'import { CopyButton } from "shivanya-ui";',

  usageCode: `
<CopyButton
  value="Hello from Shivanya"
>
  Copy Text
</CopyButton>
`,

  props: [
    {
      name: "value",
      type: "string",
      defaultValue: '""',
      description:
        "The value copied to the clipboard.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the size of the copy button.",
    },
    {
      name: "variant",
      type:
        '"primary" | "secondary" | "success" | "warning" | "danger" | "info" | "outline" | "ghost"',
      defaultValue: '"primary"',
      description:
        "Controls the visual style of the button.",
    },
    {
      name: "timeout",
      type: "number",
      defaultValue: "2000",
      description:
        "Controls how long the copied state remains visible, in milliseconds.",
    },
    {
      name: "copyText",
      type: "ReactNode",
      defaultValue: '"Copy"',
      description:
        "Content displayed before the value is copied.",
    },
    {
      name: "copiedText",
      type: "ReactNode",
      defaultValue: '"Copied!"',
      description:
        "Content displayed after the value is successfully copied.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description:
        "Makes the button span the full available width.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables the button and prevents copying.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Custom button content. When provided, it takes precedence over copyText and copiedText.",
    },
    {
      name: "onCopy",
      type: "(value: string) => void",
      defaultValue: "-",
      description:
        "Called after the value has been successfully copied.",
    },
  ],
};