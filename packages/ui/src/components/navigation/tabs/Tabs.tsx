"use client";
import React, {
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  isValidElement,
  memo,
  useState,
} from "react";

import { cn, mergeProps } from "../../../utils";

import Tab from "./Tab";
import TabPanel from "./TabPanel";

import {
  getTabsOrientation,
  getTabsProps,
  getTabsRadius,
  getTabsSize,
  getTabsState,
  getTabsVariant,
  isTabsDisabled,
  isTabsLoading,
} from "./utils";

type TabChildProps = {
  active?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLElement>,
  ) => void;
};

type TabPanelChildProps = {
  active?: boolean;
  value?: number;
};

function flattenChildren(
  children: React.ReactNode,
): React.ReactNode[] {
  const result: React.ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (
      isValidElement(child) &&
      child.type === Fragment
    ) {
      const fragment =
        child as React.ReactElement<{
          children?: React.ReactNode;
        }>;

      result.push(
        ...flattenChildren(
          fragment.props.children,
        ),
      );

      return;
    }

    result.push(child);
  });

  return result;
}

const Tabs = forwardRef<HTMLDivElement, any>(
  function Tabs(props, ref) {
    const mergedProps = getTabsProps(
      mergeProps({}, props),
    );

    const {
      id,
      className,
      style,
      children,
      size,
      variant,
      radius,
      orientation,
      state,
      disabled,
      defaultValue,
      value,
      onChange,
      fullWidth,
      ...rest
    } = mergedProps;

    const isDisabled = isTabsDisabled(
      disabled,
      state,
    );

    const loading = isTabsLoading(state);

    const [internalValue, setInternalValue] =
      useState(defaultValue);

    const activeValue =
      value ?? internalValue;

    const allChildren =
      flattenChildren(children);

    const tabs = allChildren.filter(
      (
        child,
      ): child is React.ReactElement<TabChildProps> =>
        isValidElement(child) &&
        child.type === Tab,
    );

    const panels = allChildren.filter(
      (
        child,
      ): child is React.ReactElement<TabPanelChildProps> =>
        isValidElement(child) &&
        child.type === TabPanel,
    );

    const handleChange = (
      nextValue: number,
    ) => {
      if (isDisabled) {
        return;
      }

      if (value === undefined) {
        setInternalValue(nextValue);
      }

      onChange?.(nextValue);
    };

    return (
      <div
        ref={ref}
        id={id}
        style={style}
        className={cn(
          "tabs",
          getTabsSize(size),
          getTabsVariant(variant),
          getTabsRadius(radius),
          getTabsOrientation(orientation),
          getTabsState(state),
          fullWidth && "tabsFullWidth",
          isDisabled && "tabsDisabled",
          className,
        )}
        data-loading={
          loading || undefined
        }
        data-disabled={
          isDisabled || undefined
        }
        aria-disabled={
          isDisabled || undefined
        }
        {...rest}
      >
        <div
          className="tabsList"
          role="tablist"
          aria-orientation={orientation}
        >
          {tabs.map((tab, index) => {
            const tabProps = tab.props;

            return cloneElement(tab, {
              key: tab.key ?? index,
              active:
                index === activeValue,
              disabled:
                tabProps.disabled ??
                isDisabled,
              fullWidth:
                tabProps.fullWidth ??
                fullWidth,
              onClick: (
                event: React.MouseEvent<HTMLElement>,
              ) => {
                tabProps.onClick?.(event);
                handleChange(index);
              },
            });
          })}
        </div>

        <div className="tabsPanels">
          {panels.map(
            (panel, index) =>
              cloneElement(panel, {
                key:
                  panel.key ?? index,
                active:
                  index === activeValue,
                value: index,
              }),
          )}
        </div>
      </div>
    );
  },
);

Tabs.displayName = "Tabs";

export default memo(Tabs);
