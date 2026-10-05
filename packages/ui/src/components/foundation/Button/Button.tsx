import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import {
  BUTTON_DEFAULTS,
} from "./config";

import {
  getButtonClasses,
} from "./utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "link"
  | "dark"
  | "light"
  | "neutral"
  | "soft-primary"
  | "soft-secondary"
  | "soft-danger"
  | "soft-success"
  | "soft-warning"
  | "soft-info"
  | "outline-primary"
  | "outline-secondary"
  | "outline-danger"
  | "outline-success"
  | "outline-warning"
  | "outline-info";

export type ButtonSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type ButtonLoadingPosition =
  | "before"
  | "after";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingText?: ReactNode;
  loadingPosition?: ButtonLoadingPosition;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  rounded?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = BUTTON_DEFAULTS.variant,
  size = BUTTON_DEFAULTS.size,
  loading = false,
  loadingText,
  loadingPosition = BUTTON_DEFAULTS.loadingPosition,
  startIcon,
  endIcon,
  rounded = false,
  fullWidth = false,
  disabled = false,
  className = "",
  type = BUTTON_DEFAULTS.type,
  ...props
}: ButtonProps) {
  const classes = [
    ...getButtonClasses({
      variant,
      size,
      rounded,
      fullWidth,
      loading,
      disabled,
    }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const loadingIcon = (
    <span
      className="shivanya-button-spinner"
      aria-hidden="true"
    >
      <span className="shivanya-button-spinner-circle" />
    </span>
  );

  return (
    <button
      {...props}
      type={type}
      disabled={disabled || loading}
      className={classes}
      aria-disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading && loadingPosition === "before" && loadingIcon}

      {!loading && startIcon && (
        <span
          className="shivanya-button-icon"
          aria-hidden="true"
        >
          {startIcon}
        </span>
      )}

      <span className="shivanya-button-content">
        {loading ? loadingText ?? children : children}
      </span>

      {loading && loadingPosition === "after" && loadingIcon}

      {!loading && endIcon && (
        <span
          className="shivanya-button-icon"
          aria-hidden="true"
        >
          {endIcon}
        </span>
      )}
    </button>
  );
}