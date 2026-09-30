import type {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";

export type ChipSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type ChipVariant =
  | "filled"
  | "outlined"
  | "soft"
  | "ghost";

export type ChipColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type ChipRadius =
  | "sm"
  | "md"
  | "lg"
  | "full";

export interface ChipProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "color" | "onClick" | "onKeyDown"
  > {
  as?: "div" | "span" | "button";

  size?: ChipSize;
  variant?: ChipVariant;
  color?: ChipColor;
  radius?: ChipRadius;

  icon?: ReactNode;
  avatar?: ReactNode;
  endIcon?: ReactNode;
  closeIcon?: ReactNode;

  closable?: boolean;
  onClose?: () => void;

  clickable?: boolean;
  selectable?: boolean;
  selected?: boolean;

  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;

  onClick?: (
    event: MouseEvent<HTMLElement>,
  ) => void;

  onKeyDown?: (
    event: KeyboardEvent<HTMLElement>,
  ) => void;

  children?: ReactNode;
}