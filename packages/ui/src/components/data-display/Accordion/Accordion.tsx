"use client";
import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
  useState,
} from "react";

import type { AccordionItemProps, AccordionProps } from "./Accordion.types";

interface AccordionContextValue {
  expandedKeys: string[];
  toggle: (key: string) => void;
  disabled: boolean;
  expandMode: "multiple" | "single";
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem(
    {
      itemKey,
      title,
      subtitle,
      icon,
      defaultExpanded = false,
      expanded: controlledExpanded,
      disabled = false,
      onExpandedChange,
      children,
      className,
      ...props
    },
    ref,
  ) {
    const context = useContext(AccordionContext);

    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

    const contextExpanded = context?.expandedKeys.includes(itemKey) ?? false;

    const expanded =
      controlledExpanded !== undefined
        ? controlledExpanded
        : context
          ? contextExpanded
          : internalExpanded;

    const isDisabled = disabled || context?.disabled || false;

    const toggle = () => {
      if (isDisabled) {
        return;
      }

      if (controlledExpanded !== undefined) {
        onExpandedChange?.(!controlledExpanded);
        return;
      }

      if (context) {
        context.toggle(itemKey);
        return;
      }

      setInternalExpanded((current) => {
        const next = !current;
        onExpandedChange?.(next);
        return next;
      });
    };

    return (
      <div
        ref={ref}
        {...props}
        className={[
          "shivanya-accordion-item",
          expanded ? "is-expanded" : "",
          isDisabled ? "is-disabled" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <button
          type="button"
          className="shivanya-accordion-header"
          onClick={toggle}
          disabled={isDisabled}
          aria-expanded={expanded}
        >
          <span className="shivanya-accordion-heading">
            <span className="shivanya-accordion-title">{title}</span>

            {subtitle && (
              <span className="shivanya-accordion-subtitle">{subtitle}</span>
            )}
          </span>

          <span className="shivanya-accordion-icon" aria-hidden="true">
            {icon ?? (expanded ? "−" : "+")}
          </span>
        </button>

        {expanded && (
          <div className="shivanya-accordion-content">{children}</div>
        )}
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";

const Accordion = Object.assign(
  forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
    {
      size = "md",
      variant = "default",
      radius = "md",
      state = "default",
      expandMode = "multiple",
      collapsible = true,
      defaultExpandedKeys = [],
      expandedKeys: controlledExpandedKeys,
      onExpandedKeysChange,
      children,
      className,
      ...props
    },
    ref,
  ) {
    const [internalExpandedKeys, setInternalExpandedKeys] =
      useState<string[]>(defaultExpandedKeys);

    const expandedKeys = controlledExpandedKeys ?? internalExpandedKeys;

    const disabled = state === "disabled";

    const toggle = (key: string) => {
      if (disabled || state === "loading") {
        return;
      }

      const isExpanded = expandedKeys.includes(key);

      let nextKeys: string[];

      if (isExpanded) {
        nextKeys = collapsible
          ? expandedKeys.filter((item) => item !== key)
          : expandedKeys;
      } else if (expandMode === "single") {
        nextKeys = [key];
      } else {
        nextKeys = [...expandedKeys, key];
      }

      if (controlledExpandedKeys === undefined) {
        setInternalExpandedKeys(nextKeys);
      }

      onExpandedKeysChange?.(nextKeys);
    };

    const context = useMemo<AccordionContextValue>(
      () => ({
        expandedKeys,
        toggle,
        disabled: disabled || state === "loading",
        expandMode,
      }),
      [expandedKeys, disabled, state, expandMode],
    );

    return (
      <AccordionContext.Provider value={context}>
        <div
          ref={ref}
          {...props}
          className={[
            "shivanya-accordion",
            `shivanya-accordion-${size}`,
            `shivanya-accordion-${variant}`,
            `shivanya-accordion-radius-${radius}`,
            state !== "default" ? `shivanya-accordion-${state}` : "",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          aria-disabled={disabled || undefined}
        >
          {Children.map(children, (child) => {
            if (!isValidElement<AccordionItemProps>(child)) {
              return child;
            }

            return cloneElement(child, {
              disabled: child.props.disabled ?? context.disabled,
            });
          })}
        </div>
      </AccordionContext.Provider>
    );
  }),
  {
    Item: AccordionItem,
  },
);

Accordion.displayName = "Accordion";

export { Accordion, AccordionItem };

