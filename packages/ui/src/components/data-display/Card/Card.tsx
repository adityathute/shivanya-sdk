import { forwardRef } from "react";
import type { CardProps } from "./Card.types";

export const Card = forwardRef<HTMLElement, CardProps>(function Card(
  {
    as = "div",
    variant = "elevated",
    padding = "md",
    radius = "md",
    shadow = "md",
    bordered = false,
    hoverable = false,
    clickable = false,
    disabled = false,
    loading = false,
    selected = false,
    fullWidth = false,
    header,
    media,
    footer,
    actions,
    headerAlign = "start",
    footerAlign = "end",
    actionsAlign = "end",
    mediaPosition = "top",
    mediaRatio = "16/9",
    divider = false,
    children,
    className,
    ...props
  },
  ref,
) {
  const Tag = as;

  const cardClassName = [
    "shivanya-card",
    `shivanya-card-${variant}`,
    `shivanya-card-padding-${padding}`,
    `shivanya-card-radius-${radius}`,
    `shivanya-card-shadow-${shadow}`,
    `shivanya-card-header-${headerAlign}`,
    `shivanya-card-footer-${footerAlign}`,
    `shivanya-card-actions-${actionsAlign}`,
    `shivanya-card-media-${mediaPosition}`,
    `shivanya-card-media-ratio-${mediaRatio.replace("/", "-")}`,
    bordered ? "is-bordered" : "",
    hoverable ? "is-hoverable" : "",
    clickable ? "is-clickable" : "",
    disabled ? "is-disabled" : "",
    loading ? "is-loading" : "",
    selected ? "is-selected" : "",
    fullWidth ? "is-full" : "",
    divider ? "has-divider" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mediaContent = media ? (
    <div className="shivanya-card-media">
      {media}
    </div>
  ) : null;

  return (
    <Tag
      ref={ref as never}
      {...props}
      className={cardClassName}
      aria-disabled={disabled || undefined}
      aria-busy={loading || undefined}
    >
      {mediaPosition === "top" && mediaContent}

      {header && (
        <div className="shivanya-card-header">
          {header}
        </div>
      )}

      <div className="shivanya-card-body">
        {children}
      </div>

      {actions && (
        <div className="shivanya-card-actions">
          {actions}
        </div>
      )}

      {footer && (
        <div className="shivanya-card-footer">
          {footer}
        </div>
      )}

      {mediaPosition === "bottom" && mediaContent}
    </Tag>
  );
});

Card.displayName = "Card";