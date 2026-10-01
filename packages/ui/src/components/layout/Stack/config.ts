import type { StackAlign, StackDirection, StackElement, StackGap, StackJustify } from "./Stack.types";
export const STACK_DEFAULTS = { as:"div" as StackElement, direction:"column" as StackDirection, gap:"md" as StackGap, align:"stretch" as StackAlign, justify:"start" as StackJustify, wrap:false };
export const stackElements: Record<StackElement,string> = { div:"div", section:"section", article:"article", aside:"aside", header:"header", footer:"footer", main:"main", nav:"nav", span:"span" };
export const stackDirections: Record<StackDirection,string> = { row:"shivanya-stack-row", column:"shivanya-stack-column" };
export const stackAlignments: Record<StackAlign,string> = { start:"shivanya-stack-align-start", center:"shivanya-stack-align-center", end:"shivanya-stack-align-end", stretch:"shivanya-stack-align-stretch", baseline:"shivanya-stack-align-baseline" };
export const stackJustify: Record<StackJustify,string> = { start:"shivanya-stack-justify-start", center:"shivanya-stack-justify-center", end:"shivanya-stack-justify-end", between:"shivanya-stack-justify-between", around:"shivanya-stack-justify-around", evenly:"shivanya-stack-justify-evenly" };
export const stackGaps: Record<StackGap,string> = { none:"", xs:"shivanya-stack-gap-xs", sm:"shivanya-stack-gap-sm", md:"shivanya-stack-gap-md", lg:"shivanya-stack-gap-lg", xl:"shivanya-stack-gap-xl" };
