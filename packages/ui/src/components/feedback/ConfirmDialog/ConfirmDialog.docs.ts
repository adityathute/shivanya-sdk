export const confirmDialogDocs = {
  name: "ConfirmDialog",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { ConfirmDialog } from "shivanya-ui";',
  usageCode: `<ConfirmDialog open title="Delete item?" message="This action cannot be undone." onCancel={close} onConfirm={confirm} />`,
  props: [
    { name: "open", type: "boolean", defaultValue: "false", description: "Controls visibility." },
    { name: "title", type: "ReactNode", defaultValue: "undefined", description: "Dialog heading." },
    { name: "message", type: "ReactNode", defaultValue: "undefined", description: "Confirmation message." },
    { name: "confirmText", type: "ReactNode", defaultValue: "\"Confirm\"", description: "Confirmation button content." },
    { name: "cancelText", type: "ReactNode", defaultValue: "\"Cancel\"", description: "Cancel button content." },
    { name: "variant", type: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"info\"", defaultValue: "\"primary\"", description: "Confirmation action variant." },
    { name: "size", type: "\"sm\" | \"md\" | \"lg\"", defaultValue: "\"md\"", description: "Controls dialog width." },
    { name: "loading", type: "boolean", defaultValue: "false", description: "Shows the confirmation action as loading." },
    { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables actions." }
  ]
} as const;
