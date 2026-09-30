export const chipDocs = {
  name: "Chip",
  category: "Data Display",
  description:
    "Compact content labels with optional icons, avatars, selection, dismissal, interaction, and loading states.",

  importCode:
    'import { Chip } from "shivanya-ui";',

  usageCode:
    '<Chip color="success">Active</Chip>',

  props: [
    {
      name: "as",
      type: '"div" | "span" | "button"',
      defaultValue: '"div"',
      description: "Controls the root element.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      defaultValue: '"md"',
      description: "Controls chip size.",
    },
    {
      name: "variant",
      type: '"filled" | "outlined" | "soft" | "ghost"',
      defaultValue: '"filled"',
      description: "Controls the visual treatment.",
    },
    {
      name: "color",
      type:
        '"primary" | "secondary" | "success" | "warning" | "danger" | "info"',
      defaultValue: '"primary"',
      description: "Controls the color theme.",
    },
    {
      name: "radius",
      type: '"sm" | "md" | "lg" | "full"',
      defaultValue: '"full"',
      description: "Controls the border radius.",
    },
    {
      name: "icon",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Leading icon.",
    },
    {
      name: "avatar",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Leading avatar content.",
    },
    {
      name: "endIcon",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Trailing icon or content.",
    },
    {
      name: "closeIcon",
      type: "ReactNode",
      defaultValue: '"×"',
      description: "Custom close icon.",
    },
    {
      name: "closable",
      type: "boolean",
      defaultValue: "false",
      description: "Displays a remove button.",
    },
    {
      name: "onClose",
      type: "() => void",
      defaultValue: "undefined",
      description: "Called when the chip is closed.",
    },
    {
      name: "clickable",
      type: "boolean",
      defaultValue: "false",
      description: "Makes the chip interactive.",
    },
    {
      name: "selectable",
      type: "boolean",
      defaultValue: "false",
      description: "Enables selectable chip behavior.",
    },
    {
      name: "selected",
      type: "boolean",
      defaultValue: "false",
      description: "Displays the selected state.",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "Displays a loading state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables interaction.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description: "Makes the chip fill its available width.",
    },
  ],
} as const;