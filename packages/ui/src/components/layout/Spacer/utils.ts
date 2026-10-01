import type { SpacerProps } from "./Spacer.types";
import { SPACER_DEFAULTS, spacerElements } from "./config";
export function getSpacerProps(props: SpacerProps = {}): SpacerProps { const mergedProps = { ...SPACER_DEFAULTS, ...props }; return { ...mergedProps, as: spacerElements[mergedProps.as] ?? SPACER_DEFAULTS.as }; }
