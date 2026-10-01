import type { BoxElement, BoxRounded, BoxShadow, BoxSpacing } from "./Box.types";

export const BOX_DEFAULTS = {
  as: "div" as BoxElement,
  padding: "none" as BoxSpacing,
  margin: "none" as BoxSpacing,
  rounded: "none" as BoxRounded,
  shadow: "none" as BoxShadow,
};

export const boxElements: Record<BoxElement, BoxElement> = {
  div: "div", section: "section", article: "article", aside: "aside", header: "header", footer: "footer", main: "main", nav: "nav", span: "span",
};

export const boxPaddings: Record<BoxSpacing, string> = { none: "", xs: "shivanya-box-padding-xs", sm: "shivanya-box-padding-sm", md: "shivanya-box-padding-md", lg: "shivanya-box-padding-lg", xl: "shivanya-box-padding-xl" };
export const boxMargins: Record<BoxSpacing, string> = { none: "", xs: "shivanya-box-margin-xs", sm: "shivanya-box-margin-sm", md: "shivanya-box-margin-md", lg: "shivanya-box-margin-lg", xl: "shivanya-box-margin-xl" };
export const boxRounded: Record<BoxRounded, string> = { none: "", sm: "shivanya-box-rounded-sm", md: "shivanya-box-rounded-md", lg: "shivanya-box-rounded-lg", xl: "shivanya-box-rounded-xl", full: "shivanya-box-rounded-full" };
export const boxShadows: Record<BoxShadow, string> = { none: "", sm: "shivanya-box-shadow-sm", md: "shivanya-box-shadow-md", lg: "shivanya-box-shadow-lg" };
