import type { BoxProps } from "./Box.types";
import { BOX_DEFAULTS, boxElements, boxMargins, boxPaddings, boxRounded, boxShadows } from "./config";

export function getBoxProps(props: BoxProps = {}) {
  const mergedProps = { ...BOX_DEFAULTS, ...props };
  return {
    ...mergedProps,
    as: boxElements[mergedProps.as] ?? BOX_DEFAULTS.as,
    padding: boxPaddings[mergedProps.padding] ?? "",
    margin: boxMargins[mergedProps.margin] ?? "",
    rounded: boxRounded[mergedProps.rounded] ?? "",
    shadow: boxShadows[mergedProps.shadow] ?? "",
  };
}
