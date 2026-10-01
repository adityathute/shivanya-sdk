import type { ImgHTMLAttributes } from "react";
export type ImageFit = "contain" | "cover" | "fill" | "none" | "scaleDown";
export type ImageSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ImageRadius = "none" | "sm" | "md" | "lg" | "full";
export type ImageVariant = "default" | "bordered" | "rounded" | "shadow";
export type ImageState = "default" | "loading" | "error" | "disabled";
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> { size?: ImageSize; fit?: ImageFit; radius?: ImageRadius; variant?: ImageVariant; state?: ImageState; disabled?: boolean; }
