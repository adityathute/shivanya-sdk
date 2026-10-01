import { forwardRef } from "react";
import type { ContainerProps } from "./Container.types";
import { getContainerProps } from "./utils";

const Container = forwardRef<HTMLElement, ContainerProps>(function Container(props, ref) {
  const { as: Component, size, padding, centered, className = "", children, ...rest } = getContainerProps(props);
  const RenderComponent = Component as React.ElementType<any>;

  const classes = ["shivanya-container", centered ? "shivanya-container-centered" : "", size, padding, className].filter(Boolean).join(" ");
  return <RenderComponent ref={ref} className={classes} {...rest}>{children}</RenderComponent>;
});

Container.displayName = "Container";
export { Container };
export default Container;
