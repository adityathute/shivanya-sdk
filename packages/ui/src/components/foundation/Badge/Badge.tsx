import { forwardRef } from "react";
import type { BadgeProps } from "./Badge.types";

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(
    {
      variant = "primary",
      size = "md",
      rounded = false,
      className,
      children,
      ...props
    },
    ref
  ) {
    const classes = [
      "shivanya-badge",
      `shivanya-badge-${variant}`,
      `shivanya-badge-${size}`,
      rounded ? "shivanya-badge-rounded" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span
        {...props}
        ref={ref}
        className={classes}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };