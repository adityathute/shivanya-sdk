export const popoverDocs = {
  name: "Popover",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { Popover } from "shivanya-ui";',
  usageCode: `<Popover trigger={<span>Open</span>} content="Popover content" />`,
  props: [
    { name: "trigger", type: "ReactNode", defaultValue: "required", description: "Trigger content." },
    { name: "content", type: "ReactNode", defaultValue: "required", description: "Popover body." },
    { name: "header", type: "ReactNode", defaultValue: "undefined", description: "Optional header." },
    { name: "footer", type: "ReactNode", defaultValue: "undefined", description: "Optional footer." },
    { name: "open", type: "boolean", defaultValue: "undefined", description: "Controlled open state." },
    { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Initial open state." },
    { name: "placement", type: "\"top\" | \"right\" | \"bottom\" | \"left\"", defaultValue: "\"bottom\"", description: "Popover placement." },
    { name: "size", type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"", defaultValue: "\"md\"", description: "Controls sizing." }
  ]
} as const;
