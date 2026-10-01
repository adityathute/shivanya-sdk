export const videoSizes = { xs: "videoExtraSmall", sm: "videoSmall", md: "videoMedium", lg: "videoLarge", xl: "videoExtraLarge" } as const;
export const videoRadius = { none: "videoRadiusNone", sm: "videoRadiusSmall", md: "videoRadiusMedium", lg: "videoRadiusLarge", full: "videoRadiusFull" } as const;
export const videoVariants = { default: "videoDefault", bordered: "videoBordered", shadow: "videoShadow" } as const;
export const videoStates = { default: "videoDefaultState", loading: "videoLoading", paused: "videoPaused", playing: "videoPlaying", disabled: "videoDisabled" } as const;
export const videoDefaultProps = { src: "", size: "md", radius: "md", variant: "default", state: "default", controls: true, autoPlay: false, loop: false, muted: false, playsInline: true, poster: "", disabled: false } as const;
