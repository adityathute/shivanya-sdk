export const accordionDocs = {
    name: "Accordion",
    category: "Data Display",
    description: "Expandable content sections with multiple variants, sizes, controlled expansion, and accessible disclosure behavior.",
    importCode: 'import { Accordion } from "shivanya-ui";',
    usageCode: `<Accordion><Accordion.Item itemKey="details" title="Details">Content</Accordion.Item></Accordion>`,
    props: [
        {
            name: "size",
            type: '"xs" | "sm" | "md" | "lg" | "xl"',
            defaultValue: '"md"',
            description: "Controls item spacing."
        },
        {
            name: "variant",
            type: '"default" | "bordered" | "filled" | "ghost"',
            defaultValue: '"default"',
            description: "Controls the visual treatment."
        },
        {
            name: "radius",
            type: '"none" | "sm" | "md" | "lg" | "full"',
            defaultValue: '"md"',
            description: "Controls item radius."
        },
        {
            name: "expandMode",
            type: '"multiple" | "single"',
            defaultValue: '"multiple"',
            description: "Controls whether multiple items may remain expanded."
        },
        {
            name: "defaultExpandedKeys",
            type: "string[]",
            defaultValue: "[]",
            description: "Initial expanded item keys."
        },
        {
            name: "expandedKeys",
            type: "string[]",
            defaultValue: "undefined",
            description: "Controlled expanded item keys."
        },
        {
            name: "onExpandedKeysChange",
            type: "(keys: string[]) => void",
            defaultValue: "undefined",
            description: "Called when expansion changes."
        },
        {
            name: "state",
            type: '"default" | "loading" | "disabled"',
            defaultValue: '"default"',
            description: "Controls the component state."
        },
        {
            name: "collapsible",
            type: "boolean",
            defaultValue: "true",
            description: "Allows an expanded item to collapse."
        }
    ]
} as const;