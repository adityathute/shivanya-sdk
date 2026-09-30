export const spinnerDocs = {
  name: "Spinner",
  category: "Foundation",
  description: "A compact loading indicator with semantic status messaging, sizes, and color variants.",
  importCode: 'import { Spinner } from "shivanya-ui";',
  usageCode: `<Spinner />\n\n<Spinner size="lg" variant="success" />`,
  props: [
    { name: "as", type: '"span" | "div"', defaultValue: '"span"', description: "Controls the rendered spinner element." },
    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"md"', description: "Controls spinner dimensions." },
    { name: "variant", type: '"primary" | "secondary" | "success" | "warning" | "danger" | "info" | "inherit"', defaultValue: '"primary"', description: "Controls spinner color." },
    { name: "label", type: "string", defaultValue: '"Loading"', description: "Accessible status label announced to assistive technology." },
  ],
};
