import { forwardRef } from "react";

import type { StatisticProps } from "./Statistic.types";

export const Statistic = forwardRef<
  HTMLDivElement,
  StatisticProps
>(function Statistic(
  {
    label,
    value,
    prefix,
    suffix,
    description,
    trend,
    trendValue,
    icon,
    size = "md",
    variant = "default",
    loading = false,
    loadingLabel,
    trendIcon,
    fullWidth = false,
    className,
    ...props
  },
  ref,
) {
  const classes = [
    "shivanya-statistic",
    `shivanya-statistic-${size}`,
    `shivanya-statistic-${variant}`,
    fullWidth ? "is-full" : "",
    loading ? "is-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const defaultTrendIcon =
    trend === "up"
      ? "↑"
      : trend === "down"
        ? "↓"
        : "→";

  return (
    <div
      ref={ref}
      {...props}
      className={classes}
      aria-busy={loading || undefined}
    >
      {icon && (
        <div
          className="shivanya-statistic-icon"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      <div className="shivanya-statistic-content">
        {label && (
          <div className="shivanya-statistic-label">
            {label}
          </div>
        )}

        {loading ? (
          <>
            <div className="shivanya-statistic-loading">
              <span />
            </div>

            {loadingLabel && (
              <div className="shivanya-statistic-loading-label">
                {loadingLabel}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="shivanya-statistic-value">
              {prefix && (
                <span className="shivanya-statistic-prefix">
                  {prefix}
                </span>
              )}

              <span className="shivanya-statistic-value-content">
                {value}
              </span>

              {suffix && (
                <span className="shivanya-statistic-suffix">
                  {suffix}
                </span>
              )}
            </div>

            {(trend || trendValue) && (
              <div
                className={[
                  "shivanya-statistic-trend",
                  trend
                    ? `is-${trend}`
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span
                  className="shivanya-statistic-trend-icon"
                  aria-hidden="true"
                >
                  {trendIcon ??
                    defaultTrendIcon}
                </span>

                {trendValue && (
                  <span>{trendValue}</span>
                )}
              </div>
            )}

            {description && (
              <div className="shivanya-statistic-description">
                {description}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
});

Statistic.displayName = "Statistic";