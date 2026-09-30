export const scrollAreaDocs = {
  name: "ScrollArea",
  category: "Utilities",
  description:
    "Provides a configurable scrollable region with direction, scrollbar, size, variant, and radius controls.",
  importCode:
    'import { ScrollArea } from "shivanya-ui";',
  usageCode: `<ScrollArea
  maxHeight={240}
  variant="bordered"
>
  <div>Scrollable content</div>
</ScrollArea>`,
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Controls the preset scroll area height.",
    },
    {
      name: "variant",
      type: '"default" | "bordered" | "filled"',
      defaultValue: '"default"',
      description: "Controls the visual container variant.",
    },
    {
      name: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      defaultValue: '"md"',
      description: "Controls the container border radius.",
    },
    {
      name: "state",
      type: '"default" | "disabled"',
      defaultValue: '"default"',
      description: "Controls the utility state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables interaction with the scroll area.",
    },
    {
      name: "type",
      type: '"vertical" | "horizontal" | "both"',
      defaultValue: '"both"',
      description: "Controls the scrolling direction.",
    },
    {
      name: "scrollbar",
      type: '"auto" | "always" | "hidden"',
      defaultValue: '"auto"',
      description: "Controls scrollbar visibility.",
    },
    {
      name: "maxHeight",
      type: "CSSProperties['maxHeight']",
      defaultValue: "300",
      description: "Sets the maximum height of the region.",
    },
    {
      name: "maxWidth",
      type: "CSSProperties['maxWidth']",
      defaultValue: '"100%"',
      description: "Sets the maximum width of the region.",
    },
  ],
} as const;
