export const clickAwayListenerDocs = {
  name: "ClickAwayListener",
  category: "Utilities",
  description:
    "Runs a callback when an interaction occurs outside the wrapped element.",
  importCode:
    'import { ClickAwayListener } from "shivanya-ui";',
  usageCode: `<ClickAwayListener onClickAway={() => setOpen(false)}>
  <div>Content</div>
</ClickAwayListener>`,
  props: [
    {
      name: "children",
      type: "ReactElement | ReactNode",
      defaultValue: "undefined",
      description: "Element or content used as the click-away boundary.",
    },
    {
      name: "state",
      type: '"default" | "active" | "inactive" | "disabled"',
      defaultValue: '"default"',
      description: "Controls the utility state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables click-away detection.",
    },
    {
      name: "mouseEvent",
      type: '"mousedown" | "mouseup" | "click" | null',
      defaultValue: '"mousedown"',
      description: "Mouse event used for outside interaction detection.",
    },
    {
      name: "touchEvent",
      type: '"touchstart" | "touchend" | null',
      defaultValue: '"touchstart"',
      description: "Touch event used for outside interaction detection.",
    },
    {
      name: "onClickAway",
      type: "(event) => void",
      defaultValue: "undefined",
      description: "Called when the interaction occurs outside the boundary.",
    },
  ],
} as const;
