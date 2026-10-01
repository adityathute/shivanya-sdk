"use client";
import { forwardRef, useState } from "react";
import { CloseIcon } from "../../../icons";
import type {
  DateRange,
  DateRangePickerProps,
} from "./DateRangePicker.types";

const emptyRange: DateRange = {
  start: null,
  end: null,
};

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

export const DateRangePicker = forwardRef<
  HTMLInputElement,
  DateRangePickerProps
>(function DateRangePicker(
  {
    value,
    defaultValue = emptyRange,
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
  const [internalValue, setInternalValue] = useState<DateRange>(
    defaultValue ?? emptyRange,
  );

  const controlled = value !== undefined;

  const currentValue = controlled
    ? value ?? emptyRange
    : internalValue;

  const update = (
    part: "start" | "end",
    valueString: string,
  ) => {
    const nextDate = parseDate(valueString);

    const next: DateRange = {
      ...currentValue,
      [part]: nextDate,
    };

    if (next.start && next.end && next.end < next.start) {
      if (part === "start") {
        next.end = next.start;
      } else {
        next.start = next.end;
      }
    }

    if (!controlled) {
      setInternalValue(next);
    }

    onChange?.(next);
  };

  const clear = () => {
    const next: DateRange = {
      start: null,
      end: null,
    };

    if (!controlled) {
      setInternalValue(next);
    }

    onChange?.(next);
  };

  return (
    <div
      className={[
        "shivanya-date-range",
        `shivanya-date-range-${size}`,
        `shivanya-date-range-radius-${radius}`,
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
        value={formatDate(currentValue.start)}
        min={formatDate(minDate)}
        max={formatDate(currentValue.end ?? maxDate)}
        aria-label="Start date"
        disabled={disabled}
        onChange={(event) => {
          update("start", event.target.value);
        }}
      />

      <span aria-hidden="true">—</span>

      <input
        type="date"
        value={formatDate(currentValue.end)}
        min={formatDate(currentValue.start ?? minDate)}
        max={formatDate(maxDate)}
        aria-label="End date"
        disabled={disabled}
        onChange={(event) => {
          update("end", event.target.value);
        }}
      />

      {clearable &&
        (currentValue.start || currentValue.end) &&
        !disabled && (
          <button
            type="button"
            className="shivanya-date-range-clear"
            onClick={clear}
            aria-label="Clear date range"
          >
            <CloseIcon />
          </button>
        )}
    </div>
  );
});

DateRangePicker.displayName = "DateRangePicker";
