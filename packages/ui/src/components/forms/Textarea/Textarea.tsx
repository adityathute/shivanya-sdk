"use client";
import { forwardRef, useId, useState } from "react";

import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(function Textarea(
  {
    id: providedId,
    label,
    helperText,
    error,
    size = "md",
    variant = "default",
    fullWidth = false,
    showCount = false,
    maxLength,
    className,
    value,
    defaultValue,
    required,
    disabled,
    onChange,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  const [internalValue, setInternalValue] =
    useState(String(defaultValue ?? ""));

  const controlled = value !== undefined;

  const currentValue = controlled
    ? String(value ?? "")
    : internalValue;

  const helpId = helperText
    ? `${id}-help`
    : undefined;

  const errorId = error
    ? `${id}-error`
    : undefined;

  const countId = showCount
    ? `${id}-count`
    : undefined;

  const describedBy = [
    error ? errorId : "",
    !error && helperText ? helpId : "",
    showCount ? countId : "",
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const textareaClasses = [
    "shivanya-textarea",
    `shivanya-textarea-${size}`,
    `shivanya-textarea-${error ? "error" : variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={[
        "shivanya-textarea-field",
        fullWidth
          ? "shivanya-textarea-field-full"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label
          htmlFor={id}
          className="shivanya-textarea-label"
        >
          {label}

          {required && (
            <span
              aria-hidden="true"
              className="shivanya-textarea-required"
            >
              {" "}*
            </span>
          )}
        </label>
      )}

      <textarea
        {...props}
        ref={ref}
        id={id}
        value={controlled ? value : internalValue}
        defaultValue={controlled ? undefined : defaultValue}
        maxLength={maxLength}
        required={required}
        disabled={disabled}
        className={textareaClasses}
        aria-invalid={
          error ? true : undefined
        }
        aria-describedby={describedBy}
        onChange={(event) => {
          if (!controlled) {
            setInternalValue(event.target.value);
          }

          onChange?.(event);
        }}
      />

      {error ? (
        <p
          id={errorId}
          className="shivanya-textarea-error"
          role="alert"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={helpId}
          className="shivanya-textarea-help"
        >
          {helperText}
        </p>
      ) : null}

      {showCount && maxLength !== undefined && (
        <p
          id={countId}
          className="shivanya-textarea-count"
          aria-live="polite"
        >
          {currentValue.length}/{maxLength}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";
