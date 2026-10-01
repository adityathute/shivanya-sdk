import { forwardRef, memo } from "react";
import type { ImageProps } from "./Image.types";
import { imageDefaultProps } from "./config";
import { getImageAriaProps, getImageFit, getImageRadius, getImageSize, getImageState, getImageVariant, isImageDisabled } from "./utils";
const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(props, ref) {
  const { className = "", src = imageDefaultProps.src, alt = imageDefaultProps.alt, size = imageDefaultProps.size, fit = imageDefaultProps.fit, radius = imageDefaultProps.radius, variant = imageDefaultProps.variant, state = imageDefaultProps.state, loading = imageDefaultProps.loading, disabled = imageDefaultProps.disabled, ...rest } = props;
  const isDisabled = isImageDisabled(disabled, state);
  return <img ref={ref} src={src} alt={alt} loading={loading} className={["shivanya-image", getImageSize(size), getImageFit(fit), getImageRadius(radius), getImageVariant(variant), getImageState(state), isDisabled ? "imageDisabled" : "", className].filter(Boolean).join(" ")} data-disabled={isDisabled || undefined} {...getImageAriaProps(alt)} {...rest} />;
});
Image.displayName = "Image"; export default memo(Image);
