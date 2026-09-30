export const typographyDocs = {
  name: "Typography",
  category: "Foundation",

  description:
    "A flexible typography component for headings, body text, labels, captions, and other textual content.",

  importCode:
    'import { Typography } from "shivanya-ui";',

  usageCode: `<Typography variant="h1">
  Welcome to Shivanya
</Typography>`,

  props: [
    {
      name: "as",
      type:
        '"span" | "p" | "div" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
      defaultValue: '"p"',
      description:
        "Controls the HTML element rendered by the component.",
    },
    {
      name: "variant",
      type:
        '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "bodySmall" | "bodyXSmall" | "caption" | "overline"',
      defaultValue: '"body"',
      description:
        "Controls the semantic typography style.",
    },
    {
      name: "size",
      type:
        '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "hero"',
      defaultValue: '"md"',
      description:
        "Controls the font size.",
    },
    {
      name: "align",
      type:
        '"left" | "center" | "right" | "justify"',
      defaultValue: '"left"',
      description:
        "Controls text alignment.",
    },
    {
      name: "weight",
      type:
        '"regular" | "medium" | "semibold" | "bold"',
      defaultValue: '"regular"',
      description:
        "Controls font weight.",
    },
    {
      name: "color",
      type:
        '"primary" | "secondary" | "muted" | "success" | "warning" | "danger" | "info" | "inherit"',
      defaultValue: '"primary"',
      description:
        "Controls the text color.",
    },
    {
      name: "transform",
      type:
        '"none" | "uppercase" | "lowercase" | "capitalize"',
      defaultValue: '"none"',
      description:
        "Controls text transformation.",
    },
  ],

  examples: [
    {
      name: "Heading",
      code: `<Typography variant="h1">
  Dashboard
</Typography>`,
    },
    {
      name: "Body",
      code: `<Typography variant="body">
  This is body text.
</Typography>`,
    },
    {
      name: "Secondary",
      code: `<Typography
  variant="bodySmall"
  color="secondary"
>
  Additional information.
</Typography>`,
    },
    {
      name: "Centered",
      code: `<Typography
  variant="h2"
  align="center"
>
  Welcome
</Typography>`,
    },
    {
      name: "Bold",
      code: `<Typography
  variant="body"
  weight="bold"
>
  Important text
</Typography>`,
    },
    {
      name: "Hero",
      code: `<Typography
  variant="h1"
  size="hero"
  weight="bold"
>
  Build with Shivanya
</Typography>`,
    },
  ],
};