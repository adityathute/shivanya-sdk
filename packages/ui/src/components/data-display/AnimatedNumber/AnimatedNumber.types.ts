import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface AnimatedNumberProps
  extends Omit<
    HTMLAttributes<HTMLSpanElement>,
    "onAnimationStart" | "onAnimationEnd"
  > {
  value?: number;
  duration?: number;
  decimalPlaces?: number;
  format?: (value: number) => ReactNode;
  animateOnMount?: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
}