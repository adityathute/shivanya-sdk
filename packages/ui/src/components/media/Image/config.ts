export const imageFits = { contain: "imageContain", cover: "imageCover", fill: "imageFill", none: "imageNone", scaleDown: "imageScaleDown" } as const;
export const imageRadius = { none: "imageRadiusNone", sm: "imageRadiusSmall", md: "imageRadiusMedium", lg: "imageRadiusLarge", full: "imageRadiusFull" } as const;
export const imageSizes = { xs: "imageExtraSmall", sm: "imageSmall", md: "imageMedium", lg: "imageLarge", xl: "imageExtraLarge" } as const;
export const imageVariants = { default: "imageDefault", bordered: "imageBordered", rounded: "imageRounded", shadow: "imageShadow" } as const;
export const imageStates = { default: "imageDefaultState", loading: "imageLoading", error: "imageError", disabled: "imageDisabled" } as const;
export const imageDefaultProps = { src: "", alt: "", size: "md", fit: "cover", radius: "md", variant: "default", state: "default", loading: "lazy", disabled: false } as const;
