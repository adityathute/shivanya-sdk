import React, {
  forwardRef,
  memo,
} from "react";

import { cn, mergeProps } from "../../../utils";

export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  icon?: React.ReactNode;
  current?: boolean;
  disabled?: boolean;
}

const BreadcrumbItem = forwardRef<
  HTMLElement,
  BreadcrumbItemProps
>(function BreadcrumbItem(props, ref) {
  const {
    className,
    style,
    children,
    href,
    icon,
    current = false,
    disabled = false,
    ...rest
  } = mergeProps({}, props);

  const Component =
    href && !disabled && !current
      ? "a"
      : "span";

  return (
    <Component
      ref={ref}
      href={
        Component === "a"
          ? href
          : undefined
      }
      style={style}
      className={cn(
        "breadcrumbItem",
        current &&
          "breadcrumbItemCurrent",
        disabled &&
          "breadcrumbItemDisabled",
        className,
      )}
      aria-current={
        current ? "page" : undefined
      }
      aria-disabled={
        disabled || undefined
      }
      {...rest}
    >
      {icon && (
        <span className="breadcrumbIcon">
          {icon}
        </span>
      )}

      <span className="breadcrumbItemText">
        {children}
      </span>
    </Component>
  );
});

BreadcrumbItem.displayName =
  "BreadcrumbItem";

export default memo(BreadcrumbItem);