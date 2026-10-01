import type { BarChartPadding } from "./BarChart.types";
export function getRowY(index: number, rowHeight: number, padding: BarChartPadding) { return padding.top + index * rowHeight; }
export function getBarStartX(labelWidth: number, padding: BarChartPadding) { return padding.left + labelWidth; }
export function getValueX(width: number, valueWidth: number, padding: BarChartPadding) { return width - padding.right - valueWidth; }
