export const logoDocs = {
  name: "Logo",
  category: "Foundation",
  description: "A reusable brand block with an optional image, name, subtitle, and link behavior.",
  importCode: 'import { Logo } from "shivanya-ui";',
  usageCode: `<Logo />\n\n<Logo src="/logo.png" branding={{ name: "My App", subtitle: "Build better", href: "/" }} />`,
  props: [
    { name: "branding", type: "LogoBranding", defaultValue: "{}", description: "Controls the brand name, subtitle, and destination." },
    { name: "link", type: "boolean", defaultValue: "true", description: "Controls whether the logo content links to branding.href." },
    { name: "src", type: "string", defaultValue: "-", description: "Optional logo image source. Without it, a simple S mark is rendered." },
    { name: "alt", type: "string", defaultValue: "-", description: "Accessible alternative text for the logo image." },
    { name: "imageSize", type: "number | string", defaultValue: "-", description: "Optional width and height override for the logo image or mark." },
  ],
};
