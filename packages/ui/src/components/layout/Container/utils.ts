import type { ContainerProps } from "./Container.types";
import { CONTAINER_DEFAULTS, containerElements, containerPaddings, containerSizes } from "./config";

export function getContainerProps(props: ContainerProps = {}) {
  const mergedProps = { ...CONTAINER_DEFAULTS, ...props };
  return {
    ...mergedProps,
    as: containerElements[mergedProps.as] ?? CONTAINER_DEFAULTS.as,
    size: containerSizes[mergedProps.size] ?? containerSizes[CONTAINER_DEFAULTS.size],
    padding: containerPaddings[mergedProps.padding] ?? "",
  };
}
