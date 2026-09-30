import { cloneElement, useId } from "react";
import type { ReactElement } from "react";
import type { FormFieldProps } from "./FormField.types";

export function FormField({
  label,
  description,
  error,
  required,
  disabled,
  children,
  size = "md",
  className,
  ...props
}: FormFieldProps) {
  const generated = useId();

  const child = children as ReactElement<Record<string, unknown>>;
  const childProps = child.props;

  const id =
    typeof childProps.id === "string"
      ? childProps.id
      : generated;

  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;

  const describedBy = [
    description && !error ? descriptionId : "",
    error ? errorId : "",
    typeof childProps["aria-describedby"] === "string"
      ? childProps["aria-describedby"]
      : "",
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const control = cloneElement(child, {
    id,
    required: childProps.required ?? required,
    disabled: childProps.disabled ?? disabled,
    "aria-invalid": error
      ? true
      : childProps["aria-invalid"],
    "aria-describedby": describedBy,
  });

  return (
    <div
      {...props}
      className={[
        "shivanya-form-field",
        `shivanya-form-field-${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label htmlFor={id}>
          {label}
          {required && (
            <span aria-hidden="true"> *</span>
          )}
        </label>
      )}

      {control}

      {description && !error && (
        <p id={descriptionId}>
          {description}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          className="is-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}