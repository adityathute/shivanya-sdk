import type { ContainerElement, ContainerPadding, ContainerSize } from "./Container.types";

export const CONTAINER_DEFAULTS = { as: "div" as ContainerElement, size: "lg" as ContainerSize, padding: "md" as ContainerPadding, centered: true };
export const containerElements: Record<ContainerElement, ContainerElement> = { div: "div", section: "section", article: "article", aside: "aside", header: "header", footer: "footer", main: "main", nav: "nav" };
export const containerSizes: Record<ContainerSize, string> = { sm: "shivanya-container-sm", md: "shivanya-container-md", lg: "shivanya-container-lg", xl: "shivanya-container-xl", full: "shivanya-container-full" };
export const containerPaddings: Record<ContainerPadding, string> = { none: "", xs: "shivanya-container-padding-xs", sm: "shivanya-container-padding-sm", md: "shivanya-container-padding-md", lg: "shivanya-container-padding-lg", xl: "shivanya-container-padding-xl" };
