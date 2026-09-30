export const emptyStateDocs = {
  name: "EmptyState",
  category: "Data Display",
  description:
    "Communicates that content is unavailable and provides context or actions for the next step.",

  importCode:
    'import { EmptyState } from "shivanya-ui";',

  usageCode:
    '<EmptyState title="No results" description="Try another search." />',

  props: [
    {
      name: "image",
      type: "string",
      defaultValue: "undefined",
      description: "Optional image source.",
    },
    {
      name: "imageAlt",
      type: "string",
      defaultValue: '""',
      description: "Alternative text for the image.",
    },
    {
      name: "icon",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Optional icon content.",
    },
    {
      name: "title",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Primary empty-state heading.",
    },
    {
      name: "description",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Supporting explanation.",
    },
    {
      name: "primaryAction",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Primary action content.",
    },
    {
      name: "secondaryAction",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Secondary action content.",
    },
    {
      name: "footer",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Optional footer content.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Additional custom content.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      defaultValue: '"md"',
      description:
        "Controls spacing and component density.",
    },
    {
      name: "variant",
      type:
        '"default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info"',
      defaultValue: '"default"',
      description: "Semantic visual variant.",
    },
    {
      name: "align",
      type: '"left" | "center" | "right"',
      defaultValue: '"center"',
      description: "Controls content alignment.",
    },
    {
      name: "orientation",
      type: '"vertical" | "horizontal"',
      defaultValue: '"vertical"',
      description: "Controls content orientation.",
    },
    {
      name: "radius",
      type: '"none" | "sm" | "md" | "lg" | "full"',
      defaultValue: '"md"',
      description: "Controls the border radius.",
    },
    {
      name: "imageFit",
      type: '"contain" | "cover"',
      defaultValue: '"contain"',
      description: "Controls how the image fits its bounds.",
    },
    {
      name: "state",
      type: '"default" | "loading" | "disabled"',
      defaultValue: '"default"',
      description: "Controls the component state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables interaction and reduces emphasis.",
    },
    {
      name: "contentClassName",
      type: "string",
      defaultValue: "undefined",
      description: "Optional class name for the content wrapper.",
    },
  ],
} as const;