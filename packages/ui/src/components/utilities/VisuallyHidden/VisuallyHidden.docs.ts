export const visuallyHiddenDocs = {
  name: "VisuallyHidden",
  category: "Utilities",
  description:
    "Visually hides content while keeping it available to assistive technologies.",
  importCode:
    'import { VisuallyHidden } from "shivanya-ui";',
  usageCode: `<VisuallyHidden>
  Additional information for screen readers.
</VisuallyHidden>`,
  props: [
    {
      name: "as",
      type: '"span" | "div" | "p" | "label"',
      defaultValue: '"span"',
      description: "Controls the rendered HTML element.",
    },
    {
      name: "state",
      type: '"default" | "visible" | "hidden" | "disabled"',
      defaultValue: '"default"',
      description: "Controls whether the content is hidden or visible.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Marks the utility as disabled.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Content to visually hide or reveal.",
    },
  ],
} as const;
