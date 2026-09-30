import type { HTMLAttributes, ReactNode } from "react";

export type StatisticSize =
  | "sm"
  | "md"
  | "lg";

export type StatisticVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type StatisticTrend =
  | "up"
  | "down"
  | "neutral";

export interface StatisticProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "prefix"
  > {
  label?: ReactNode;

  value?: ReactNode;

  prefix?: ReactNode;

  suffix?: ReactNode;

  description?: ReactNode;

  trend?: StatisticTrend;

  trendValue?: ReactNode;

  icon?: ReactNode;

  size?: StatisticSize;

  variant?: StatisticVariant;

  loading?: boolean;

  loadingLabel?: ReactNode;

  trendIcon?: ReactNode;

  fullWidth?: boolean;
}