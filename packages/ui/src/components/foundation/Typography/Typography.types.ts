import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "bodySmall"
  | "bodyXSmall"
  | "caption"
  | "overline";

export type TypographySize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "hero";

export type TypographyAlign =
  | "left"
  | "center"
  | "right"
  | "justify";

export type TypographyWeight =
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "muted"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "inherit";

export type TypographyTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize";

export type TypographyElement =
  | "span"
  | "p"
  | "div"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  children?: ReactNode;
  as?: TypographyElement;
  variant?: TypographyVariant;
  size?: TypographySize;
  align?: TypographyAlign;
  weight?: TypographyWeight;
  color?: TypographyColor;
  transform?: TypographyTransform;
}