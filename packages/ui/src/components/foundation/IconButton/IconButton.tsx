import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

import {
  ICON_BUTTON_DEFAULTS,
} from "./config";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "ghost" | "outline" | "solid";
  rounded?: boolean;
  iconRotateOnHover?: boolean;
  iconHoverColor?: string;
}

export function IconButton({
  children,
  size = ICON_BUTTON_DEFAULTS.size,
  variant = ICON_BUTTON_DEFAULTS.variant,
  rounded = ICON_BUTTON_DEFAULTS.rounded,
  iconRotateOnHover = ICON_BUTTON_DEFAULTS.iconRotateOnHover,
  iconHoverColor = ICON_BUTTON_DEFAULTS.iconHoverColor,
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  const classes = [
    "shivanya-icon-button",
    `shivanya-icon-button-${size}`,
    `shivanya-icon-button-${variant}`,
    rounded ? "shivanya-icon-button-rounded" : "",
    iconRotateOnHover
      ? "shivanya-icon-button-rotate"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      type={type}
      className={classes}
      style={{
        "--shivanya-icon-button-hover-color":
          iconHoverColor,
        ...props.style,
      } as CSSProperties}
    >
      <span className="shivanya-icon-button-icon">
        {children}
      </span>
    </button>
  );
}