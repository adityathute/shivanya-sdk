export const badgeDocs = {
  name: "Badge",
  category: "Foundation",
  description: "Compact status, category, and metadata label with semantic color variants.",
  importCode: 'import { Badge } from "shivanya-ui";',
  usageCode: `<Badge variant="success">Active</Badge>`,
  props: [
    { name: "as", type: '"span" | "div"', defaultValue: '"span"', description: "Controls the rendered element." },
    { name: "variant", type: '"primary" | "secondary" | "success" | "warning" | "danger" | "info" | "outline" | "soft"', defaultValue: '"primary"', description: "Controls the visual status style." },
    { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls the badge size." },
    { name: "rounded", type: "boolean", defaultValue: "false", description: "Uses a fully rounded shape." },
  ],
};
