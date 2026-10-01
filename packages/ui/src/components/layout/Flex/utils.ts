import type { FlexProps } from "./Flex.types";
import { FLEX_DEFAULTS, flexAlign, flexDirections, flexElements, flexGaps, flexJustify, flexWrap } from "./config";
export function getFlexProps(props: FlexProps = {}) {
  const mergedProps = { ...FLEX_DEFAULTS, ...props };
  return { ...mergedProps, as: flexElements[mergedProps.as] ?? FLEX_DEFAULTS.as, direction: flexDirections[mergedProps.direction], justify: flexJustify[mergedProps.justify], align: flexAlign[mergedProps.align], wrap: flexWrap[mergedProps.wrap], gap: flexGaps[mergedProps.gap] };
}
