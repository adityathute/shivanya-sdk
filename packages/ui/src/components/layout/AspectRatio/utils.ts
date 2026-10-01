import type { AspectRatioProps } from "./AspectRatio.types";
import { ASPECT_RATIO_DEFAULTS, aspectRatioElements, aspectRatios } from "./config";

export function getAspectRatioProps(props: AspectRatioProps = {}) {
  const mergedProps = { ...ASPECT_RATIO_DEFAULTS, ...props };
  return {
    ...mergedProps,
    as: aspectRatioElements[mergedProps.as] ?? ASPECT_RATIO_DEFAULTS.as,
    ratio: mergedProps.ratio ? aspectRatios[mergedProps.ratio] ?? undefined : undefined,
    ratioValue: mergedProps.ratioValue ?? mergedProps.ratio,
  };
}
