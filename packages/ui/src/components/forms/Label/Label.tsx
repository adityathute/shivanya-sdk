import { forwardRef } from "react";
import type { LabelProps } from "./Label.types";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  function Label(
    {
      size = "md",
      variant = "default",
      required,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <label
        {...props}
        ref={ref}
        className={[
          "shivanya-label",
          `shivanya-label-${size}`,
          `shivanya-label-${variant}`,
          disabled
            ? "shivanya-label-disabled"
            : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}

        {required && (
          <span
            aria-hidden="true"
            className="shivanya-label-required"
          >
            *
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = "Label";