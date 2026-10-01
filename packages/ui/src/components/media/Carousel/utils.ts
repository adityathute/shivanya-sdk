import { carouselDefaultProps, carouselRadius, carouselSizes, carouselStates, carouselVariants } from "./config";
export function getCarouselSize(size: keyof typeof carouselSizes = "md") { return carouselSizes[size] ?? carouselSizes.md; }
export function getCarouselVariant(variant: keyof typeof carouselVariants = "default") { return carouselVariants[variant] ?? carouselVariants.default; }
export function getCarouselRadius(radius: keyof typeof carouselRadius = "md") { return carouselRadius[radius] ?? carouselRadius.md; }
export function getCarouselState(state: keyof typeof carouselStates = "default") { return carouselStates[state] ?? carouselStates.default; }
export function getCarouselProps(props: Record<string, unknown> = {}) { return { ...carouselDefaultProps, ...props }; }
export function isCarouselAutoplay(autoplay?: boolean, state?: string) { return Boolean(autoplay) || state === "autoplay"; }
export function isCarouselPaused(state?: string) { return state === "paused"; }
export function isCarouselDisabled(disabled?: boolean, state?: string) { return Boolean(disabled) || state === "disabled"; }
export function getCarouselAriaProps() { return { role: "region" as const, "aria-roledescription": "carousel" }; }
