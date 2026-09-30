import { forwardRef, useState } from "react";
import type { NumberInputProps } from "./NumberInput.types";

export const NumberInput = forwardRef<
  HTMLInputElement,
  NumberInputProps
>(function NumberInput(
  {
    value,
    defaultValue = "",
    onChange,
    min = -Infinity,
    max = Infinity,
    step = 1,
    size = "md",
    prefix,
    suffix,
    className,
    disabled,
    readOnly,
    ...props
  },
  ref,
) {
  const [internalValue, setInternalValue] = useState<
    number | ""
  >(defaultValue);

  const controlled = value !== undefined;
  const currentValue = controlled
    ? value
    : internalValue;

  const clamp = (number: number) =>
    Math.min(Math.max(number, min), max);

  const updateValue = (nextValue: number | "") => {
    if (nextValue === "") {
      if (!controlled) {
        setInternalValue("");
      }

      onChange?.("");
      return;
    }

    const next = clamp(nextValue);

    if (!controlled) {
      setInternalValue(next);
    }

    onChange?.(next);
  };

  const handleInputChange = (nextValue: string) => {
    if (nextValue === "") {
      updateValue("");
      return;
    }

    const next = Number(nextValue);

    if (Number.isFinite(next)) {
      updateValue(next);
    }
  };

  const increase = () => {
    const current =
      currentValue === "" ? 0 : currentValue;

    updateValue(current + step);
  };

  const decrease = () => {
    const current =
      currentValue === "" ? 0 : currentValue;

    updateValue(current - step);
  };

  return (
    <div
      className={[
        "shivanya-number-input",
        `shivanya-number-input-${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shivanya-number-main">
        {prefix && (
          <span className="shivanya-number-prefix">
            {prefix}
          </span>
        )}

        <input
          {...props}
          ref={ref}
          type="number"
          value={currentValue}
          min={min === -Infinity ? undefined : min}
          max={max === Infinity ? undefined : max}
          step={step}
          disabled={disabled}
          readOnly={readOnly}
          onChange={(event) =>
            handleInputChange(event.target.value)
          }
        />

        {suffix && (
          <span className="shivanya-number-suffix">
            {suffix}
          </span>
        )}
      </div>

      <div className="shivanya-number-actions">
        <button
          type="button"
          onClick={increase}
          disabled={disabled || readOnly}
          aria-label="Increase"
        >
          +
        </button>

        <button
          type="button"
          onClick={decrease}
          disabled={disabled || readOnly}
          aria-label="Decrease"
        >
          −
        </button>
      </div>
    </div>
  );
});

NumberInput.displayName = "NumberInput";