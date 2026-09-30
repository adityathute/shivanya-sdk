export const focusTrapDocs = {
  name: "FocusTrap",
  category: "Utilities",
  description:
    "Keeps keyboard focus inside a region and optionally restores focus when it is deactivated.",
  importCode:
    'import { FocusTrap } from "shivanya-ui";',
  usageCode: `<FocusTrap>
  <div>
    <button>First</button>
    <button>Last</button>
  </div>
</FocusTrap>`,
  props: [
    {
      name: "children",
      type: "ReactElement | ReactNode",
      defaultValue: "undefined",
      description: "Element containing the focusable region.",
    },
    {
      name: "state",
      type: '"default" | "active" | "inactive" | "disabled"',
      defaultValue: '"default"',
      description: "Controls the focus trap state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables focus trapping.",
    },
    {
      name: "autoFocus",
      type: "boolean",
      defaultValue: "true",
      description: "Moves focus to the first focusable element when activated.",
    },
    {
      name: "restoreFocus",
      type: "boolean",
      defaultValue: "true",
      description: "Restores focus to the previously focused element on cleanup.",
    },
    {
      name: "onActivate",
      type: "() => void",
      defaultValue: "undefined",
      description: "Called when the focus trap becomes active.",
    },
    {
      name: "onDeactivate",
      type: "() => void",
      defaultValue: "undefined",
      description: "Called when the focus trap is deactivated.",
    },
  ],
} as const;
