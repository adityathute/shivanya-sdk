import {
  forwardRef,
  useId,
} from "react";

import type {
  InputProps,
} from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label,
      helperText,
      error,
      success,
      warning,

      leftIcon,
      rightIcon,

      prefix,
      suffix,

      startAddon,
      endAddon,

      loading = false,
      showCounter = false,

      size = "md",

      disabled = false,
      readOnly = false,
      required = false,

      rounded = false,
      fullWidth = false,

      className = "",
      id,
      maxLength,

      value,
      defaultValue,

      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const inputId = id ?? `shivanya-input-${generatedId}`;

    const helperId = `${inputId}-helper`;

    const currentVariant = error
      ? "error"
      : success
        ? "success"
        : warning
          ? "warning"
          : "default";

    const currentLength =
      typeof value === "string"
        ? value.length
        : typeof defaultValue === "string"
          ? defaultValue.length
          : 0;

    const containerClasses = [
      "shivanya-input-container",
      `shivanya-input-${size}`,
      `shivanya-input-${currentVariant}`,
      rounded
        ? "shivanya-input-rounded"
        : "",
      fullWidth
        ? "shivanya-input-full"
        : "",
      loading
        ? "shivanya-input-loading"
        : "",
      disabled
        ? "shivanya-input-disabled"
        : "",
    ]
      .filter(Boolean)
      .join(" ");

    const inputClasses = [
      "shivanya-input",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={[
          "shivanya-input-wrapper",
          fullWidth
            ? "shivanya-input-wrapper-full"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="shivanya-input-label"
          >
            {label}

            {required && (
              <span
                className="shivanya-input-required"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <div className={containerClasses}>
          {startAddon && (
            <span className="shivanya-input-addon">
              {startAddon}
            </span>
          )}

          {leftIcon && (
            <span
              className="shivanya-input-icon"
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}

          {prefix && (
            <span className="shivanya-input-prefix">
              {prefix}
            </span>
          )}

          <input
            {...props}
            ref={ref}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            maxLength={maxLength}
            disabled={disabled || loading}
            readOnly={readOnly}
            className={inputClasses}
            aria-invalid={error ? true : undefined}
            aria-describedby={
              error ||
              success ||
              warning ||
              helperText
                ? helperId
                : undefined
            }
            aria-busy={
              loading
                ? true
                : undefined
            }
          />

          {suffix && (
            <span className="shivanya-input-suffix">
              {suffix}
            </span>
          )}

          {rightIcon && (
            <span
              className="shivanya-input-icon"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}

          {endAddon && (
            <span className="shivanya-input-addon">
              {endAddon}
            </span>
          )}
        </div>

        {error ? (
          <p
            id={helperId}
            className="shivanya-input-message shivanya-input-error-text"
          >
            {error}
          </p>
        ) : success ? (
          <p
            id={helperId}
            className="shivanya-input-message shivanya-input-success-text"
          >
            {success}
          </p>
        ) : warning ? (
          <p
            id={helperId}
            className="shivanya-input-message shivanya-input-warning-text"
          >
            {warning}
          </p>
        ) : helperText ? (
          <p
            id={helperId}
            className="shivanya-input-message shivanya-input-helper"
          >
            {helperText}
          </p>
        ) : null}

        {showCounter && maxLength !== undefined && (
          <div className="shivanya-input-counter">
            {currentLength}/{maxLength}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };