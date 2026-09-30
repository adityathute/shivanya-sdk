import { forwardRef } from "react";
import type { ProgressProps } from "./Progress.types";

const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  {
    value = 0,
    max = 100,
    size = "md",
    variant = "primary",
    showValue = false,
    className,
    ...props
  },
  ref
) {
  const safeMax = Math.max(1, Number(max) || 1);
  const safeValue = Math.min(safeMax, Math.max(0, Number(value) || 0));
  const percentage = (safeValue / safeMax) * 100;

  const classes = [
    "shivanya-progress",
    `shivanya-progress-${size}`,
    className,
  ].filter(Boolean).join(" ");

  return (
    <div
      {...props}
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={safeValue}
      className={classes}
    >
      <div
        className={[
          "shivanya-progress-bar",
          `shivanya-progress-${variant}`,
        ].join(" ")}
        style={{ width: `${percentage}%` }}
      />

      {showValue ? (
        <span className="shivanya-progress-value">
          {Math.round(percentage)}%
        </span>
      ) : null}
    </div>
  );
});

Progress.displayName = "Progress";

export { Progress };
