export const animatedNumberDocs = {
  name: "AnimatedNumber",
  category: "Data Display",
  description:
    "Animates numeric value changes for counters, statistics, prices, and metrics.",

  importCode:
    'import { AnimatedNumber } from "shivanya-ui";',

  usageCode:
    '<AnimatedNumber value={1250} />',

  props: [
    {
      name: "value",
      type: "number",
      defaultValue: "0",
      description: "Target numeric value.",
    },
    {
      name: "duration",
      type: "number",
      defaultValue: "700",
      description:
        "Animation duration in milliseconds.",
    },
    {
      name: "format",
      type: "(value: number) => ReactNode",
      defaultValue: "identity",
      description:
        "Formats the displayed number.",
    },
    {
      name: "animateOnMount",
      type: "boolean",
      defaultValue: "false",
      description:
        "Animates from zero when the component first renders.",
    },
    {
      name: "onAnimationStart",
      type: "() => void",
      defaultValue: "undefined",
      description:
        "Called when the number animation starts.",
    },
    {
      name: "onAnimationEnd",
      type: "() => void",
      defaultValue: "undefined",
      description:
        "Called when the number animation finishes.",
    },
  ],
} as const;