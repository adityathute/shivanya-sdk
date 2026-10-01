import { forwardRef } from "react";
import type { StackProps } from "./Stack.types";
import { getStackProps } from "./utils";

const Stack = forwardRef<HTMLElement, StackProps>(function Stack(props, ref) {
  const {
    as: Component,
    direction,
    align,
    justify,
    gap,
    wrap,
    className = "",
    children,
    ...rest
  } = getStackProps(props);

  const RenderComponent = Component as React.ElementType<any>;

  return (
    <RenderComponent
      ref={ref as React.Ref<any>}
      className={["shivanya-stack", direction, align, justify, gap, wrap, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </RenderComponent>
  );
});

Stack.displayName = "Stack";

export { Stack };
export default Stack;