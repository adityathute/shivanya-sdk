import { imageDefaultProps, imageFits, imageRadius, imageSizes, imageStates, imageVariants } from "./config";
export function getImageFit(fit: keyof typeof imageFits = "cover") { return imageFits[fit] ?? imageFits.cover; }
export function getImageRadius(radius: keyof typeof imageRadius = "md") { return imageRadius[radius] ?? imageRadius.md; }
export function getImageSize(size: keyof typeof imageSizes = "md") { return imageSizes[size] ?? imageSizes.md; }
export function getImageVariant(variant: keyof typeof imageVariants = "default") { return imageVariants[variant] ?? imageVariants.default; }
export function getImageState(state: keyof typeof imageStates = "default") { return imageStates[state] ?? imageStates.default; }
export function getImageProps(props: Record<string, unknown> = {}) { return { ...imageDefaultProps, ...props }; }
export function isImageLoading(state?: string) { return state === "loading"; }
export function isImageError(state?: string) { return state === "error"; }
export function isImageDisabled(disabled?: boolean, state?: string) { return Boolean(disabled) || state === "disabled"; }
export function getImageAriaProps(alt?: string) { return { role: "img" as const, "aria-label": alt }; }
