export const dialogDocs = {
  name: "Dialog",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { Dialog } from "shivanya-ui";',
  usageCode: `<Dialog open title="Details" onClose={close}>Dialog content</Dialog>`,
  props: [
    { name: "open", type: "boolean", defaultValue: "false", description: "Controls visibility." },
    { name: "title", type: "ReactNode", defaultValue: "undefined", description: "Dialog heading." },
    { name: "footer", type: "ReactNode", defaultValue: "undefined", description: "Footer content." },
    { name: "closable", type: "boolean", defaultValue: "true", description: "Shows a close button." },
    { name: "closeOnOverlayClick", type: "boolean", defaultValue: "true", description: "Closes when the overlay is clicked." },
    { name: "closeOnEscape", type: "boolean", defaultValue: "true", description: "Closes when Escape is pressed." },
    { name: "size", type: "\"sm\" | \"md\" | \"lg\" | \"xl\"", defaultValue: "\"md\"", description: "Controls dialog width." },
    { name: "variant", type: "\"default\" | \"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"info\"", defaultValue: "\"default\"", description: "Visual treatment." },
    { name: "state", type: "\"default\" | \"loading\" | \"disabled\"", defaultValue: "\"default\"", description: "Controls state." }
  ]
} as const;
