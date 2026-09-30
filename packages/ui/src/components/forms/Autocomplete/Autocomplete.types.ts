import type { ChangeEventHandler, InputHTMLAttributes } from "react";

export type AutocompleteSize = "sm" | "md" | "lg";

export interface AutocompleteProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  data?: string[];
  size?: AutocompleteSize;
  fullWidth?: boolean;
  clearable?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSelectOption?: (value: string) => void;
}
