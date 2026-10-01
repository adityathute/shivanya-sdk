import { forwardRef, memo } from "react";
import type { VideoProps } from "./Video.types";
import { videoDefaultProps } from "./config";
import { getVideoAriaProps, getVideoRadius, getVideoSize, getVideoState, getVideoVariant, isVideoDisabled } from "./utils";
const Video = forwardRef<HTMLVideoElement, VideoProps>(function Video(props, ref) {
  const { className = "", src = videoDefaultProps.src, poster = videoDefaultProps.poster, size = videoDefaultProps.size, variant = videoDefaultProps.variant, radius = videoDefaultProps.radius, state = videoDefaultProps.state, disabled = videoDefaultProps.disabled, controls = videoDefaultProps.controls, autoPlay = videoDefaultProps.autoPlay, loop = videoDefaultProps.loop, muted = videoDefaultProps.muted, playsInline = videoDefaultProps.playsInline, children, ...rest } = props;
  const isDisabled = isVideoDisabled(disabled, state);
  return <video ref={ref} src={src} poster={poster} controls={controls} autoPlay={autoPlay} loop={loop} muted={muted} playsInline={playsInline} className={["shivanya-video", getVideoSize(size), getVideoVariant(variant), getVideoRadius(radius), getVideoState(state), isDisabled ? "videoDisabled" : "", className].filter(Boolean).join(" ")} data-disabled={isDisabled || undefined} {...getVideoAriaProps()} {...rest}>{children}</video>;
});
Video.displayName = "Video"; export default memo(Video);
