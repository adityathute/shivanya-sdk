import { forwardRef, useState } from "react";
import type { DatePickerProps } from "./DatePicker.types";
import { CloseIcon } from "../../../icons";

const formatDate = (date: Date | null | undefined) => {
  if (!date) {
    return "";
  }

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
};

const parseDate = (value: string): Date | null => {
  if (!value) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
};

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  function DatePicker(
    {
      value,
      defaultValue = null,
      onChange,
      size = "md",
      radius = "md",
      fullWidth = false,
      minDate,
      maxDate,
      clearable = false,
      disabled = false,
      ...props
    },
    ref,
  ) {
    const [internalValue, setInternalValue] = useState<Date | null>(
      defaultValue,
    );

    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;

    const handleChange = (nextValue: string) => {
      const nextDate = parseDate(nextValue);

      if (!controlled) {
        setInternalValue(nextDate);
      }

      onChange?.(nextDate);
    };

    const handleClear = () => {
      if (!controlled) {
        setInternalValue(null);
      }

      onChange?.(null);
    };

    return (
      <div
        className={[
          "shivanya-date-picker",
          `shivanya-date-picker-${size}`,
          `shivanya-date-picker-radius-${radius}`,
          fullWidth ? "is-full" : "",
          disabled ? "is-disabled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          {...props}
          ref={ref}
          type="date"
          value={formatDate(currentValue)}
          min={formatDate(minDate)}
          max={formatDate(maxDate)}
          disabled={disabled}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />

        {clearable && currentValue && !disabled && (
          <button
            type="button"
            className="shivanya-date-picker-clear"
            onClick={handleClear}
            aria-label="Clear date"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  },
);

DatePicker.displayName = "DatePicker";
