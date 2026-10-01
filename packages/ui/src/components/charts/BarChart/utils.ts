import { barChartDefaultProps, barChartDirections, barChartSizes, barChartStates } from "./config";
import type { BarChartDatum, BarChartProps } from "./BarChart.types";

export function getBarChartProps(props: BarChartProps = {}): BarChartProps & typeof barChartDefaultProps {
  return { ...barChartDefaultProps, ...props };
}
export function getBarChartSize(size: BarChartProps["size"] = "md") {
  return barChartSizes[size ?? "md"] ?? barChartSizes.md;
}
export function getBarChartState(state: BarChartProps["state"] = "default") {
  return state ?? barChartStates.default;
}
export function getChartHeight(size: BarChartProps["size"] = "md") { return getBarChartSize(size); }
export function getChartWidth(size: BarChartProps["size"] = "md") { return getBarChartSize(size); }
export function isLoading(state: BarChartProps["state"]) { return getBarChartState(state) === barChartStates.loading; }
export function isEmpty(state: BarChartProps["state"], data?: BarChartDatum[]) { return getBarChartState(state) === barChartStates.empty || !data?.length; }
export function isDisabled(state: BarChartProps["state"]) { return getBarChartState(state) === barChartStates.disabled; }
export function getMaxValue(data: BarChartDatum[] | undefined, yKey = "value") { if (!data?.length) return 0; return Math.max(...data.map((item) => Number(item[yKey] ?? 0))); }
export function getBarWidth(chartWidth: number, count: number, barGap: number, maxBarWidth: number) { if (!count) return 0; return Math.min((chartWidth - (count - 1) * barGap) / count, maxBarWidth); }
export function getBarHeight(value: number, maxValue: number, chartHeight: number) { if (!maxValue || value <= 0) return 0; return (value / maxValue) * chartHeight; }
export function getBarX(index: number, barWidth: number, barGap: number) { return index * (barWidth + barGap); }
export function getBarY(height: number, chartHeight: number) { return chartHeight - height; }
export function getBarColor(colors: string[] | undefined, index: number) { return colors?.length ? colors[index % colors.length] : `var(--shivanya-chart-color-${(index % 8) + 1})`; }
export function formatValue(value: number | string, formatter?: (value: number | string) => React.ReactNode) { if (formatter) return formatter(value); if (typeof value === "string") return value; return new Intl.NumberFormat().format(value); }
export function formatLabel(label: string, formatter?: (value: string) => React.ReactNode) { return formatter ? formatter(label) : label; }
export function getAriaProps() { return { role: "img" as const, "aria-label": "Bar chart" }; }
export function isVertical(direction: BarChartProps["direction"]) { return direction === barChartDirections.vertical; }
export function isHorizontal(direction: BarChartProps["direction"]) { return direction === barChartDirections.horizontal; }
