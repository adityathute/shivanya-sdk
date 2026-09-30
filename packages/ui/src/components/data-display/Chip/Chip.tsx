import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type Ref,
} from "react";

import type { ChipProps } from "./Chip.types";

export const Chip = forwardRef<HTMLElement, ChipProps>(
  function Chip(
    {
      as = "div",
      size = "md",
      variant = "filled",
      color = "primary",
      radius = "full",
      icon,
      avatar,
      endIcon,
      closeIcon,
      closable = false,
      onClose,
      clickable = false,
      selectable = false,
      selected = false,
      loading = false,
      disabled = false,
      fullWidth = false,
      className,
      children,
      onClick,
      onKeyDown,
      ...props
    },
    ref,
  ) {
    const interactive =
      clickable || selectable;

    const classes = [
      "shivanya-chip",
      `shivanya-chip-${size}`,
      `shivanya-chip-${variant}`,
      `shivanya-chip-${color}`,
      `shivanya-chip-radius-${radius}`,
      interactive
        ? "is-interactive"
        : "",
      clickable
        ? "is-clickable"
        : "",
      selectable
        ? "is-selectable"
        : "",
      selected
        ? "is-selected"
        : "",
      loading
        ? "is-loading"
        : "",
      disabled
        ? "is-disabled"
        : "",
      fullWidth
        ? "is-full"
        : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleClick = (
      event: MouseEvent<HTMLElement>,
    ) => {
      if (
        disabled ||
        loading
      ) {
        return;
      }

      onClick?.(event);
    };

    const handleKeyDown = (
      event: KeyboardEvent<HTMLElement>,
    ) => {
      if (
        disabled ||
        loading
      ) {
        return;
      }

      onKeyDown?.(event);

      if (
        event.defaultPrevented
      ) {
        return;
      }

      if (
        interactive &&
        (event.key === "Enter" ||
          event.key === " ")
      ) {
        event.preventDefault();

        onClick?.(event as never);
      }
    };

    const handleClose = (
      event: MouseEvent<HTMLButtonElement>,
    ) => {
      event.stopPropagation();

      if (
        disabled ||
        loading
      ) {
        return;
      }

      onClose?.();
    };

    /*
     * A closable button chip cannot contain another button.
     * Therefore closable chips use a non-button root.
     */
    const canRenderButton =
      as === "button" &&
      !closable;

    const content = (
      <>
        {loading && (
          <span
            className="shivanya-chip-loader"
            aria-hidden="true"
          />
        )}

        {avatar && !loading && (
          <span className="shivanya-chip-avatar">
            {avatar}
          </span>
        )}

        {icon && !loading && (
          <span className="shivanya-chip-icon">
            {icon}
          </span>
        )}

        <span className="shivanya-chip-label">
          {children}
        </span>

        {endIcon && (
          <span className="shivanya-chip-end-icon">
            {endIcon}
          </span>
        )}

        {closable && (
          <button
            type="button"
            className="shivanya-chip-close"
            onClick={handleClose}
            disabled={
              disabled ||
              loading
            }
            aria-label="Remove"
          >
            {closeIcon ?? "×"}
          </button>
        )}
      </>
    );

    if (canRenderButton) {
      return (
        <button
          {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
          ref={
            ref as Ref<HTMLButtonElement>
          }
          type="button"
          className={classes}
          disabled={
            disabled ||
            loading
          }
          aria-disabled={
            disabled ||
            undefined
          }
          aria-busy={
            loading ||
            undefined
          }
          aria-pressed={
            selectable
              ? selected
              : undefined
          }
          onClick={
            interactive || onClick
              ? handleClick
              : undefined
          }
          onKeyDown={
            interactive || onKeyDown
              ? handleKeyDown
              : undefined
          }
        >
          {content}
        </button>
      );
    }

    if (as === "span") {
      return (
        <span
          {...(props as HTMLAttributes<HTMLSpanElement>)}
          ref={
            ref as Ref<HTMLSpanElement>
          }
          className={classes}
          aria-disabled={
            disabled ||
            undefined
          }
          aria-busy={
            loading ||
            undefined
          }
          aria-pressed={
            selectable
              ? selected
              : undefined
          }
          role={
            interactive
              ? "button"
              : undefined
          }
          tabIndex={
            interactive &&
            !disabled
              ? 0
              : undefined
          }
          onClick={
            interactive || onClick
              ? handleClick
              : undefined
          }
          onKeyDown={
            interactive || onKeyDown
              ? handleKeyDown
              : undefined
          }
        >
          {content}
        </span>
      );
    }

    return (
      <div
        {...props}
        ref={
          ref as Ref<HTMLDivElement>
        }
        className={classes}
        aria-disabled={
          disabled ||
          undefined
        }
        aria-busy={
          loading ||
          undefined
        }
        aria-pressed={
          selectable
            ? selected
            : undefined
        }
        role={
          interactive
            ? "button"
            : undefined
        }
        tabIndex={
          interactive &&
          !disabled
            ? 0
            : undefined
        }
        onClick={
          interactive || onClick
            ? handleClick
            : undefined
        }
        onKeyDown={
          interactive || onKeyDown
            ? handleKeyDown
            : undefined
        }
      >
        {content}
      </div>
    );
  },
);

Chip.displayName = "Chip";