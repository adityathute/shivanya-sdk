import type { SVGProps } from "react";

export type IconSize =
  | number
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type IconColor =
  | "current"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "muted"
  | "white"
  | "black"
  | (string & {});

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, "color" | "children"> {
  size?: IconSize;
  color?: IconColor;
  decorative?: boolean;
}