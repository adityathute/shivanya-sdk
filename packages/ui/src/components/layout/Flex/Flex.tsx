import { forwardRef } from "react";
import type { FlexProps } from "./Flex.types";
import { getFlexProps } from "./utils";
const Flex = forwardRef<HTMLElement, FlexProps>(function Flex(props, ref) {
  const { as: Component, direction, justify, align, wrap, gap, className = "", children, ...rest } = getFlexProps(props);
  const RenderComponent = Component as React.ElementType<any>;

  return <RenderComponent ref={ref} className={["shivanya-flex", direction, justify, align, wrap, gap, className].filter(Boolean).join(" ")} {...rest}>{children}</RenderComponent>;
});
Flex.displayName = "Flex";
export { Flex };
export default Flex;
