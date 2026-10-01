"use client";
import {
  forwardRef,
  useEffect,
  useRef,
} from "react";

import type { OtpInputProps } from "./OtpInput.types";

export const OtpInput = forwardRef<
  HTMLInputElement,
  OtpInputProps
>(function OtpInput(
  {
    label,
    helperText,
    error,
    success,
    value = "",
    onChange,
    length = 4,
    size = "md",
    autoFocus,
    ...props
  },
  ref,
) {
  const refs = useRef<
    Array<HTMLInputElement | null>
  >([]);

  useEffect(() => {
    if (autoFocus) {
      refs.current[0]?.focus();
    }
  }, [autoFocus]);

  const updateValue = (digits: string[]) => {
    onChange?.(digits.join(""));
  };

  const handleChange = (
    index: number,
    inputValue: string,
  ) => {
    const digits = Array.from(
      { length },
      (_, position) => value[position] ?? "",
    );

    const clean = inputValue.replace(/\D/g, "");

    if (!clean) {
      digits[index] = "";
      updateValue(digits);
      return;
    }

    for (
      let position = 0;
      position < clean.length &&
      index + position < length;
      position += 1
    ) {
      digits[index + position] = clean[position];
    }

    updateValue(digits);

    refs.current[
      Math.min(index + clean.length, length - 1)
    ]?.focus();
  };

  const classes = [
    "shivanya-otp",
    `shivanya-otp-${size}`,
    error
      ? "is-error"
      : success
        ? "is-success"
        : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="shivanya-otp-field">
      {label && (
        <label>
          {label}
        </label>
      )}

      <div
        className={classes}
        role="group"
        aria-label={
          typeof label === "string"
            ? label
            : "One-time password"
        }
      >
        {Array.from({ length }, (_, index) => (
          <input
            {...props}
            key={index}
            ref={(element) => {
              refs.current[index] = element;

              if (
                index === 0 &&
                typeof ref === "function"
              ) {
                ref(element);
              }
            }}
            value={value[index] ?? ""}
            maxLength={1}
            inputMode="numeric"
            autoComplete={
              index === 0
                ? "one-time-code"
                : "off"
            }
            aria-label={`Digit ${
              index + 1
            } of ${length}`}
            onChange={(event) =>
              handleChange(
                index,
                event.target.value,
              )
            }
            onKeyDown={(event) => {
              if (
                event.key === "Backspace" &&
                !value[index] &&
                index > 0
              ) {
                refs.current[index - 1]?.focus();
              }

              if (event.key === "ArrowLeft") {
                refs.current[index - 1]?.focus();
              }

              if (event.key === "ArrowRight") {
                refs.current[index + 1]?.focus();
              }
            }}
            onPaste={(event) => {
              event.preventDefault();

              handleChange(
                index,
                event.clipboardData.getData("text"),
              );
            }}
            disabled={props.disabled}
          />
        ))}
      </div>

      {error ? (
        <p className="is-error" role="alert">
          {error}
        </p>
      ) : success ? (
        <p className="is-success">
          {success}
        </p>
      ) : helperText ? (
        <p>{helperText}</p>
      ) : null}
    </div>
  );
});

OtpInput.displayName = "OtpInput";
