import { forwardRef, useId } from "react";

import type { SwitchProps } from "./Switch.types";

export const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps
>(function Switch(
  {
    id: providedId,
    size = "md",
    variant = "default",
    label,
    description,
    error,
    className,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  const descriptionId = description
    ? `${id}-description`
    : undefined;

  const errorId = error
    ? `${id}-error`
    : undefined;

  const describedBy = [
    description ? descriptionId : "",
    error ? errorId : "",
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const classes = [
    "shivanya-switch",
    `shivanya-switch-${size}`,
    `shivanya-switch-${error ? "error" : variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      className={classes}
      htmlFor={id}
    >
      <span className="shivanya-switch-control">
        <input
          {...props}
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          aria-invalid={
            error ? true : undefined
          }
          aria-describedby={describedBy}
        />

        <span
          className="shivanya-switch-track"
          aria-hidden="true"
        >
          <span className="shivanya-switch-thumb" />
        </span>
      </span>

      {(label || description || error) && (
        <span className="shivanya-switch-content">
          {label && (
            <span className="shivanya-switch-label">
              {label}
            </span>
          )}

          {description && (
            <span
              id={descriptionId}
              className="shivanya-switch-description"
            >
              {description}
            </span>
          )}

          {error && (
            <span
              id={errorId}
              className="shivanya-switch-error"
              role="alert"
            >
              {error}
            </span>
          )}
        </span>
      )}
    </label>
  );
});

Switch.displayName = "Switch";