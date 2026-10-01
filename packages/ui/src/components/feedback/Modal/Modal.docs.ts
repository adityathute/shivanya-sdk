export const modalDocs = {
  name: "Modal",
  category: "Feedback",
  description: "Reusable feedback and overlay component for Shivanya UI.",
  importCode: 'import { Modal } from "shivanya-ui";',
  usageCode: `<Modal open title="Profile" onClose={close}>Modal content</Modal>`,
  props: [
    { name: "open", type: "boolean", defaultValue: "false", description: "Controls visibility." },
    { name: "title", type: "ReactNode", defaultValue: "undefined", description: "Modal heading." },
    { name: "footer", type: "ReactNode", defaultValue: "undefined", description: "Footer content." },
    { name: "closable", type: "boolean", defaultValue: "true", description: "Shows a close button." },
    { name: "centered", type: "boolean", defaultValue: "true", description: "Centers the modal vertically." },
    { name: "closeOnOverlayClick", type: "boolean", defaultValue: "true", description: "Closes on overlay click." },
    { name: "closeOnEscape", type: "boolean", defaultValue: "true", description: "Closes on Escape." },
    { name: "size", type: "\"sm\" | \"md\" | \"lg\" | \"xl\" | \"full\"", defaultValue: "\"md\"", description: "Controls modal width." },
    { name: "radius", type: "\"none\" | \"sm\" | \"md\" | \"lg\" | \"full\"", defaultValue: "\"md\"", description: "Controls corner radius." }
  ]
} as const;
