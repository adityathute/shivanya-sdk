export const otpInputDocs = {
  name: "OtpInput",
  category: "Forms",
  description:
    "Keyboard-friendly one-time password input with paste support.",

  importCode:
    'import { OtpInput } from "shivanya-ui";',

  usageCode: `
<OtpInput
  length={6}
  value={otp}
  onChange={setOtp}
/>
`,

  props: [
    {
      name: "length",
      type: "4 | 6",
      defaultValue: "4",
      description:
        "Number of OTP digits.",
    },
    {
      name: "value",
      type: "string",
      defaultValue: '""',
      description:
        "Controlled OTP value.",
    },
    {
      name: "onChange",
      type: "(value: string) => void",
      defaultValue: "undefined",
      description:
        "Called with the combined digits.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls the size of each OTP input.",
    },
    {
      name: "label",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Label displayed above the OTP inputs.",
    },
    {
      name: "helperText",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Supporting text displayed below the OTP inputs.",
    },
    {
      name: "error",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Error message and error styling.",
    },
    {
      name: "success",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Success message and success styling.",
    },
    {
      name: "autoFocus",
      type: "boolean",
      defaultValue: "false",
      description:
        "Automatically focuses the first OTP input.",
    },
  ],
} as const;