"use client";
import {
  forwardRef,
  memo,
  useEffect,
} from "react";
import type { DrawerProps } from "./Drawer.types";
import { DRAWER_DEFAULTS } from "./config";
import {
  getDrawerAriaProps,
  getDrawerPosition,
  getDrawerRadius,
  getDrawerSize,
  getDrawerState,
  getDrawerVariant,
  isDrawerDisabled,
  isDrawerOpen,
  shouldCloseOnEscape,
  shouldCloseOnOverlayClick,
} from "./utils";

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer(
    {
      id,
      className = "",
      style,
      open = DRAWER_DEFAULTS.open,
      position = DRAWER_DEFAULTS.position,
      size = DRAWER_DEFAULTS.size,
      variant = DRAWER_DEFAULTS.variant,
      radius = DRAWER_DEFAULTS.radius,
      state = DRAWER_DEFAULTS.state,
      disabled = DRAWER_DEFAULTS.disabled,
      overlay = DRAWER_DEFAULTS.overlay,
      title = DRAWER_DEFAULTS.title,
      closeOnOverlayClick = DRAWER_DEFAULTS.closeOnOverlayClick,
      closeOnEscape = DRAWER_DEFAULTS.closeOnEscape,
      onClose,
      children,
      ...rest
    },
    ref,
  ) {
    const opened = isDrawerOpen(open, state);
    const isDisabled = isDrawerDisabled(disabled, state);

    useEffect(() => {
      if (!opened) return;

      const scrollY = window.scrollY;
      const body = document.body;
      const html = document.documentElement;

      const previousBody = {
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
        overflow: body.style.overflow,
      };

      const previousHtmlOverflow = html.style.overflow;

      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";

      return () => {
        body.style.position = previousBody.position;
        body.style.top = previousBody.top;
        body.style.width = previousBody.width;
        body.style.overflow = previousBody.overflow;
        html.style.overflow = previousHtmlOverflow;
        window.scrollTo(0, scrollY);
      };
    }, [opened]);

    const closeDrawer = () => {
      if (isDisabled) return;

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      onClose?.();
    };

    const handleOverlayClick = () => {
      if (
        opened &&
        shouldCloseOnOverlayClick(closeOnOverlayClick)
      ) {
        closeDrawer();
      }
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ) => {
      if (
        event.key === "Escape" &&
        opened &&
        shouldCloseOnEscape(closeOnEscape)
      ) {
        event.preventDefault();
        event.stopPropagation();
        closeDrawer();
      }
    };

    const classes = [
      "shivanya-drawer",
      getDrawerPosition(position),
      getDrawerSize(size),
      getDrawerVariant(variant),
      getDrawerRadius(radius),
      opened ? "shivanya-drawer-open" : "shivanya-drawer-closed",
      isDisabled ? "shivanya-drawer-disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <>
        {overlay && (
          <div
            aria-hidden="true"
            className={[
              "shivanya-drawer-overlay",
              opened
                ? "shivanya-drawer-overlay-open"
                : "shivanya-drawer-overlay-closed",
            ].join(" ")}
            onClick={handleOverlayClick}
          />
        )}

        <div
          ref={ref}
          id={id}
          style={style}
          tabIndex={opened ? 0 : -1}
          onKeyDown={handleKeyDown}
          className={classes}
          data-open={opened || undefined}
          data-disabled={isDisabled || undefined}
          {...getDrawerAriaProps({
            open: opened,
            title,
            id,
          })}
          {...rest}
        >
          {title && (
            <div
              id={id ? `${id}-title` : undefined}
              className="shivanya-drawer-header"
            >
              {title}
            </div>
          )}

          <div className="shivanya-drawer-content">
            {children}
          </div>
        </div>
      </>
    );
  },
);

Drawer.displayName = "Drawer";
export default memo(Drawer);

