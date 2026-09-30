import type { HTMLAttributes } from "react";

export type CalendarMode = "single" | "range";

export type CalendarSize = "sm" | "md" | "lg";

export interface CalendarRange {
  start: Date | null;
  end: Date | null;
}

export interface CalendarProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "defaultValue" | "value" | "onChange"
  > {
  mode?: CalendarMode;

  value?: Date | CalendarRange | null;

  defaultValue?: Date | CalendarRange | null;

  month?: number;

  year?: number;

  minDate?: Date;

  maxDate?: Date;

  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  showOutsideDays?: boolean;

  showWeekNumbers?: boolean;

  disabled?: boolean;

  readOnly?: boolean;

  size?: CalendarSize;

  fullWidth?: boolean;

  onChange?: (
    value: Date | CalendarRange | null,
  ) => void;
}