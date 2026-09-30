import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type AvatarSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type AvatarVariant =
  | "filled"
  | "outlined"
  | "ghost";

export type AvatarRadius =
  | "sm"
  | "md"
  | "lg"
  | "full";

export type AvatarColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type AvatarStatus =
  | "none"
  | "online"
  | "offline"
  | "busy"
  | "away";

export interface AvatarProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "color"
  > {
  src?: string;
  alt?: string;
  name?: string;
  initials?: string;
  icon?: ReactNode;

  size?: AvatarSize;
  variant?: AvatarVariant;
  radius?: AvatarRadius;
  color?: AvatarColor;

  status?: AvatarStatus;

  bordered?: boolean;
  disabled?: boolean;
  loading?: boolean;

  clickable?: boolean;
  selectable?: boolean;
  selected?: boolean;

  onSelectChange?: (
    selected: boolean,
  ) => void;
}