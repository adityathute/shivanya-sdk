import type { HTMLAttributes, ReactNode } from "react";
export type CarouselSize = "sm" | "md" | "lg";
export type CarouselVariant = "default" | "bordered" | "shadow";
export type CarouselRadius = "none" | "sm" | "md" | "lg" | "full";
export type CarouselState = "default" | "autoplay" | "paused" | "disabled";
export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  size?: CarouselSize; variant?: CarouselVariant; radius?: CarouselRadius; state?: CarouselState; disabled?: boolean; autoplay?: boolean; loop?: boolean; interval?: number; showArrows?: boolean; showIndicators?: boolean; children?: ReactNode;
}
