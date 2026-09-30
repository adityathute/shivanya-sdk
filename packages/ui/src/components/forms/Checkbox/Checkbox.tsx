import { forwardRef, useId } from "react";
import type { CheckboxProps } from "./Checkbox.types";
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
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
    const generated = useId();
    const id = providedId ?? generated;
    return (
      <label
        className={[
          "shivanya-checkbox",
          `shivanya-checkbox-${size}`,
          `shivanya-checkbox-${error ? "error" : variant}`,
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
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={
            [description ? `${id}-description` : "", error ? `${id}-error` : ""]
              .filter(Boolean)
              .join(" ") || undefined
          }
        />
        <span className="shivanya-checkbox-box" aria-hidden="true">
          ✓
        </span>
        {(label || description || error) && (
          <span className="shivanya-checkbox-content">
            {label && <span className="shivanya-checkbox-label">{label}</span>}
            {description && (
              <span
                id={`${id}-description`}
                className="shivanya-checkbox-description"
              >
                {description}
              </span>
            )}
            {error && (
              <span
                id={`${id}-error`}
                className="shivanya-checkbox-error"
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
Checkbox.displayName = "Checkbox";
