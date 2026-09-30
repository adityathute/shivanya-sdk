export const formGroupDocs = {
  name: "FormGroup",
  category: "Forms",
  description:
    "Groups related form controls with optional fieldset semantics and spacing.",

  importCode:
    'import { FormGroup } from "shivanya-ui";',

  usageCode: `
<FormGroup
  label="Account"
  description="Enter your account details."
>
  ...
</FormGroup>
`,

  props: [
    {
      name: "spacing",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the spacing between grouped controls.",
    },
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Optional legend displayed for the group.",
    },
    {
      name: "description",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Supporting text displayed below the group label.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Form controls contained inside the group.",
    },
  ],
} as const;