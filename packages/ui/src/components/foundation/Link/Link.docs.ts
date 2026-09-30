export const linkDocs = {
  name: "Link",
  category: "Foundation",
  description: "Accessible links with semantic variants, sizes, underline control, external-link handling, and disabled presentation.",
  importCode: 'import { Link } from "shivanya-ui";',
  usageCode: `<Link href="/about">About</Link>\n\n<Link href="https://example.com" external>External</Link>`,
  props: [
    { name: "href", type: "string", defaultValue: "-", description: "Destination URL or path." },
    { name: "variant", type: '"default" | "primary" | "secondary" | "muted" | "danger"', defaultValue: '"default"', description: "Controls the link color." },
    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"md"', description: "Controls text size." },
    { name: "underline", type: "boolean", defaultValue: "false", description: "Keeps the link underlined by default." },
    { name: "external", type: "boolean", defaultValue: "false", description: "Opens the link in a new tab with safe rel attributes." },
    { name: "disabled", type: "boolean", defaultValue: "false", description: "Renders a non-interactive disabled presentation." },
  ],
};
