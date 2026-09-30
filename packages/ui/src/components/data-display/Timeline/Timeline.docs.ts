export const timelineDocs = {
  name: "Timeline",
  category: "Data Display",
  description:
    "Chronological content display with configurable orientation, markers, lines, and semantic variants.",

  importCode:
    'import { Timeline } from "shivanya-ui";',

  usageCode: `<Timeline>
  <Timeline.Item
    title="Created"
    timestamp="Today"
  >
    Order created.
  </Timeline.Item>

  <Timeline.Item
    title="Processing"
    timestamp="Today"
  >
    Order is being processed.
  </Timeline.Item>
</Timeline>`,

  props: [
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      defaultValue: '"md"',
      description:
        "Controls marker size.",
    },
    {
      name: "variant",
      type:
        '"default" | "primary" | "success" | "warning" | "danger" | "info"',
      defaultValue: '"default"',
      description:
        "Controls marker color.",
    },
    {
      name: "orientation",
      type: '"vertical" | "horizontal"',
      defaultValue: '"vertical"',
      description:
        "Controls timeline direction.",
    },
    {
      name: "align",
      type: '"start" | "center" | "end"',
      defaultValue: '"start"',
      description:
        "Controls content alignment.",
    },
    {
      name: "lineStyle",
      type:
        '"solid" | "dashed" | "dotted"',
      defaultValue: '"solid"',
      description:
        "Controls connector line style.",
    },
    {
      name: "dotVariant",
      type: '"filled" | "outlined"',
      defaultValue: '"filled"',
      description:
        "Controls marker appearance.",
    },
    {
      name: "state",
      type:
        '"default" | "loading" | "disabled"',
      defaultValue: '"default"',
      description:
        "Controls component state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables the entire timeline.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Timeline items.",
    },
  ],
} as const;