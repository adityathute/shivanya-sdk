import { donutChartDefaultColors, donutChartDefaultProps, donutChartSizes, donutChartStates } from "./config";
import type { DonutChartDatum, DonutChartProps, DonutChartSegment } from "./DonutChart.types";
export function getDonutChartProps(props: DonutChartProps = {}) { return { ...donutChartDefaultProps, ...props } }
export function getChartSize(size: DonutChartProps["size"] = "md") { return donutChartSizes[size ?? "md"] ?? donutChartSizes.md }
export function isLoading(state: DonutChartProps["state"]) { return state === donutChartStates.loading }
export function isEmpty(state: DonutChartProps["state"], data?: DonutChartDatum[]) { return state === donutChartStates.empty || !Array.isArray(data) || data.length === 0 }
export function isDisabled(state: DonutChartProps["state"]) { return state === donutChartStates.disabled }
export function getTotal(data: DonutChartDatum[] = []) { return data.reduce((total, item) => total + Number(item.value ?? 0), 0) }
export function normalizeData(data: DonutChartDatum[] = [], colors: string[] = donutChartDefaultColors as unknown as string[]) { const total = getTotal(data); return data.map((item, index) => { const value = Number(item.value ?? 0); return { id: item.id ?? index, label: item.label ?? item.name ?? "", value, percentage: total > 0 ? value / total : 0, color: item.color ?? colors[index % colors.length] } }) }
export function getCenter(size: number) { return size / 2 }
export function getOuterRadius(size: number, outerRadius?: number | null) { return outerRadius ?? size * .36 }
export function getInnerRadius(size: number, innerRadius?: number | null) { return innerRadius ?? size * .24 }
export function getStrokeWidth(outerRadius: number, innerRadius: number) { return outerRadius - innerRadius }
export function getCircumference(radius: number) { return 2 * Math.PI * radius }
export function buildSegments(
  data: DonutChartDatum[] = [],
  radius: number,
  colors: string[] = donutChartDefaultColors as unknown as string[],
) {
  const normalized = normalizeData(data, colors);
  const circumference = getCircumference(radius);

  let offset = 0;

  return normalized.map((segment, index) => {
    const length =
      segment.percentage * circumference;

    const gap =
      circumference - length;

    const result = {
      ...segment,
      index,
      dashArray: `${length} ${gap}`,
      dashOffset: -offset,
      circumference,
    };

    offset += length;

    return result as DonutChartSegment;
  });
}
export function formatValue(value: number | string, formatter?: ((value: number | string) => React.ReactNode) | null) { if (formatter) return formatter(value); return new Intl.NumberFormat().format(Number(value) || 0) }
export function formatLabel(label: string, formatter?: ((value: string) => React.ReactNode) | null) { return formatter ? formatter(label) : label }
export function formatPercentage(percentage: number) { return `${(percentage * 100).toFixed(1)}%` }
export function getSegmentAriaLabel(segment: DonutChartSegment) { return `${segment.label}: ${segment.value} (${formatPercentage(segment.percentage)})` }
export function getSvgProps() { return { role: "img" as const, "aria-roledescription": "donut chart" } }
