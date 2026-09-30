import { createElement, forwardRef } from "react";
import type { CSSProperties } from "react";
import type { SkeletonProps } from "./Skeleton.types";

const Skeleton = forwardRef<HTMLElement, SkeletonProps>(function Skeleton(
  {
    as = "div",
    variant = "text",
    animation = "pulse",
    loading = true,
    count = 1,
    inline = false,
    width,
    height,
    borderRadius,
    style,
    className,
    children,
    ...props
  },
  ref
) {
  if (!loading) return children ?? null;

  const safeCount = Math.max(1, Number(count) || 1);
  const skeletonStyle: CSSProperties = {
    width: width ?? undefined,
    height,
    borderRadius,
    ...style,
  };

  const classes = [
    "shivanya-skeleton",
    `shivanya-skeleton-${variant}`,
    `shivanya-skeleton-animation-${animation}`,
    inline ? "shivanya-skeleton-inline" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <>
      {Array.from({ length: safeCount }, (_, index) =>
        createElement(as, {
          ...props,
          key: index,
          ref: index === 0 ? ref : undefined,
          "aria-hidden": true,
          className: classes,
          style: skeletonStyle,
        })
      )}
    </>
  );
});

Skeleton.displayName = "Skeleton";

export { Skeleton };
