import type { InputHTMLAttributes } from "react";

export type DatePickerSize = "sm" | "md" | "lg";

export type DatePickerRadius = "sm" | "md" | "lg" | "full";

export interface DatePickerProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type" | "value" | "defaultValue" | "onChange" | "size"
    > {
    value?: Date | null;
    defaultValue?: Date | null;
    onChange?: (date: Date | null) => void;
    size?: DatePickerSize;
    radius?: DatePickerRadius;
    fullWidth?: boolean;
    minDate?: Date | null;
    maxDate?: Date | null;
    clearable?: boolean;
}