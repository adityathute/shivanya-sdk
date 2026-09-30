import {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import type { AnimatedNumberProps } from "./AnimatedNumber.types";

function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

export const AnimatedNumber = forwardRef<
  HTMLSpanElement,
  AnimatedNumberProps
>(function AnimatedNumber(
  {
    value = 0,
    duration = 700,
    decimalPlaces = 0,
    format = (number) => number,
    animateOnMount = false,
    onAnimationStart,
    onAnimationEnd,
    className,
    ...props
  },
  ref,
) {
  const [displayValue, setDisplayValue] = useState(
    animateOnMount ? 0 : value,
  );

  const previousValue = useRef(
    animateOnMount ? 0 : value,
  );

  const frame = useRef<number | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }

    if (!mounted.current) {
      mounted.current = true;

      if (!animateOnMount) {
        previousValue.current = value;
        setDisplayValue(value);
        return;
      }
    }

    const from = previousValue.current;
    const to = value;

    if (from === to) {
      setDisplayValue(to);
      return;
    }

    previousValue.current = to;

    if (duration <= 0) {
      onAnimationStart?.();
      setDisplayValue(to);
      onAnimationEnd?.();
      return;
    }

    const startTime = performance.now();

    onAnimationStart?.();

    const update = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      const easedProgress = easeOutCubic(progress);

      setDisplayValue(
        from + (to - from) * easedProgress,
      );

      if (progress < 1) {
        frame.current =
          requestAnimationFrame(update);
      } else {
        frame.current = null;
        setDisplayValue(to);
        onAnimationEnd?.();
      }
    };

    frame.current = requestAnimationFrame(update);

    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };
  }, [
    value,
    duration,
    animateOnMount,
    onAnimationStart,
    onAnimationEnd,
  ]);

  const displayNumber =
  decimalPlaces > 0
    ? Number(displayValue.toFixed(decimalPlaces))
    : Math.round(displayValue);

  return (
    <span
      ref={ref}
      {...props}
      className={[
        "shivanya-animated-number",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
    {format(displayNumber)}
    </span>
  );
});

AnimatedNumber.displayName = "AnimatedNumber";