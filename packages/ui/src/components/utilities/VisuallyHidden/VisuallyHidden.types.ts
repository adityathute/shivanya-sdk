import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type VisuallyHiddenElement =
  | "span"
  | "div"
  | "p"
  | "label";

export type VisuallyHiddenState =
  | "default"
  | "visible"
  | "hidden"
  | "disabled";

export interface VisuallyHiddenProps
  extends HTMLAttributes<HTMLElement> {
  as?: VisuallyHiddenElement;
  children?: ReactNode;
  state?: VisuallyHiddenState;
  disabled?: boolean;
}
