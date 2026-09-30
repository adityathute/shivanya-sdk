export const dividerDocs = {
  name: "Divider",
  category: "Foundation",
  description: "Separates content with horizontal or vertical solid, dashed, or dotted lines.",
  importCode: 'import { Divider } from "shivanya-ui";',
  usageCode: `<Divider />\n\n<Divider variant="dashed" />\n\n<Divider orientation="vertical" as="div" />`,
  props: [
    { name: "as", type: '"hr" | "div"', defaultValue: '"hr"', description: "Controls the rendered element." },
    { name: "orientation", type: '"horizontal" | "vertical"', defaultValue: '"horizontal"', description: "Controls the divider direction." },
    { name: "variant", type: '"solid" | "dashed" | "dotted"', defaultValue: '"solid"', description: "Controls the line style." },
    { name: "thickness", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls line thickness." },
    { name: "spacing", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls the outer spacing." },
  ],
};
