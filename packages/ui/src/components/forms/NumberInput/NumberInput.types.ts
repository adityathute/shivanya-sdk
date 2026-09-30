import type { InputHTMLAttributes } from "react";

export type NumberInputSize =
  | "sm"
  | "md"
  | "lg";

export interface NumberInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "value"
    | "defaultValue"
    | "onChange"
    | "size"
  > {
  value?: number | "";
  defaultValue?: number | "";
  onChange?: (value: number | "") => void;
  min?: number;
  max?: number;
  step?: number;
  size?: NumberInputSize;
  prefix?: string;
  suffix?: string;
}