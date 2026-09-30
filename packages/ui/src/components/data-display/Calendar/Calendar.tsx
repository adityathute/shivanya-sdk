import {
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import type {
  CalendarProps,
  CalendarRange,
} from "./Calendar.types";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const sameDay = (
  a: Date | null | undefined,
  b: Date | null | undefined,
): boolean =>
  !!a &&
  !!b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const startOfDay = (date: Date): Date =>
  new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

const dayKey = (date: Date): string =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const isBefore = (date: Date, minDate?: Date): boolean =>
  !!minDate && startOfDay(date) < startOfDay(minDate);

const isAfter = (date: Date, maxDate?: Date): boolean =>
  !!maxDate && startOfDay(date) > startOfDay(maxDate);

const isOutsideBounds = (
  date: Date,
  minDate?: Date,
  maxDate?: Date,
): boolean =>
  isBefore(date, minDate) || isAfter(date, maxDate);

interface CalendarCell {
  date: Date;
  outside: boolean;
}

function createCalendarGrid(
  month: number,
  year: number,
  firstDayOfWeek: number,
): CalendarCell[] {
  const firstDay =
    (new Date(year, month, 1).getDay() -
      firstDayOfWeek +
      7) %
    7;

  const daysInMonth =
    new Date(year, month + 1, 0).getDate();

  const previousMonthDays =
    new Date(year, month, 0).getDate();

  const cells: CalendarCell[] = [];

  for (let index = 0; index < 42; index += 1) {
    let date: Date;
    let outside = false;

    if (index < firstDay) {
      const day =
        previousMonthDays - firstDay + index + 1;

      date = new Date(year, month - 1, day);
      outside = true;
    } else if (
      index >= firstDay + daysInMonth
    ) {
      const day =
        index - firstDay - daysInMonth + 1;

      date = new Date(year, month + 1, day);
      outside = true;
    } else {
      const day = index - firstDay + 1;

      date = new Date(year, month, day);
    }

    cells.push({
      date,
      outside,
    });
  }

  return cells;
}

export const Calendar = forwardRef<
  HTMLDivElement,
  CalendarProps
>(function Calendar(
  {
    mode = "single",
    value,
    defaultValue,
    minDate,
    maxDate,
    firstDayOfWeek = 0,
    showOutsideDays = true,
    showWeekNumbers = false,
    disabled = false,
    readOnly = false,
    size = "md",
    fullWidth = false,
    onChange,
    className,
    ...props
  },
  ref,
) {
  const initialValue =
    value ?? defaultValue ?? new Date();

  const initialDate =
    initialValue instanceof Date
      ? initialValue
      : initialValue?.start instanceof Date
        ? initialValue.start
        : new Date();

  const [viewDate, setViewDate] = useState(
    new Date(
      initialDate.getFullYear(),
      initialDate.getMonth(),
      1,
    ),
  );

  const [internalValue, setInternalValue] =
    useState<
      Date | CalendarRange | null
    >(defaultValue ?? null);

  const selected =
    value !== undefined
      ? value
      : internalValue;

  const [view, setView] = useState<
    "days" | "months" | "years"
  >("days");

  const [yearPage, setYearPage] = useState(
    Math.floor(initialDate.getFullYear() / 12) * 12,
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const cells = useMemo(
    () =>
      createCalendarGrid(
        viewDate.getMonth(),
        viewDate.getFullYear(),
        firstDayOfWeek,
      ),
    [
      viewDate,
      firstDayOfWeek,
    ],
  );

  const range =
    selected &&
    !(selected instanceof Date)
      ? selected
      : null;

  const updateValue = (
    next: Date | CalendarRange | null,
  ) => {
    if (value === undefined) {
      setInternalValue(next);
    }

    onChange?.(next);
  };

  const selectDate = (date: Date) => {
    if (
      disabled ||
      readOnly ||
      isOutsideBounds(
        date,
        minDate,
        maxDate,
      )
    ) {
      return;
    }

    if (mode === "single") {
      updateValue(date);
      return;
    }

    if (!range?.start || range.end) {
      updateValue({
        start: date,
        end: null,
      });

      return;
    }

    if (date < range.start) {
      updateValue({
        start: date,
        end: range.start,
      });

      return;
    }

    updateValue({
      start: range.start,
      end: date,
    });
  };

  const previous = () => {
    if (disabled || readOnly) {
      return;
    }

    if (view === "days") {
      setViewDate(
        (current) =>
          new Date(
            current.getFullYear(),
            current.getMonth() - 1,
            1,
          ),
      );

      return;
    }

    if (view === "months") {
      setViewDate(
        (current) =>
          new Date(
            current.getFullYear() - 1,
            current.getMonth(),
            1,
          ),
      );

      return;
    }

    setYearPage(
      (current) => current - 12,
    );
  };

  const next = () => {
    if (disabled || readOnly) {
      return;
    }

    if (view === "days") {
      setViewDate(
        (current) =>
          new Date(
            current.getFullYear(),
            current.getMonth() + 1,
            1,
          ),
      );

      return;
    }

    if (view === "months") {
      setViewDate(
        (current) =>
          new Date(
            current.getFullYear() + 1,
            current.getMonth(),
            1,
          ),
      );

      return;
    }

    setYearPage(
      (current) => current + 12,
    );
  };

  const toggleView = () => {
    if (disabled || readOnly) {
      return;
    }

    setView((current) =>
      current === "days"
        ? "months"
        : current === "months"
          ? "years"
          : "days",
    );
  };

  const title =
    view === "days"
      ? `${months[viewDate.getMonth()]} ${viewDate.getFullYear()}`
      : view === "months"
        ? String(viewDate.getFullYear())
        : `${yearPage} - ${yearPage + 11}`;

  return (
    <div
      ref={ref}
      {...props}
      className={[
        "shivanya-calendar",
        `shivanya-calendar-${size}`,
        fullWidth ? "is-full" : "",
        disabled ? "is-disabled" : "",
        readOnly ? "is-readonly" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shivanya-calendar-header">
        <button
          type="button"
          onClick={previous}
          disabled={disabled || readOnly}
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          type="button"
          className="shivanya-calendar-title"
          onClick={toggleView}
          disabled={disabled || readOnly}
          aria-label="Change calendar view"
        >
          {title}
        </button>

        <button
          type="button"
          onClick={next}
          disabled={disabled || readOnly}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {view === "days" && (
        <>
          <div className="shivanya-calendar-weekdays">
            {Array.from(
              { length: 7 },
              (_, index) => (
                <span key={index}>
                  {
                    weekdays[
                      (firstDayOfWeek + index) % 7
                    ]
                  }
                </span>
              ),
            )}
          </div>

          <div className="shivanya-calendar-grid">
            {cells.map(
              ({ date, outside }) => {
                const selectedDay =
                  mode === "single" &&
                  sameDay(
                    date,
                    selected instanceof Date
                      ? selected
                      : null,
                  );

                const rangeStart =
                  mode === "range" &&
                  sameDay(
                    date,
                    range?.start,
                  );

                const rangeEnd =
                  mode === "range" &&
                  sameDay(
                    date,
                    range?.end,
                  );

                const inRange =
                  mode === "range" &&
                  !!range?.start &&
                  !!range?.end &&
                  date > range.start &&
                  date < range.end;

                const isDisabled =
                  disabled ||
                  readOnly ||
                  isOutsideBounds(
                    date,
                    minDate,
                    maxDate,
                  );

                return (
                  <button
                    key={dayKey(date)}
                    type="button"
                    disabled={isDisabled}
                    onClick={() =>
                      selectDate(date)
                    }
                    aria-pressed={
                      selectedDay ||
                      rangeStart ||
                      rangeEnd
                    }
                    className={[
                      "shivanya-calendar-day",
                      outside
                        ? "is-outside"
                        : "",
                      !showOutsideDays &&
                      outside
                        ? "is-hidden"
                        : "",
                      sameDay(
                        date,
                        new Date(),
                      )
                        ? "is-today"
                        : "",
                      selectedDay
                        ? "is-selected"
                        : "",
                      rangeStart
                        ? "is-selected is-range-start"
                        : "",
                      rangeEnd
                        ? "is-selected is-range-end"
                        : "",
                      inRange
                        ? "is-in-range"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {date.getDate()}
                  </button>
                );
              },
            )}
          </div>
        </>
      )}

      {view === "months" && (
        <div className="shivanya-calendar-picker-grid">
          {months.map(
            (month, index) => (
              <button
                key={month}
                type="button"
                disabled={disabled || readOnly}
                onClick={() => {
                  setViewDate(
                    new Date(
                      viewDate.getFullYear(),
                      index,
                      1,
                    ),
                  );
                  setView("days");
                }}
                className={
                  index ===
                  viewDate.getMonth()
                    ? "is-selected"
                    : ""
                }
              >
                {month.slice(0, 3)}
              </button>
            ),
          )}
        </div>
      )}

      {view === "years" && (
        <div className="shivanya-calendar-picker-grid">
          {Array.from(
            { length: 12 },
            (_, index) =>
              yearPage + index,
          ).map((year) => (
            <button
              key={year}
              type="button"
              disabled={disabled || readOnly}
              onClick={() => {
                setViewDate(
                  new Date(
                    year,
                    viewDate.getMonth(),
                    1,
                  ),
                );

                setView("months");
              }}
              className={
                year ===
                viewDate.getFullYear()
                  ? "is-selected"
                  : ""
              }
            >
              {year}
            </button>
          ))}
        </div>
      )}

      {showWeekNumbers && (
        <span hidden>
          Week numbers are reserved for compatibility.
        </span>
      )}
    </div>
  );
});

Calendar.displayName = "Calendar";