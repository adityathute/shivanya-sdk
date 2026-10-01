import type { FlexAlign, FlexDirection, FlexElement, FlexGap, FlexJustify, FlexWrap } from "./Flex.types";
export const FLEX_DEFAULTS = { as: "div" as FlexElement, direction: "row" as FlexDirection, justify: "start" as FlexJustify, align: "stretch" as FlexAlign, wrap: "nowrap" as FlexWrap, gap: "none" as FlexGap };
export const flexElements: Record<FlexElement, string> = { div:"div", section:"section", article:"article", aside:"aside", header:"header", footer:"footer", main:"main", nav:"nav", span:"span" };
export const flexDirections: Record<FlexDirection,string> = { row:"shivanya-flex-row", column:"shivanya-flex-column", rowReverse:"shivanya-flex-row-reverse", columnReverse:"shivanya-flex-column-reverse" };
export const flexJustify: Record<FlexJustify,string> = { start:"shivanya-flex-justify-start", center:"shivanya-flex-justify-center", end:"shivanya-flex-justify-end", between:"shivanya-flex-justify-between", around:"shivanya-flex-justify-around", evenly:"shivanya-flex-justify-evenly" };
export const flexAlign: Record<FlexAlign,string> = { start:"shivanya-flex-align-start", center:"shivanya-flex-align-center", end:"shivanya-flex-align-end", stretch:"shivanya-flex-align-stretch", baseline:"shivanya-flex-align-baseline" };
export const flexWrap: Record<FlexWrap,string> = { nowrap:"shivanya-flex-nowrap", wrap:"shivanya-flex-wrap", wrapReverse:"shivanya-flex-wrap-reverse" };
export const flexGaps: Record<FlexGap,string> = { none:"", xs:"shivanya-flex-gap-xs", sm:"shivanya-flex-gap-sm", md:"shivanya-flex-gap-md", lg:"shivanya-flex-gap-lg", xl:"shivanya-flex-gap-xl" };
