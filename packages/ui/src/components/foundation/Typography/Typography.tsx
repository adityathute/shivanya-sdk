import { createElement } from "react";

import type {
  TypographyProps,
} from "./Typography.types";

function Typography({
  as = "p",
  variant = "body",
  size,
  align = "left",
  weight = "regular",
  color = "primary",
  transform = "none",
  className,
  children,
  ...props
}: TypographyProps) {
  const classes = [
    "shivanya-typography",
    `shivanya-typography-${variant}`,
    size ? `shivanya-typography-size-${size}` : "",
    `shivanya-typography-align-${align}`,
    `shivanya-typography-weight-${weight}`,
    `shivanya-typography-color-${color}`,
    `shivanya-typography-transform-${transform}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    as,
    {
      ...props,
      className: classes,
    },
    children
  );
}

export { Typography };