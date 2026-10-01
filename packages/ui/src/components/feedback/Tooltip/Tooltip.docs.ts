export const tooltipDocs = {
  name: "Tooltip",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { Tooltip } from "shivanya-ui";',
  usageCode: `<Tooltip content="More information"><span>Hover me</span></Tooltip>`,
  props: [
    { name: "content", type: "ReactNode", defaultValue: "required", description: "Tooltip content." },
    { name: "placement", type: "\"top\" | \"right\" | \"bottom\" | \"left\"", defaultValue: "\"top\"", description: "Tooltip placement." },
    { name: "size", type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"", defaultValue: "\"md\"", description: "Controls sizing." },
    { name: "variant", type: "\"default\" | \"bordered\" | \"filled\" | \"ghost\"", defaultValue: "\"default\"", description: "Visual treatment." },
    { name: "radius", type: "\"none\" | \"sm\" | \"md\" | \"lg\" | \"full\"", defaultValue: "\"md\"", description: "Corner radius." },
    { name: "state", type: "\"default\" | \"loading\" | \"disabled\"", defaultValue: "\"default\"", description: "Controls state." }
  ]
} as const;
