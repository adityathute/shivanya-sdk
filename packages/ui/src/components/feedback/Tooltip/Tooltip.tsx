import type { TooltipProps } from "./Tooltip.types";

export function Tooltip({
  content,
  placement = "top",
  size = "md",
  variant = "default",
  radius = "md",
  state = "default",
  disabled = false,
  children,
  className,
  ...props
}: TooltipProps) {
  const isDisabled = disabled || state === "disabled";
  const classes = [
    "shivanya-tooltip",
    `shivanya-tooltip-${placement}`,
    `shivanya-tooltip-${size}`,
    `shivanya-tooltip-${variant}`,
    `shivanya-tooltip-radius-${radius}`,
    state !== "default" ? `shivanya-tooltip-${state}` : "",
    isDisabled ? "is-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span {...props} className={classes}>
      <span className="shivanya-tooltip-trigger">{children}</span>
      {!isDisabled && (
        <span className="shivanya-tooltip-content" role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
}
