import type { CSSProperties, HTMLAttributes } from "react";

export type AspectRatioElement =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "main"
  | "nav";

export type AspectRatioValue = "1/1" | "4/3" | "3/2" | "16/9" | "21/9";

export interface AspectRatioProps extends HTMLAttributes<HTMLElement> {
  as?: AspectRatioElement;
  ratio?: AspectRatioValue;
  ratioValue?: string | number;
  style?: CSSProperties;
}
