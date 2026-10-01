export const alertDocs = {
  name: "Alert",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { Alert } from "shivanya-ui";',
  usageCode: `<Alert title="Success" color="success" closable>Changes saved successfully.</Alert>`,
  props: [
    { name: "title", type: "ReactNode", defaultValue: "undefined", description: "Alert heading." },
    { name: "icon", type: "ReactNode", defaultValue: "undefined", description: "Optional leading icon." },
    { name: "closable", type: "boolean", defaultValue: "false", description: "Shows a close button." },
    { name: "size", type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"", defaultValue: "\"md\"", description: "Controls sizing." },
    { name: "variant", type: "\"default\" | \"bordered\" | \"filled\" | \"ghost\"", defaultValue: "\"default\"", description: "Controls visual treatment." },
    { name: "radius", type: "\"none\" | \"sm\" | \"md\" | \"lg\" | \"full\"", defaultValue: "\"md\"", description: "Controls corner radius." },
    { name: "color", type: "\"default\" | \"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"info\"", defaultValue: "\"default\"", description: "Semantic color." },
    { name: "state", type: "\"default\" | \"loading\" | \"disabled\"", defaultValue: "\"default\"", description: "Controls component state." }
  ]
} as const;
