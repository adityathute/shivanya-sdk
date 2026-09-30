import { createElement, forwardRef } from "react";
import type { DividerProps } from "./Divider.types";

const Divider = forwardRef<HTMLElement, DividerProps>(function Divider(
  {
    as = "hr",
    orientation = "horizontal",
    variant = "solid",
    thickness = "md",
    spacing = "md",
    className,
    ...props
  },
  ref
) {
  const classes = [
    "shivanya-divider",
    `shivanya-divider-${orientation}`,
    `shivanya-divider-${variant}`,
    `shivanya-divider-${thickness}`,
    `shivanya-divider-spacing-${spacing}`,
    className,
  ].filter(Boolean).join(" ");

  return createElement(as, {
    ...props,
    ref,
    role: as === "div" ? "separator" : undefined,
    "aria-orientation": as === "div" ? orientation : undefined,
    className: classes,
  });
});

Divider.displayName = "Divider";

export { Divider };
