export const listDocs = {
  name: "List",
  category: "Data Display",
  description:
    "Flexible vertical or horizontal collection of content items with alignment, dividers, interaction, and state support.",

  importCode:
    'import { List } from "shivanya-ui";',

  usageCode: `<List>
  <List.Item
    title="Profile"
    description="Account settings"
  />
  <List.Item
    title="Security"
    description="Password and authentication"
  />
</List>`,

  props: [
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      defaultValue: '"md"',
      description:
        "Controls item spacing and density.",
    },
    {
      name: "variant",
      type:
        '"default" | "bordered" | "filled" | "ghost"',
      defaultValue: '"default"',
      description:
        "Controls the visual treatment of the list.",
    },
    {
      name: "orientation",
      type:
        '"vertical" | "horizontal"',
      defaultValue: '"vertical"',
      description:
        "Controls the direction of the list.",
    },
    {
      name: "align",
      type:
        '"start" | "center" | "end" | "stretch"',
      defaultValue: '"stretch"',
      description:
        "Controls cross-axis item alignment.",
    },
    {
      name: "justify",
      type:
        '"start" | "center" | "end" | "between" | "around" | "evenly"',
      defaultValue: '"start"',
      description:
        "Controls main-axis item distribution.",
    },
    {
      name: "divider",
      type:
        '"none" | "solid" | "dashed"',
      defaultValue: '"none"',
      description:
        "Controls the divider between list items.",
    },
    {
      name: "wrap",
      type: '"nowrap" | "wrap"',
      defaultValue: '"nowrap"',
      description:
        "Controls whether horizontal items wrap.",
    },
    {
      name: "state",
      type:
        '"default" | "loading" | "disabled"',
      defaultValue: '"default"',
      description:
        "Controls the list state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables the complete list.",
    },
  ],
} as const;