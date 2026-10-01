import { DEFAULT_LABEL_WIDTH, DEFAULT_MIN_HEIGHT, DEFAULT_PADDING, DEFAULT_ROW_HEIGHT, DEFAULT_VALUE_WIDTH } from "../constants";
import type { BarChartDatum, BarChartDirection, BarChartPadding, BarChartLabelPosition } from "../BarChart.types";
export default function useChartDimensions({ width, data, padding = DEFAULT_PADDING, rowHeight = DEFAULT_ROW_HEIGHT, direction = "horizontal", labelPosition = "left" }: { width: number; data: BarChartDatum[]; padding?: BarChartPadding; rowHeight?: number; direction?: BarChartDirection; labelPosition?: BarChartLabelPosition }) {
  if (direction === "vertical") {
    const chartHeight = 360;
    return { width, height: chartHeight, chartWidth: width - padding.left - padding.right, chartHeight: chartHeight - padding.top - padding.bottom, labelWidth: 0, valueWidth: 0, padding, rowHeight };
  }
  const labelWidth = labelPosition === "top" ? 0 : DEFAULT_LABEL_WIDTH;
  const adjustedRowHeight = labelPosition === "top" ? rowHeight + 18 : rowHeight;
  const contentHeight = padding.top + padding.bottom + data.length * adjustedRowHeight;
  const chartHeight = Math.max(data.length <= 2 ? contentHeight : DEFAULT_MIN_HEIGHT, contentHeight);
  const drawableWidth = width - padding.left - padding.right - labelWidth - DEFAULT_VALUE_WIDTH;
  return { width, height: chartHeight, chartWidth: Math.max(0, drawableWidth), chartHeight: chartHeight - padding.top - padding.bottom, labelWidth, valueWidth: DEFAULT_VALUE_WIDTH, padding, rowHeight: adjustedRowHeight };
}
