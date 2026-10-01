import React, {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
} from "react";

import { cn } from "../../../utils";

import BreadcrumbItem from "./BreadcrumbItem";

import {
  getBreadcrumbAriaProps,
  getBreadcrumbRadius,
  getBreadcrumbSeparatorPosition,
  getBreadcrumbSize,
  getBreadcrumbState,
  getBreadcrumbVariant,
  isBreadcrumbDisabled,
  isBreadcrumbLoading,
} from "./utils";

import type {
  BreadcrumbRadius,
  BreadcrumbSeparatorPosition,
  BreadcrumbSize,
  BreadcrumbState,
  BreadcrumbVariant,
} from "./config";

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement> {
  size?: BreadcrumbSize;
  variant?: BreadcrumbVariant;
  radius?: BreadcrumbRadius;
  separator?: React.ReactNode;
  separatorPosition?: BreadcrumbSeparatorPosition;
  maxItems?: number;
  state?: BreadcrumbState;
  disabled?: boolean;
}

type BreadcrumbChildProps = {
  disabled?: boolean;
};

const Breadcrumb = forwardRef<
  HTMLElement,
  BreadcrumbProps
>(function Breadcrumb(props, ref) {
  const {
    id,
    className,
    style,
    children,
    size: propSize,
    variant: propVariant,
    radius: propRadius,
    separator,
    separatorPosition: propSeparatorPosition,
    maxItems,
    state: propState,
    disabled,
    ...rest
  } = props;

  const size: BreadcrumbSize =
    propSize ?? "md";

  const variant: BreadcrumbVariant =
    propVariant ?? "default";

  const radius: BreadcrumbRadius =
    propRadius ?? "md";

  const state: BreadcrumbState =
    propState ?? "default";

  const separatorPosition: BreadcrumbSeparatorPosition =
    propSeparatorPosition ?? "end";

  const breadcrumbSeparator =
    separator ?? "/";

  const isDisabled =
    isBreadcrumbDisabled(
      Boolean(disabled),
      state,
    );

  const loading =
    isBreadcrumbLoading(state);

  const items =
    Children.toArray(children);

  let visibleItems = items;

  if (
    maxItems &&
    maxItems > 0 &&
    items.length > maxItems
  ) {
    const firstCount = Math.max(
      1,
      Math.ceil((maxItems - 1) / 2),
    );

    const lastCount = Math.max(
      0,
      Math.floor((maxItems - 1) / 2),
    );

    visibleItems = [
      ...items.slice(
        0,
        firstCount,
      ),
      <span
        key="breadcrumb-collapse"
        className="breadcrumbCollapse"
        aria-hidden="true"
      >
        …
      </span>,
      ...items.slice(
        items.length - lastCount,
      ),
    ];
  }

  const renderItem = (
    child: React.ReactNode,
  ) => {
    if (!isValidElement(child)) {
      return child;
    }

    const typedChild =
      child as React.ReactElement<BreadcrumbChildProps>;

    if (
      typedChild.type ===
      BreadcrumbItem
    ) {
      return cloneElement(
        typedChild,
        {
          disabled:
            typedChild.props.disabled ??
            isDisabled,
        },
      );
    }

    return typedChild;
  };

  const renderSeparator = (
    key: string,
  ) => (
    <span
      key={key}
      className="breadcrumbSeparator"
      aria-hidden="true"
    >
      {breadcrumbSeparator}
    </span>
  );

  return (
    <nav
      ref={ref}
      id={id}
      style={style}
      className={cn(
        "breadcrumb",
        getBreadcrumbSize(size),
        getBreadcrumbVariant(variant),
        getBreadcrumbRadius(radius),
        getBreadcrumbState(state),
        getBreadcrumbSeparatorPosition(
          separatorPosition,
        ),
        isDisabled &&
          "breadcrumbDisabled",
        className,
      )}
      data-loading={
        loading || undefined
      }
      data-disabled={
        isDisabled || undefined
      }
      {...getBreadcrumbAriaProps({
        disabled: isDisabled,
      })}
      {...rest}
    >
      {separatorPosition === "start" &&
        renderSeparator(
          "breadcrumb-separator-start",
        )}

      {visibleItems.map(
        (child, index) => (
          <Fragment
            key={
              isValidElement(child)
                ? child.key ??
                  `breadcrumb-item-${index}`
                : `breadcrumb-item-${index}`
            }
          >
            {renderItem(child)}

            {separatorPosition === "end" &&
              index <
                visibleItems.length - 1 &&
              renderSeparator(
                `breadcrumb-separator-end-${index}`,
              )}

            {separatorPosition === "start" &&
              index <
                visibleItems.length - 1 &&
              renderSeparator(
                `breadcrumb-separator-start-${index}`,
              )}
          </Fragment>
        ),
      )}

      {separatorPosition === "end" &&
        renderSeparator(
          "breadcrumb-separator-end",
        )}
    </nav>
  );
});

Breadcrumb.displayName =
  "Breadcrumb";

export default memo(Breadcrumb);