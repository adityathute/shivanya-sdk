"use client";
import { forwardRef, useId, useState } from "react";

import type { SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      id: providedId,
      label,
      helperText,
      error,
      size = "md",
      variant = "default",
      fullWidth = false,
      options = [],
      className,
      children,
      required,
      disabled,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const id = providedId ?? generatedId;

    const [open, setOpen] = useState(false);

    const helpId = helperText ? `${id}-help` : undefined;

    const errorId = error ? `${id}-error` : undefined;

    const describedBy = errorId ?? helpId;

    const selectClasses = [
      "shivanya-select",
      `shivanya-select-${size}`,
      `shivanya-select-${error ? "error" : variant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={[
          "shivanya-select-field",
          fullWidth ? "shivanya-select-field-full" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {label && (
          <label htmlFor={id} className="shivanya-select-label">
            {label}

            {required && (
              <span aria-hidden="true" className="shivanya-select-required">
                {" "}
                *
              </span>
            )}
          </label>
        )}

        <div className="shivanya-select-control">
          <select
            {...props}
            ref={ref}
            id={id}
            className={selectClasses}
            required={required}
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            onMouseDown={(event) => {
              setOpen((current) => !current);
              props.onMouseDown?.(event);
            }}
            onChange={(event) => {
              setOpen(false);
              props.onChange?.(event);
            }}
            onBlur={(event) => {
              setOpen(false);
              props.onBlur?.(event);
            }}
          >
            {children ??
              options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
          </select>

          <span
            className={["shivanya-select-arrow", open ? "is-open" : ""]
              .filter(Boolean)
              .join(" ")}
            aria-hidden="true"
          />
        </div>

        {error ? (
          <p id={errorId} className="shivanya-select-error" role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p id={helpId} className="shivanya-select-help">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Select.displayName = "Select";

