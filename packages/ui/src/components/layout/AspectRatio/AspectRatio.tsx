import { forwardRef } from "react";
import type { CSSProperties } from "react";
import type { AspectRatioProps } from "./AspectRatio.types";
import { getAspectRatioProps } from "./utils";

const AspectRatio = forwardRef<HTMLElement, AspectRatioProps>(function AspectRatio(props, ref) {
  const {
    as: Component,
    ratio,
    ratioValue,
    style,
    className = "",
    children,
    ...rest
  } = getAspectRatioProps(props);

  const RenderComponent = Component as React.ElementType<any>;

  const classes = ["shivanya-aspect-ratio", ratio, className].filter(Boolean).join(" ");
  const ratioStyle: CSSProperties = ratio ? {} : { aspectRatio: ratioValue };

  return (
    <RenderComponent ref={ref} className={classes} style={{ ...ratioStyle, ...style }} {...rest}>
      {children}
    </RenderComponent>
  );
});

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
export default AspectRatio;
