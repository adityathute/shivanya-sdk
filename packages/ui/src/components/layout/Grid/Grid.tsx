import { forwardRef } from "react";
import type { GridProps } from "./Grid.types";
import { getGridProps } from "./utils";
const Grid = forwardRef<HTMLElement, GridProps>(function Grid(props, ref) {
  const { as: Component, columns, rows, gap, columnGap, rowGap, alignItems, justifyItems, alignContent, justifyContent, autoFlow, className = "", children, ...rest } = getGridProps(props);
  const RenderComponent = Component as React.ElementType<any>;

  return <RenderComponent ref={ref} className={["shivanya-grid", columns, rows, gap, columnGap, rowGap, alignItems, justifyItems, alignContent, justifyContent, autoFlow, className].filter(Boolean).join(" ")} {...rest}>{children}</RenderComponent>;
});
Grid.displayName = "Grid";
export { Grid };
export default Grid;
