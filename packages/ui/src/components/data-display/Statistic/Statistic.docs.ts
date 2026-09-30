export const statisticDocs = {
  name: "Statistic",
  category: "Data Display",
  description:
    "Displays a prominent metric with supporting label, trend, description, and optional icon.",

  importCode:
    'import { Statistic } from "shivanya-ui";',

  usageCode:
    '<Statistic label="Revenue" value="$24,500" trend="up" trendValue="12%" />',

  props: [
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Metric label.",
    },
    {
      name: "value",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Primary metric value.",
    },
    {
      name: "prefix",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Content displayed before the value.",
    },
    {
      name: "suffix",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Content displayed after the value.",
    },
    {
      name: "description",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Supporting description.",
    },
    {
      name: "trend",
      type: '"up" | "down" | "neutral"',
      defaultValue: "undefined",
      description: "Trend direction.",
    },
    {
      name: "trendValue",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Trend amount or content.",
    },
    {
      name: "trendIcon",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Custom trend icon.",
    },
    {
      name: "icon",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Optional statistic icon.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Controls the value size.",
    },
    {
      name: "variant",
      type:
        '"default" | "primary" | "success" | "warning" | "danger" | "info"',
      defaultValue: '"default"',
      description: "Semantic value color.",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "Displays a loading placeholder instead of the value.",
    },
    {
      name: "loadingLabel",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Optional content displayed while loading.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description: "Makes the statistic fill its available width.",
    },
  ],
} as const;