import { forwardRef } from "react";
import type { EmptyStateProps } from "./EmptyState.types";

export const EmptyState = forwardRef<
  HTMLDivElement,
  EmptyStateProps
>(function EmptyState(
  {
    image,
    imageAlt = "",
    icon,
    title,
    description,
    primaryAction,
    secondaryAction,
    footer,

    size = "md",
    variant = "default",
    align = "center",
    orientation = "vertical",

    radius = "md",
    imageFit = "contain",

    state = "default",
    disabled = false,

    contentClassName,
    children,
    className,
    ...props
  },
  ref,
) {
  const isDisabled =
    disabled || state === "disabled";

  const isLoading =
    state === "loading";

  const classes = [
    "shivanya-empty-state",
    `shivanya-empty-state-${size}`,
    `shivanya-empty-state-${variant}`,
    `shivanya-empty-state-align-${align}`,
    `shivanya-empty-state-${orientation}`,
    `shivanya-empty-state-radius-${radius}`,
    `shivanya-empty-state-image-${imageFit}`,

    isLoading
      ? "shivanya-empty-state-loading"
      : "",

    isDisabled
      ? "is-disabled"
      : "",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  const contentClasses = [
    "shivanya-empty-state-content",
    contentClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      {...props}
      className={classes}
      aria-busy={isLoading || undefined}
      aria-disabled={
        isDisabled || undefined
      }
    >
      {image && (
        <img
          className="shivanya-empty-state-image"
          src={image}
          alt={imageAlt}
          aria-hidden={
            imageAlt ? undefined : true
          }
        />
      )}

      {icon && (
        <div
          className="shivanya-empty-state-icon"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      <div className={contentClasses}>
        {title && (
          <div className="shivanya-empty-state-title">
            {title}
          </div>
        )}

        {description && (
          <div className="shivanya-empty-state-description">
            {description}
          </div>
        )}

        {children}

        {(primaryAction ||
          secondaryAction) && (
          <div className="shivanya-empty-state-actions">
            {primaryAction}
            {secondaryAction}
          </div>
        )}

        {footer && (
          <div className="shivanya-empty-state-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
});

EmptyState.displayName = "EmptyState";