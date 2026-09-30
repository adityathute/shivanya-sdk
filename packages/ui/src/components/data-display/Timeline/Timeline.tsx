import {
  Children,
  forwardRef,
  isValidElement,
} from "react";

import type {
  TimelineItemProps,
  TimelineProps,
} from "./Timeline.types";

const TimelineBase = forwardRef<
  HTMLDivElement,
  TimelineProps
>(function Timeline(
  {
    size = "md",
    variant = "default",
    orientation = "vertical",
    align = "start",
    lineStyle = "solid",
    dotVariant = "filled",
    state = "default",
    disabled = false,
    children,
    className,
    ...props
  },
  ref,
) {
  const isDisabled =
    disabled || state === "disabled";

  const items = Children.toArray(children);

  const classes = [
    "shivanya-timeline",
    `shivanya-timeline-${size}`,
    `shivanya-timeline-${variant}`,
    `shivanya-timeline-${orientation}`,
    `shivanya-timeline-align-${align}`,
    `shivanya-timeline-line-${lineStyle}`,
    `shivanya-timeline-dot-${dotVariant}`,
    state !== "default"
      ? `shivanya-timeline-${state}`
      : "",
    isDisabled ? "is-disabled" : "",
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
        state === "loading" || undefined
      }
    >
      {items.map((child, index) => {
        if (
          !isValidElement<TimelineItemProps>(
            child,
          )
        ) {
          return child;
        }

        return (
          <TimelineItem
            key={child.key ?? index}
            {...child.props}
          />
        );
      })}
    </div>
  );
});

TimelineBase.displayName = "Timeline";

export const TimelineItem = forwardRef<
  HTMLDivElement,
  TimelineItemProps
>(function TimelineItem(
  {
    title,
    description,
    timestamp,
    icon,
    avatar,
    badge,
    disabled = false,
    children,
    className,
    ...props
  },
  ref,
) {
  const isDisabled = disabled;

  const classes = [
    "shivanya-timeline-item",
    isDisabled ? "is-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const markerContent = avatar ?? icon;

  return (
    <div
      ref={ref}
      {...props}
      className={classes}
      role="listitem"
      aria-disabled={
        isDisabled || undefined
      }
    >
      <div className="shivanya-timeline-indicator">
        <div
          className="shivanya-timeline-dot"
          aria-hidden={
            markerContent
              ? undefined
              : true
          }
        >
          {markerContent}
        </div>

        <div className="shivanya-timeline-line" />
      </div>

      <div className="shivanya-timeline-content">
        {(title || badge) && (
          <div className="shivanya-timeline-header">
            {title && (
              <div className="shivanya-timeline-title">
                {title}
              </div>
            )}

            {badge && (
              <div className="shivanya-timeline-badge">
                {badge}
              </div>
            )}
          </div>
        )}

        {(description || children) && (
          <div className="shivanya-timeline-body">
            {description && (
              <div className="shivanya-timeline-description">
                {description}
              </div>
            )}

            {children}
          </div>
        )}

        {timestamp && (
          <div className="shivanya-timeline-timestamp">
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

type TimelineComponent =
  typeof TimelineBase & {
    Item: typeof TimelineItem;
  };

export const Timeline =
  TimelineBase as TimelineComponent;

Timeline.displayName = "Timeline";

Timeline.Item = TimelineItem;