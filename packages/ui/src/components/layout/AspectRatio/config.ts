import type { AspectRatioElement, AspectRatioValue } from "./AspectRatio.types";

export const ASPECT_RATIO_DEFAULTS = {
  as: "div" as AspectRatioElement,
  ratio: "16/9" as AspectRatioValue,
};

export const aspectRatioElements: Record<AspectRatioElement, AspectRatioElement> = {
  div: "div",
  section: "section",
  article: "article",
  aside: "aside",
  header: "header",
  footer: "footer",
  main: "main",
  nav: "nav",
};

export const aspectRatios: Record<AspectRatioValue, string> = {
  "1/1": "shivanya-aspect-ratio-1x1",
  "4/3": "shivanya-aspect-ratio-4x3",
  "3/2": "shivanya-aspect-ratio-3x2",
  "16/9": "shivanya-aspect-ratio-16x9",
  "21/9": "shivanya-aspect-ratio-21x9",
};
