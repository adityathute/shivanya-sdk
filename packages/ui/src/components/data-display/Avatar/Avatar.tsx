"use client";

import {
  forwardRef,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type Ref,
} from "react";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = forwardRef<HTMLElement, AvatarProps>(
  function Avatar(
    {
      src,
      alt = "",
      name,
      initials,
      icon,
      size = "md",
      variant = "filled",
      radius = "full",
      color = "primary",
      status = "none",
      bordered = false,
      disabled = false,
      loading = false,
      clickable = false,
      selectable = false,
      selected = false,
      onSelectChange,
      className,
      children,
      onClick,
      ...props
    },
    ref,
  ) {
    const computedInitials =
      initials ||
      name
        ?.trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("") ||
      "";

    const classes = [
      "shivanya-avatar",
      `shivanya-avatar-${size}`,
      `shivanya-avatar-${variant}`,
      `shivanya-avatar-radius-${radius}`,
      `shivanya-avatar-${color}`,
      status !== "none" ? `shivanya-avatar-status-${status}` : "",
      bordered ? "is-bordered" : "",
      disabled ? "is-disabled" : "",
      loading ? "is-loading" : "",
      selectable ? "is-selectable" : "",
      selected ? "is-selected" : "",
      clickable ? "is-clickable" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleSelect = () => {
      if (disabled || loading || !selectable) return;

      onSelectChange?.(!selected);
    };

    const handleButtonClick = (
      event: MouseEvent<HTMLButtonElement>,
    ) => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }

      if (selectable) {
        handleSelect();
      }

      onClick?.(event as never);
    };

    const handleDivClick = (
      event: MouseEvent<HTMLDivElement>,
    ) => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }

      if (selectable) {
        handleSelect();
      }

      onClick?.(event);
    };

    const content = (
      <>
        <span className="shivanya-avatar-content">
          {src ? (
            <img src={src} alt={alt || name || ""} />
          ) : icon ? (
            <span
              className="shivanya-avatar-icon"
              aria-hidden="true"
            >
              {icon}
            </span>
          ) : (
            children ?? (
              <span className="shivanya-avatar-initials">
                {computedInitials}
              </span>
            )
          )}
        </span>

        {status !== "none" && (
          <span
            className="shivanya-avatar-status"
            aria-label={status}
          />
        )}

        {loading && (
          <span
            className="shivanya-avatar-loading"
            aria-hidden="true"
          />
        )}
      </>
    );

    if (clickable) {
      const buttonProps =
        props as unknown as ButtonHTMLAttributes<HTMLButtonElement>;

      return (
        <button
          {...buttonProps}
          ref={ref as Ref<HTMLButtonElement>}
          type="button"
          disabled={disabled || loading}
          className={classes}
          onClick={handleButtonClick}
          aria-pressed={selectable ? selected : undefined}
          aria-disabled={
            disabled || loading ? true : undefined
          }
        >
          {content}
        </button>
      );
    }

    return (
      <div
        {...props}
        ref={ref as Ref<HTMLDivElement>}
        className={classes}
        onClick={handleDivClick}
        role={selectable ? "button" : undefined}
        aria-pressed={selectable ? selected : undefined}
        aria-disabled={
          disabled || loading ? true : undefined
        }
        tabIndex={
          selectable && !disabled && !loading ? 0 : undefined
        }
      >
        {content}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";