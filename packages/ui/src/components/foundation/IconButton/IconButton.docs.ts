export const iconButtonDocs = {
  name: "IconButton",
  category: "Foundation",

  description:
    "A compact button component designed for actions represented by an icon.",

  importCode: `import { IconButton } from "shivanya-ui";`,

  usageCode: `import { CloseIcon } from "shivanya-ui/icons";

<IconButton aria-label="Close">
  <CloseIcon />
</IconButton>`,

  props: [
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "-",
      description:
        "Icon or content displayed inside the icon button.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      defaultValue: '"md"',
      description:
        "Controls the size of the icon button.",
    },
    {
      name: "variant",
      type: '"ghost" | "outline" | "solid"',
      defaultValue: '"ghost"',
      description:
        "Controls the visual style of the icon button.",
    },
    {
      name: "rounded",
      type: "boolean",
      defaultValue: "true",
      description:
        "Applies a fully rounded border radius to the icon button.",
    },
    {
      name: "iconRotateOnHover",
      type: "boolean",
      defaultValue: "false",
      description:
        "Rotates the icon by 90 degrees when the button is hovered.",
    },
    {
      name: "iconHoverColor",
      type: "string",
      defaultValue: '"var(--shivanya-color-danger)"',
      description:
        "Controls the icon button hover color.",
    },
    {
      name: "type",
      type: '"button" | "submit" | "reset"',
      defaultValue: '"button"',
      description:
        "Specifies the native HTML button type.",
    },
    {
      name: "aria-label",
      type: "string",
      defaultValue: "-",
      description:
        "Accessible label for the icon button.",
    },
    {
      name: "...ButtonHTMLAttributes",
      type: "ButtonHTMLAttributes<HTMLButtonElement>",
      defaultValue: "-",
      description:
        "Supports standard HTML button attributes.",
    },
  ],

  variants: [
    "ghost",
    "outline",
    "solid",
  ],

  sizes: [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ],

  examples: [
    {
      name: "Ghost",
      code: `<IconButton aria-label="Close">
  <CloseIcon />
</IconButton>`,
    },
    {
      name: "Outline",
      code: `<IconButton
  variant="outline"
  aria-label="Close"
>
  <CloseIcon />
</IconButton>`,
    },
    {
      name: "Solid",
      code: `<IconButton
  variant="solid"
  aria-label="Close"
>
  <CloseIcon color="white" />
</IconButton>`,
    },
    {
      name: "Rotating icon",
      code: `<IconButton
  iconRotateOnHover
  aria-label="Close"
>
  <CloseIcon />
</IconButton>`,
    },
    {
      name: "Custom hover color",
      code: `<IconButton
  iconHoverColor="var(--shivanya-color-primary)"
  aria-label="Close"
>
  <CloseIcon />
</IconButton>`,
    },
    {
      name: "Small",
      code: `<IconButton
  size="sm"
  aria-label="Close"
>
  <CloseIcon />
</IconButton>`,
    },
  ],
};