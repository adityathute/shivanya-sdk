import type { StackProps } from "./Stack.types";
import { STACK_DEFAULTS, stackAlignments, stackDirections, stackElements, stackGaps, stackJustify } from "./config";
export function getStackProps(props: StackProps = {}) { const mergedProps = { ...STACK_DEFAULTS, ...props }; return { ...mergedProps, as: stackElements[mergedProps.as] ?? STACK_DEFAULTS.as, direction: stackDirections[mergedProps.direction], align: stackAlignments[mergedProps.align], justify: stackJustify[mergedProps.justify], gap: stackGaps[mergedProps.gap], wrap: mergedProps.wrap ? "shivanya-stack-wrap" : "" }; }
