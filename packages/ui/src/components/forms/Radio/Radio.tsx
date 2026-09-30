import { forwardRef, useId } from "react";
import type { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function Radio(
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

    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    const describedBy = [
      description ? descriptionId : "",
      error ? errorId : "",
    ]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <label
        className={[
          "shivanya-radio",
          `shivanya-radio-${size}`,
          `shivanya-radio-${
            error ? "error" : variant
          }`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        htmlFor={id}
      >
        <input
          {...props}
          ref={ref}
          id={id}
          type="radio"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />

        <span
          className="shivanya-radio-dot"
          aria-hidden="true"
        />

        {(label || description || error) && (
          <span className="shivanya-radio-content">
            {label && (
              <span className="shivanya-radio-label">
                {label}
              </span>
            )}

            {description && (
              <span
                id={descriptionId}
                className="shivanya-radio-description"
              >
                {description}
              </span>
            )}

            {error && (
              <span
                id={errorId}
                className="shivanya-radio-error"
                role="alert"
              >
                {error}
              </span>
            )}
          </span>
        )}
      </label>
    );
  },
);

Radio.displayName = "Radio";