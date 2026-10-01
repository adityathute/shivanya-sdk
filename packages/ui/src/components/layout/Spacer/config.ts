import type { SpacerElement } from "./Spacer.types";
export const SPACER_DEFAULTS = { as: "div" as SpacerElement, grow: 1, shrink: 1, basis: "auto" as const };
export const spacerElements: Record<SpacerElement, SpacerElement> = { div: "div", span: "span" };
