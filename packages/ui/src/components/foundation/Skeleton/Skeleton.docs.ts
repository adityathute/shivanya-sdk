export const skeletonDocs = {
  name: "Skeleton",
  category: "Foundation",
  description: "A loading placeholder for text, rectangular, rounded, and circular content with optional animation and repetition.",
  importCode: 'import { Skeleton } from "shivanya-ui";',
  usageCode: `<Skeleton />\n\n<Skeleton variant="circular" width={40} height={40} />\n\n<Skeleton count={3} animation="wave" />`,
  props: [
    { name: "as", type: '"div" | "span"', defaultValue: '"div"', description: "Controls the rendered placeholder element." },
    { name: "variant", type: '"text" | "rectangular" | "rounded" | "circular"', defaultValue: '"text"', description: "Controls the placeholder shape." },
    { name: "animation", type: '"none" | "pulse" | "wave"', defaultValue: '"pulse"', description: "Controls the loading animation." },
    { name: "loading", type: "boolean", defaultValue: "true", description: "When false, renders children instead of the skeleton." },
    { name: "count", type: "number", defaultValue: "1", description: "Renders multiple skeleton placeholders." },
    { name: "inline", type: "boolean", defaultValue: "false", description: "Uses inline-block layout for the placeholder." },
    { name: "width", type: "number | string", defaultValue: "-", description: "Overrides placeholder width." },
    { name: "height", type: "number | string", defaultValue: "-", description: "Overrides placeholder height." },
    { name: "borderRadius", type: "number | string", defaultValue: "-", description: "Overrides placeholder border radius." },
  ],
};
