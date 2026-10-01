import type { CSSProperties, HTMLAttributes } from "react";

export type BarChartDirection = "horizontal" | "vertical";
export type BarChartState = "default" | "loading" | "empty" | "disabled";
export type BarChartLabelPosition = "left" | "top";
export type BarChartValueType = "number" | "seconds";
export type BarChartSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface BarChartDatum {
  id?: string | number;
  label?: string;
  name?: string;
  value?: number | string;
  type?: BarChartValueType;
  color?: string;
  [key: string]: unknown;
}

export interface BarChartPadding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface BarChartProps extends HTMLAttributes<HTMLDivElement> {
  data?: BarChartDatum[];
  size?: BarChartSize;
  direction?: BarChartDirection;
  state?: BarChartState;
  labelPosition?: BarChartLabelPosition;
  padding?: BarChartPadding;
  rowHeight?: number;
  showGrid?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showLabels?: boolean;
  showValues?: boolean;
  animate?: boolean;
  animationDuration?: number;
  valueFormatter?: (value: number | string) => React.ReactNode;
  valueType?: BarChartValueType;
  className?: string;
  style?: CSSProperties;
}

export interface ChartDimensions {
  width: number;
  height: number;
  chartWidth: number;
  chartHeight: number;
  labelWidth: number;
  valueWidth: number;
  padding: BarChartPadding;
  rowHeight: number;
}
