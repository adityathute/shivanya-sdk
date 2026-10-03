"use client";

import {
  forwardRef,
  useCallback,
} from "react";

import type {
  KeyboardEvent,
  MouseEvent,
} from "react";

import type {
  ListItemProps,
  ListProps,
} from "./List.types";

const ListBase = forwardRef<
  HTMLDivElement,
  ListProps
>(function List(
  {
    size = "md",
    variant = "default",
    orientation = "vertical",
    align = "stretch",
    justify = "start",
    divider = "none",
    wrap = "nowrap",
    state = "default",
    disabled = false,
    className,
    children,
    ...props
  },
  ref,
) {
  const isDisabled =
    disabled || state === "disabled";

  const isLoading =
    state === "loading";

  const classes = [
    "shivanya-list",
    `shivanya-list-${size}`,
    `shivanya-list-${variant}`,
    `shivanya-list-${orientation}`,
    `shivanya-list-align-${align}`,
    `shivanya-list-justify-${justify}`,
    `shivanya-list-divider-${divider}`,
    `shivanya-list-${wrap}`,

    isLoading
      ? "shivanya-list-loading"
      : "",

    isDisabled
      ? "is-disabled"
      : "",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      {...props}
      className={classes}
      role="list"
      aria-disabled={
        isDisabled || undefined
      }
      aria-busy={
        isLoading || undefined
      }
    >
      {children}
    </div>
  );
});

ListBase.displayName = "List";

const ListItem = forwardRef<
  HTMLDivElement,
  ListItemProps
>(function ListItem(
  {
    leading,
    trailing,
    title,
    description,

    disabled = false,
    selected = false,
    interactive = false,

    onClick,
    onKeyDown,

    className,
    children,
    ...props
  },
  ref,
) {
  const isInteractive =
    interactive || Boolean(onClick);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (disabled) {
        return;
      }

      onClick?.(event);
    },
    [disabled, onClick],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (disabled) {
        return;
      }

      onKeyDown?.(event);

      if (
        event.defaultPrevented ||
        !isInteractive
      ) {
        return;
      }

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();

        event.currentTarget.click();
      }
    },
    [
      disabled,
      isInteractive,
      onKeyDown,
    ],
  );

  const classes = [
    "shivanya-list-item",

    selected
      ? "is-selected"
      : "",

    disabled
      ? "is-disabled"
      : "",

    isInteractive
      ? "is-interactive"
      : "",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      {...props}
      className={classes}
      role="listitem"
      aria-disabled={
        disabled || undefined
      }
      aria-selected={
        selected || undefined
      }
      tabIndex={
        isInteractive && !disabled
          ? 0
          : undefined
      }
      onClick={
        isInteractive
          ? handleClick
          : undefined
      }
      onKeyDown={
        isInteractive
          ? handleKeyDown
          : undefined
      }
    >
      {leading && (
        <div className="shivanya-list-item-leading">
          {leading}
        </div>
      )}

      <div className="shivanya-list-item-content">
        {title && (
          <div className="shivanya-list-item-title">
            {title}
          </div>
        )}

        {description && (
          <div className="shivanya-list-item-description">
            {description}
          </div>
        )}

        {children}
      </div>

      {trailing && (
        <div className="shivanya-list-item-trailing">
          {trailing}
        </div>
      )}
    </div>
  );
});

ListItem.displayName = "ListItem";

type ListComponent =
  typeof ListBase & {
    Item: typeof ListItem;
  };

export const List =
  ListBase as ListComponent;

List.displayName = "List";

List.Item = ListItem;

export { ListItem };