"use client";

import { forwardRef, memo, useMemo, useState, type KeyboardEvent } from "react";

import type { DonutChartProps, DonutChartSegment } from "./DonutChart.types";

import { donutChartDefaultProps } from "./config";

import {
  buildSegments,
  formatLabel,
  formatPercentage,
  formatValue,
  getCenter,
  getChartSize,
  getInnerRadius,
  getOuterRadius,
  getSegmentAriaLabel,
  getStrokeWidth,
  getSvgProps,
  getTotal,
  isDisabled,
  isEmpty,
  isLoading,
} from "./utils";

import { EmptyState } from "../../data-display/EmptyState";
import { Spinner } from "../../foundation/Spinner";

function DonutChart(
  props: DonutChartProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const merged: DonutChartProps = {
    ...donutChartDefaultProps,
    ...props,
  };

  const {
    className,
    style,
    size,
    variant,
    state,
    data = [],
    innerRadius,
    outerRadius,
    startAngle,
    colors,
    showLegend,
    legendPosition,
    showCenterValue,
    showCenterLabel,
    centerValue,
    centerLabel,
    showTooltip,
    animate,
    animation,
    animationDuration,
    hoverScale,
    activeIndex,
    valueFormatter,
    labelFormatter,
    centerFormatter,
    onSegmentClick,
    onSegmentHover,
    onAnimationEnd,
    ...rest
  } = merged;

  const chartSize = getChartSize(size);
  const center = getCenter(chartSize);
  const outer = getOuterRadius(chartSize, outerRadius);
  const inner = getInnerRadius(chartSize, innerRadius);
  const strokeWidth = getStrokeWidth(outer, inner);

  const total = useMemo(
    () => getTotal(data as DonutChartProps["data"]),
    [data],
  );

  const segments = useMemo(
    () => buildSegments(data as DonutChartProps["data"], outer, colors),
    [data, outer, colors],
  );

  const [hoveredSegment, setHoveredSegment] =
    useState<DonutChartSegment | null>(null);

  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    segment: DonutChartSegment | null;
  }>({
    visible: false,
    x: 0,
    y: 0,
    segment: null,
  });

  const disabled = isDisabled(state);

  if (isLoading(state)) {
    return <Spinner />;
  }

  if (isEmpty(state, data as DonutChartProps["data"])) {
    return (
      <EmptyState title="No data" description="No chart data available." />
    );
  }

  const legendClass = `shivanya-donut-chart-legend-${legendPosition}`;

  const classes = [
    "shivanya-donut-chart",
    `shivanya-donut-chart-${variant}`,
    `shivanya-donut-chart-size-${size}`,
    disabled ? "is-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = (
    event: KeyboardEvent<SVGCircleElement>,
    segment: DonutChartSegment,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSegmentClick?.(segment);
    }
  };

  return (
    <div ref={ref} className={classes} style={style} {...rest}>
      <svg
        className="shivanya-donut-chart-svg"
        width={chartSize}
        height={chartSize}
        viewBox={`0 0 ${chartSize} ${chartSize}`}
        {...getSvgProps()}
      >
        <circle
          className="shivanya-donut-chart-track"
          cx={center}
          cy={center}
          r={outer}
          fill="none"
          strokeWidth={strokeWidth}
        />

        {segments.map((segment, index) => (
          <circle
            key={segment.id}
            className={[
              "shivanya-donut-chart-segment",
              animate && animation !== "none" ? `is-${animation}` : "",
              hoveredSegment?.id === segment.id ? "is-hovered" : "",
              activeIndex === index ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            cx={center}
            cy={center}
            r={outer}
            fill="none"
            stroke={segment.color}
            strokeWidth={strokeWidth}
            strokeDasharray={segment.dashArray}
            strokeDashoffset={segment.dashOffset}
            strokeLinecap="round"
            transform={`rotate(${startAngle} ${center} ${center})`}
            aria-label={getSegmentAriaLabel(segment)}
            tabIndex={disabled ? -1 : 0}
            onMouseEnter={() => {
              setHoveredSegment(segment);
              onSegmentHover?.(segment);
            }}
            onMouseLeave={() => {
              setHoveredSegment(null);
              setTooltip({
                visible: false,
                x: 0,
                y: 0,
                segment: null,
              });
            }}
            onMouseMove={(event) => {
              if (!showTooltip) {
                return;
              }

              setTooltip({
                visible: true,
                x: Math.min(event.clientX, window.innerWidth - 220),
                y: Math.min(event.clientY, window.innerHeight - 140),
                segment,
              });
            }}
            onClick={() => onSegmentClick?.(segment)}
            onKeyDown={(event) => handleKeyDown(event, segment)}
            style={
              animate
                ? ({
                    "--donut-animation-duration": `${animationDuration}ms`,
                  } as React.CSSProperties)
                : undefined
            }
          />
        ))}

        {(showCenterValue || showCenterLabel) && (
          <g aria-hidden="true">
            {showCenterValue && (
              <text
                x={center}
                y={showCenterLabel ? center - 8 : center + 6}
                textAnchor="middle"
                dominantBaseline="middle"
                className="shivanya-donut-chart-center-value"
              >
                {centerFormatter
                  ? centerFormatter(centerValue ?? total)
                  : formatValue(centerValue ?? total, valueFormatter)}
              </text>
            )}

            {showCenterLabel && (
              <text
                x={center}
                y={showCenterValue ? center + 18 : center + 6}
                textAnchor="middle"
                dominantBaseline="middle"
                className="shivanya-donut-chart-center-label"
              >
                {formatLabel(centerLabel ?? "", labelFormatter)}
              </text>
            )}
          </g>
        )}
      </svg>

      {showLegend && (
        <div className={`shivanya-donut-chart-legend ${legendClass}`}>
          {segments.map((segment, index) => {
            const active =
              hoveredSegment?.id === segment.id || activeIndex === index;

            return (
              <button
                key={segment.id}
                type="button"
                className={[
                  "shivanya-donut-chart-legend-item",
                  active ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onMouseEnter={() => setHoveredSegment(segment)}
                onMouseLeave={() => setHoveredSegment(null)}
                onClick={() => onSegmentClick?.(segment)}
              >
                <span
                  className="shivanya-donut-chart-legend-color"
                  style={{
                    background: segment.color,
                  }}
                />

                <span className="shivanya-donut-chart-legend-content">
                  <span className="shivanya-donut-chart-legend-label">
                    {formatLabel(segment.label, labelFormatter)}
                  </span>

                  <span className="shivanya-donut-chart-legend-percentage">
                    {formatPercentage(segment.percentage)}
                  </span>
                </span>

                <span className="shivanya-donut-chart-legend-value">
                  {formatValue(segment.value, valueFormatter)}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {showTooltip && tooltip.visible && tooltip.segment && (
        <div
          className="shivanya-donut-chart-tooltip"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y + 12,
          }}
        >
          <div className="shivanya-donut-chart-tooltip-header">
            <span
              className="shivanya-donut-chart-tooltip-color"
              style={{
                background: tooltip.segment.color,
              }}
            />

            <span className="shivanya-donut-chart-tooltip-title">
              {formatLabel(tooltip.segment.label, labelFormatter)}
            </span>
          </div>

          <div className="shivanya-donut-chart-tooltip-body">
            <div className="shivanya-donut-chart-tooltip-row">
              <span>Value</span>
              <strong>
                {formatValue(tooltip.segment.value, valueFormatter)}
              </strong>
            </div>

            <div className="shivanya-donut-chart-tooltip-row">
              <span>Percentage</span>
              <strong>{formatPercentage(tooltip.segment.percentage)}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

DonutChart.displayName = "DonutChart";

export default memo(forwardRef(DonutChart));
