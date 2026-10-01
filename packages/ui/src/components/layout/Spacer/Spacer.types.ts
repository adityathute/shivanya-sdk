import type { CSSProperties, HTMLAttributes } from "react";
export type SpacerElement = "div" | "span";
export interface SpacerProps extends HTMLAttributes<HTMLElement> { as?: SpacerElement; grow?: number; shrink?: number; basis?: CSSProperties["flexBasis"]; style?: CSSProperties; }
