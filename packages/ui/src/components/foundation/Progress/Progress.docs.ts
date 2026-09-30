export const progressDocs = {
  name: "Progress",
  category: "Foundation",
  description: "Displays determinate progress with configurable value, maximum, size, variant, and optional percentage text.",
  importCode: 'import { Progress } from "shivanya-ui";',
  usageCode: `<Progress value={60} />\n\n<Progress value={75} variant="success" showValue />`,
  props: [
    { name: "value", type: "number", defaultValue: "0", description: "Current progress value. Values are clamped between zero and max." },
    { name: "max", type: "number", defaultValue: "100", description: "Maximum progress value." },
    { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls the progress bar height." },
    { name: "variant", type: '"primary" | "secondary" | "success" | "warning" | "danger" | "info"', defaultValue: '"primary"', description: "Controls the progress color." },
    { name: "showValue", type: "boolean", defaultValue: "false", description: "Displays the calculated percentage in the center." },
  ],
};
