import { videoDefaultProps, videoRadius, videoSizes, videoStates, videoVariants } from "./config";
export function getVideoSize(size: keyof typeof videoSizes = "md") { return videoSizes[size] ?? videoSizes.md; }
export function getVideoVariant(variant: keyof typeof videoVariants = "default") { return videoVariants[variant] ?? videoVariants.default; }
export function getVideoRadius(radius: keyof typeof videoRadius = "md") { return videoRadius[radius] ?? videoRadius.md; }
export function getVideoState(state: keyof typeof videoStates = "default") { return videoStates[state] ?? videoStates.default; }
export function getVideoProps(props: Record<string, unknown> = {}) { return { ...videoDefaultProps, ...props }; }
export function isVideoPlaying(state?: string) { return state === "playing"; }
export function isVideoPaused(state?: string) { return state === "paused"; }
export function isVideoLoading(state?: string) { return state === "loading"; }
export function isVideoDisabled(disabled?: boolean, state?: string) { return Boolean(disabled) || state === "disabled"; }
export function getVideoAriaProps() { return { role: "application" as const }; }
