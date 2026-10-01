export const notificationDocs = {
  name: "Notification",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { Notification } from "shivanya-ui";',
  usageCode: `<Notification title="Saved" variant="success" closable>Your changes were saved.</Notification>`,
  props: [
    { name: "title", type: "ReactNode", defaultValue: "undefined", description: "Notification heading." },
    { name: "icon", type: "ReactNode", defaultValue: "undefined", description: "Optional leading icon." },
    { name: "closable", type: "boolean", defaultValue: "true", description: "Shows a close button." },
    { name: "variant", type: "\"default\" | \"primary\" | \"success\" | \"warning\" | \"danger\" | \"info\"", defaultValue: "\"default\"", description: "Semantic notification variant." },
    { name: "size", type: "\"sm\" | \"md\" | \"lg\"", defaultValue: "\"md\"", description: "Controls sizing." },
    { name: "duration", type: "number", defaultValue: "undefined", description: "Auto-closes after the duration in milliseconds." }
  ]
} as const;
