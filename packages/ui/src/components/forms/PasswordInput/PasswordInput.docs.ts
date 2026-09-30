export const passwordInputDocs = {
  name: "PasswordInput",
  category: "Forms",
  description:
    "Password control with reveal, validation, and helper feedback.",

  importCode:
    'import { PasswordInput } from "shivanya-ui";',

  usageCode: `
<PasswordInput
  label="Password"
  revealable
/>
`,

  props: [
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Label displayed above the password field.",
    },
    {
      name: "revealable",
      type: "boolean",
      defaultValue: "true",
      description:
        "Enables the show/hide password action.",
    },
    {
      name: "visible",
      type: "boolean",
      defaultValue: "false",
      description:
        "Sets the initial password visibility state.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the password field height.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description:
        "Makes the password field use the available width.",
    },
    {
      name: "helperText",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Supporting text displayed below the field.",
    },
    {
      name: "error",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Displays error feedback and error styling.",
    },
    {
      name: "success",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Displays success feedback and success styling.",
    },
    {
      name: "warning",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Displays warning feedback and warning styling.",
    },
  ],
} as const;