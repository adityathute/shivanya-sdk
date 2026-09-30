export const portalDocs = {
  name: "Portal",
  category: "Utilities",
  description:
    "Renders React content into another DOM container, defaulting to document.body.",
  importCode:
    'import { Portal } from "shivanya-ui";',
  usageCode: `<Portal>
  <div>Rendered outside the current DOM subtree.</div>
</Portal>`,
  props: [
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Content rendered through the portal.",
    },
    {
      name: "container",
      type: "HTMLElement | RefObject<HTMLElement | null> | null",
      defaultValue: "null",
      description: "DOM element or ref used as the portal target.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents the portal from rendering.",
    },
    {
      name: "state",
      type: '"default" | "mounted" | "unmounted" | "disabled"',
      defaultValue: '"default"',
      description: "Controls whether the portal is rendered.",
    },
  ],
} as const;
