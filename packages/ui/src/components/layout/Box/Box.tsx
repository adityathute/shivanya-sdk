import { forwardRef } from "react";
import type { BoxProps } from "./Box.types";
import { getBoxProps } from "./utils";

const Box = forwardRef<HTMLElement, BoxProps>(function Box(props, ref) {
  const { as: Component, padding, margin, rounded, shadow, className = "", children, ...rest } = getBoxProps(props);
  const RenderComponent = Component as React.ElementType<any>;

  const classes = ["shivanya-box", padding, margin, rounded, shadow, className].filter(Boolean).join(" ");

  return <RenderComponent ref={ref} className={classes} {...rest}>{children}</RenderComponent>;
});

Box.displayName = "Box";

export { Box };
export default Box;
