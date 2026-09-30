import type { HTMLAttributes, ReactNode } from "react";

export type EmptyStateSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type EmptyStateVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type EmptyStateAlign =
  | "left"
  | "center"
  | "right";

export type EmptyStateOrientation =
  | "vertical"
  | "horizontal";

export type EmptyStateRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "full";

export type EmptyStateState =
  | "default"
  | "loading"
  | "disabled";

export type EmptyStateImageFit =
  | "contain"
  | "cover";

export interface EmptyStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  imageAlt?: string;

  icon?: ReactNode;

  title?: ReactNode;
  description?: ReactNode;

  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;

  footer?: ReactNode;

  size?: EmptyStateSize;
  variant?: EmptyStateVariant;
  align?: EmptyStateAlign;
  orientation?: EmptyStateOrientation;

  radius?: EmptyStateRadius;
  imageFit?: EmptyStateImageFit;

  state?: EmptyStateState;
  disabled?: boolean;

  contentClassName?: string;

  children?: ReactNode;
}