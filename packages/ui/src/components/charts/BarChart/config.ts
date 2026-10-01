import type { BarChartProps } from "./BarChart.types";

export const barChartSizes = Object.freeze({ xs: 240, sm: 320, md: 420, lg: 560, xl: 720 });
export const barChartStates = Object.freeze({ default: "default", loading: "loading", empty: "empty", disabled: "disabled" });
export const barChartDirections = Object.freeze({ horizontal: "horizontal", vertical: "vertical" });

export const barChartDefaultProps: Required<Pick<BarChartProps, "size" | "direction" | "state" | "labelPosition" | "data" | "showXAxis" | "showYAxis" | "animate" | "animationDuration" | "showGrid" | "showLabels" | "showValues" | "valueType">> = {
  size: "lg",
  direction: "horizontal",
  state: "default",
  labelPosition: "left",
  data: [],
  showXAxis: false,
  showYAxis: false,
  animate: true,
  animationDuration: 700,
  showGrid: true,
  showLabels: true,
  showValues: true,
  valueType: "number",
};
