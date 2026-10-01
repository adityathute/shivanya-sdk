"use client";

import React, {
  forwardRef,
  memo,
  useContext,
} from "react";

import { cn, mergeProps } from "../../../utils";

import { DropdownContext } from "./Dropdown";

const DropdownTrigger = forwardRef<
  HTMLButtonElement,
  any
>(function DropdownTrigger(props, ref) {
  const {
    className,
    style,
    children,
    disabled,
    onClick,
    ...rest
  } = mergeProps({}, props);

  const ctx = useContext(DropdownContext);

  const dis =
    disabled || ctx?.disabled;

  return (
    <button
      ref={ref}
      type="button"
      style={style}
      className={cn(
        "dropdownTrigger",
        className,
      )}
      disabled={dis}
      aria-haspopup="menu"
      aria-expanded={
        ctx?.open || false
      }
      onClick={(event) => {
        if (!dis) {
          ctx?.toggleDropdown();
        }

        onClick?.(event);
      }}
      {...rest}
    >
      <span className="dropdownLabel">
        {children}
      </span>

      <span
        className={cn(
          "dropdownArrow",
          ctx?.open && "is-open",
        )}
        aria-hidden="true"
      />
    </button>
  );
});

DropdownTrigger.displayName =
  "DropdownTrigger";

export default memo(
  DropdownTrigger,
);