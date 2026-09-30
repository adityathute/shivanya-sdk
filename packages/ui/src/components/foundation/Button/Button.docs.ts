export const buttonDocs = {
    name: "Button",
    category: "Foundation",

    description:
        "A reusable button component for triggering actions, with support for variants, sizes, icons, loading states, rounded styling, and full-width layouts.",

    importCode: `import { Button } from "shivanya-ui";`,

    usageCode: `<Button variant="primary" size="md">
  Click me
</Button>`,

    props: [
        {
            name: "children",
            type: "ReactNode",
            defaultValue: "-",
            description: "Content displayed inside the button.",
        },
        {
            name: "variant",
            type:
                '"primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "warning" | "info" | "link" | "dark" | "light" | "neutral" | "soft-primary" | "soft-secondary" | "soft-danger" | "soft-success" | "soft-warning" | "soft-info"',
            defaultValue: '"primary"',
            description: "Controls the visual style of the button.",
        },
        {
            name: "size",
            type: '"xs" | "sm" | "md" | "lg" | "xl"',
            defaultValue: '"md"',
            description: "Controls the size of the button.",
        },
        {
            name: "loading",
            type: "boolean",
            defaultValue: "false",
            description: "Displays the loading state and disables the button.",
        },
        {
            name: "loadingText",
            type: "ReactNode",
            defaultValue: "-",
            description:
                "Content displayed instead of the button content while loading.",
        },
        {
            name: "loadingPosition",
            type: '"before" | "after"',
            defaultValue: '"before"',
            description:
                "Controls whether the loading indicator appears before or after the button content.",
        },
        {
            name: "startIcon",
            type: "ReactNode",
            defaultValue: "-",
            description:
                "Icon displayed before the button content.",
        },
        {
            name: "endIcon",
            type: "ReactNode",
            defaultValue: "-",
            description:
                "Icon displayed after the button content.",
        },
        {
            name: "rounded",
            type: "boolean",
            defaultValue: "false",
            description:
                "Applies a fully rounded border radius to the button.",
        },
        {
            name: "fullWidth",
            type: "boolean",
            defaultValue: "false",
            description:
                "Makes the button take the full width of its container.",
        },
        {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description:
                "Disables the button and prevents interaction.",
        },
        {
            name: "type",
            type: '"button" | "submit" | "reset"',
            defaultValue: '"button"',
            description:
                "Specifies the native HTML button type.",
        },
        {
            name: "onClick",
            type: "MouseEventHandler<HTMLButtonElement>",
            defaultValue: "-",
            description:
                "Native button click event handler.",
        },
        {
            name: "...ButtonHTMLAttributes",
            type: "ButtonHTMLAttributes<HTMLButtonElement>",
            defaultValue: "-",
            description:
                "Supports the standard HTML button attributes.",
        },
    ],

    variants: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "danger",
        "success",
        "warning",
        "info",
        "link",
        "dark",
        "light",
        "neutral",
        "soft-primary",
        "soft-secondary",
        "soft-danger",
        "soft-success",
        "soft-warning",
        "soft-info",
    ],

    sizes: ["xs", "sm", "md", "lg", "xl"],

    examples: [
        {
            name: "Primary",
            code: `<Button variant="primary">
  Primary
</Button>`,
        },
        {
            name: "Secondary",
            code: `<Button variant="secondary">
  Secondary
</Button>`,
        },
        {
            name: "Outline",
            code: `<Button variant="outline">
  Outline
</Button>`,
        },
        {
            name: "Loading",
            code: `<Button loading>
  Save
</Button>`,
        },
        {
            name: "Loading with text",
            code: `<Button loading loadingText="Saving...">
  Save
</Button>`,
        },
        {
            name: "With icons",
            code: `<Button
  startIcon={<Icon />}
  endIcon={<Icon />}
>
  Continue
</Button>`,
        },
        {
            name: "Rounded",
            code: `<Button rounded>
  Rounded
</Button>`,
        },
        {
            name: "Full width",
            code: `<Button fullWidth>
  Continue
</Button>`,
        },
    ],
};