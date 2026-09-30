export const inputDocs = {
  name: "Input",
  category: "Forms",

  description:
    "A flexible text input component with labels, validation states, icons, addons, prefixes, suffixes, loading state, and character counting.",

  importCode: `import { Input } from "shivanya-ui";`,

  usageCode: `<Input
  label="Email"
  placeholder="Enter your email"
/>`,

  props: [
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Label displayed above the input.",
    },
    {
      name: "helperText",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Helper text displayed below the input.",
    },
    {
      name: "error",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Displays the error state and error message.",
    },
    {
      name: "success",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Displays the success state and success message.",
    },
    {
      name: "warning",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Displays the warning state and warning message.",
    },
    {
      name: "leftIcon",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Icon displayed before the input content.",
    },
    {
      name: "rightIcon",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Icon displayed after the input content.",
    },
    {
      name: "prefix",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Content displayed before the input value.",
    },
    {
      name: "suffix",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Content displayed after the input value.",
    },
    {
      name: "startAddon",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Addon displayed at the beginning of the input container.",
    },
    {
      name: "endAddon",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Addon displayed at the end of the input container.",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description:
        "Places the input in a loading state and disables interaction.",
    },
    {
      name: "showCounter",
      type: "boolean",
      defaultValue: "false",
      description:
        "Displays the current character count when maxLength is provided.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the input height.",
    },
    {
      name: "rounded",
      type: "boolean",
      defaultValue: "false",
      description:
        "Applies a fully rounded border radius.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description:
        "Makes the input container fill its available width.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables the input.",
    },
    {
      name: "readOnly",
      type: "boolean",
      defaultValue: "false",
      description:
        "Prevents editing while keeping the input accessible.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description:
        "Marks the input as required and displays an indicator beside the label.",
    },
    {
      name: "maxLength",
      type: "number",
      defaultValue: "-",
      description:
        "Maximum number of characters allowed.",
    },
    {
      name: "...InputHTMLAttributes",
      type: "InputHTMLAttributes<HTMLInputElement>",
      defaultValue: "-",
      description:
        "Supports standard HTML input attributes.",
    },
  ],

  sizes: [
    "sm",
    "md",
    "lg",
  ],

  examples: [
    {
      name: "Basic",
      code: `<Input
  placeholder="Enter your name"
/>`,
    },
    {
      name: "With label",
      code: `<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
/>`,
    },
    {
      name: "Helper text",
      code: `<Input
  label="Username"
  helperText="Choose a unique username."
/>`,
    },
    {
      name: "Error",
      code: `<Input
  label="Email"
  error="Please enter a valid email."
/>`,
    },
    {
      name: "Success",
      code: `<Input
  label="Username"
  success="Username is available."
/>`,
    },
    {
      name: "Warning",
      code: `<Input
  label="Password"
  warning="Your password is weak."
/>`,
    },
    {
      name: "Prefix",
      code: `<Input
  prefix="$"
  placeholder="0.00"
/>`,
    },
    {
      name: "Suffix",
      code: `<Input
  suffix="kg"
  placeholder="Weight"
/>`,
    },
    {
      name: "Character counter",
      code: `<Input
  label="Description"
  maxLength={100}
  showCounter
/>`,
    },
    {
      name: "Rounded",
      code: `<Input
  rounded
  placeholder="Search"
/>`,
    },
    {
      name: "Full width",
      code: `<Input
  fullWidth
  placeholder="Full width input"
/>`,
    },
  ],
};