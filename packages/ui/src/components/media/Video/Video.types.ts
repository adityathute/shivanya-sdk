import type { VideoHTMLAttributes } from "react";
export type VideoSize = "xs" | "sm" | "md" | "lg" | "xl";
export type VideoRadius = "none" | "sm" | "md" | "lg" | "full";
export type VideoVariant = "default" | "bordered" | "shadow";
export type VideoState = "default" | "loading" | "paused" | "playing" | "disabled";
export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> { size?: VideoSize; radius?: VideoRadius; variant?: VideoVariant; state?: VideoState; disabled?: boolean; }
