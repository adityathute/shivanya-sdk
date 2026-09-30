export const formFieldDocs = {
  name: "FormField",
  category: "Forms",
  description:
    "Shared label, description, validation, and disabled wrapper for a form control.",

  importCode:
    'import { FormField } from "shivanya-ui";',

  usageCode: `
<FormField
  label="Name"
  description="Enter your full name."
>
  <Input />
</FormField>
`,

  props: [
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Accessible field label.",
    },
    {
      name: "description",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Supporting field text.",
    },
    {
      name: "error",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Validation feedback.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "undefined",
      description:
        "Marks the child form control as required.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "undefined",
      description:
        "Disables the child form control.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Controls the field label size.",
    },
    {
      name: "children",
      type: "ReactElement",
      defaultValue: "required",
      description:
        "Form control rendered inside the field.",
    },
  ],
} as const;