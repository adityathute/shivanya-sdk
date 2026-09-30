import type { InputHTMLAttributes } from "react";

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export type DateRangePickerSize = "sm" | "md" | "lg";

export type DateRangePickerRadius = "sm" | "md" | "lg" | "full";

export interface DateRangePickerProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "defaultValue" | "onChange" | "size"
  > {
  value?: DateRange | null;
  defaultValue?: DateRange | null;
  onChange?: (range: DateRange) => void;
  size?: DateRangePickerSize;
  radius?: DateRangePickerRadius;
  fullWidth?: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
  clearable?: boolean;
}