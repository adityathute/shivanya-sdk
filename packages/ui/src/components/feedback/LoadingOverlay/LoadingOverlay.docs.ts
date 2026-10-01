export const loadingOverlayDocs = {
  name: "LoadingOverlay",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { LoadingOverlay } from "shivanya-ui";',
  usageCode: `<LoadingOverlay open label="Loading data…" />`,
  props: [
    { name: "open", type: "boolean", defaultValue: "true", description: "Controls whether the loading layer is shown." },
    { name: "label", type: "ReactNode", defaultValue: "\"Loading\u2026\"", description: "Loading message." },
    { name: "fullscreen", type: "boolean", defaultValue: "false", description: "Covers the viewport." },
    { name: "transparent", type: "boolean", defaultValue: "false", description: "Uses a lighter transparent backdrop." }
  ]
} as const;
