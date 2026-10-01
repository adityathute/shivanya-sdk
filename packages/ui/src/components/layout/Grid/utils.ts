import type { GridProps } from "./Grid.types";
import { GRID_DEFAULTS, gridAlignContent, gridAlignItems, gridAutoFlow, gridColumnGaps, gridColumns, gridElements, gridGaps, gridJustifyContent, gridJustifyItems, gridRowGaps, gridRows } from "./config";
export function getGridProps(props: GridProps = {}) {
  const mergedProps = { ...GRID_DEFAULTS, ...props };
  return { ...mergedProps, as: gridElements[mergedProps.as] ?? GRID_DEFAULTS.as, columns: gridColumns[String(mergedProps.columns)] ?? gridColumns[String(GRID_DEFAULTS.columns)], rows: gridRows[String(mergedProps.rows)] ?? "", gap: gridGaps[mergedProps.gap], columnGap: gridColumnGaps[mergedProps.columnGap], rowGap: gridRowGaps[mergedProps.rowGap], alignItems: gridAlignItems[mergedProps.alignItems], justifyItems: gridJustifyItems[mergedProps.justifyItems], alignContent: gridAlignContent[mergedProps.alignContent], justifyContent: gridJustifyContent[mergedProps.justifyContent], autoFlow: gridAutoFlow[mergedProps.autoFlow] };
}
