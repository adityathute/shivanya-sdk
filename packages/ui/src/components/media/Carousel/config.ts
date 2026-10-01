export const carouselSizes = { sm: "carouselSmall", md: "carouselMedium", lg: "carouselLarge" } as const;
export const carouselVariants = { default: "carouselDefault", bordered: "carouselBordered", shadow: "carouselShadow" } as const;
export const carouselRadius = { none: "carouselRadiusNone", sm: "carouselRadiusSmall", md: "carouselRadiusMedium", lg: "carouselRadiusLarge", full: "carouselRadiusFull" } as const;
export const carouselStates = { default: "carouselDefaultState", autoplay: "carouselAutoplay", paused: "carouselPaused", disabled: "carouselDisabled" } as const;
export const carouselDefaultProps = { size: "md", variant: "default", radius: "md", state: "default", autoplay: false, loop: false, showArrows: true, showIndicators: true, interval: 3000, disabled: false } as const;
