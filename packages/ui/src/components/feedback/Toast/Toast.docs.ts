export const toastDocs = {
  name: "Toast",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { Toast } from "shivanya-ui";',
  usageCode: `<Toast title="Saved" color="success" closable>Changes saved.</Toast>`,
  props: [
    { name: "title", type: "ReactNode", defaultValue: "undefined", description: "Toast heading." },
    { name: "icon", type: "ReactNode", defaultValue: "undefined", description: "Optional leading icon." },
    { name: "closable", type: "boolean", defaultValue: "false", description: "Shows a close button." },
    { name: "size", type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"", defaultValue: "\"md\"", description: "Controls sizing." },
    { name: "variant", type: "\"default\" | \"bordered\" | \"filled\" | \"ghost\"", defaultValue: "\"default\"", description: "Controls visual treatment." },
    { name: "radius", type: "\"none\" | \"sm\" | \"md\" | \"lg\" | \"full\"", defaultValue: "\"md\"", description: "Controls corner radius." },
    { name: "color", type: "\"default\" | \"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"info\"", defaultValue: "\"default\"", description: "Semantic color." },
    { name: "duration", type: "number", defaultValue: "undefined", description: "Auto-closes after the duration in milliseconds." }
  ]
} as const;
