import type { ReactNode } from "react";

import {
  ICON_DEFAULTS,
} from "./config";

import {
  getIconColor,
  getIconSize,
} from "./utils";

import type {
  IconProps,
} from "./types";

export interface IconBaseProps extends IconProps {
  children: ReactNode;
}

export function IconBase({
  children,
  size = ICON_DEFAULTS.size,
  color = ICON_DEFAULTS.color,
  decorative = ICON_DEFAULTS.decorative,
  className = "",
  style,
  ...props
}: IconBaseProps) {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color);

  const classes = [
    "shivanya-icon",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      {...props}
      className={classes}
      width={resolvedSize}
      height={resolvedSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        color: resolvedColor,
        ...style,
      }}
      aria-hidden={decorative || undefined}
      focusable={decorative ? "false" : undefined}
    >
      {children}
    </svg>
  );
}