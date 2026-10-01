import { forwardRef } from "react";
import type { SpacerProps } from "./Spacer.types";
import { getSpacerProps } from "./utils";
const Spacer = forwardRef<HTMLElement, SpacerProps>(function Spacer(props, ref) {
  const { as: Component, grow, shrink, basis, style, className = "", ...rest } = getSpacerProps(props);
  const RenderComponent = Component as React.ElementType<any>;

  return <RenderComponent ref={ref} className={["shivanya-spacer", className].filter(Boolean).join(" ")} style={{ flexGrow: grow, flexShrink: shrink, flexBasis: basis, ...style }} aria-hidden="true" {...rest} />;
});
Spacer.displayName = "Spacer";
export { Spacer };
export default Spacer;
