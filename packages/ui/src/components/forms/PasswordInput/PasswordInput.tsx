"use client";
import { forwardRef, useId, useState } from "react";
import type { PasswordInputProps } from "./PasswordInput.types";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    {
      id: providedId,
      label,
      helperText,
      error,
      success,
      warning,
      size = "md",
      fullWidth = false,
      revealable = true,
      visible = false,
      className,
      required,
      disabled,
      readOnly,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const id = providedId ?? generatedId;

    const [shown, setShown] = useState(visible);

    const message = error ?? success ?? warning ?? helperText;

    const messageId = `${id}-message`;

    const messageClass = error
      ? "is-error"
      : success
        ? "is-success"
        : warning
          ? "is-warning"
          : "";

    const inputClasses = [
      "shivanya-password",
      `shivanya-password-${size}`,
      messageClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={[
          "shivanya-password-field",
          fullWidth ? "shivanya-password-field-full" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {label && (
          <label htmlFor={id}>
            {label}

            {required && (
              <span className="shivanya-password-required" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className={inputClasses}>
          <input
            {...props}
            ref={ref}
            id={id}
            type={shown ? "text" : "password"}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={error ? true : undefined}
            aria-describedby={message ? messageId : undefined}
          />

          {revealable && (
            <button
              type="button"
              onClick={() => setShown((current) => !current)}
              disabled={disabled || readOnly}
              aria-label={shown ? "Hide password" : "Show password"}
              aria-pressed={shown}
            >
              {shown ? "Hide" : "Show"}
            </button>
          )}
        </div>

        {message && (
          <p
            id={messageId}
            className={messageClass}
            role={error ? "alert" : undefined}
          >
            {message}
          </p>
        )}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
