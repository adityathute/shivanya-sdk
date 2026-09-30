import { createElement, forwardRef } from "react";
import type { SpinnerProps } from "./Spinner.types";

const Spinner = forwardRef<HTMLElement, SpinnerProps>(function Spinner(
  {
    as = "span",
    size = "md",
    variant = "primary",
    label = "Loading",
    className,
    ...props
  },
  ref
) {
  const classes = [
    "shivanya-spinner",
    `shivanya-spinner-${size}`,
    `shivanya-spinner-${variant}`,
    className,
  ].filter(Boolean).join(" ");

  return createElement(as, {
    ...props,
    ref,
    role: "status",
    "aria-live": "polite",
    "aria-label": label,
    className: classes,
  });
});

Spinner.displayName = "Spinner";

export { Spinner };
