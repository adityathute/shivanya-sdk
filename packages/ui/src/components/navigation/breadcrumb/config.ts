export const breadcrumbSizes = Object.freeze({
  xs: "breadcrumbExtraSmall",
  sm: "breadcrumbSmall",
  md: "breadcrumbMedium",
  lg: "breadcrumbLarge",
  xl: "breadcrumbExtraLarge",
});

export const breadcrumbVariants = Object.freeze({
  default: "breadcrumbDefault",
  filled: "breadcrumbFilled",
  outlined: "breadcrumbOutlined",
  ghost: "breadcrumbGhost",
});

export const breadcrumbRadius = Object.freeze({
  none: "breadcrumbRadiusNone",
  sm: "breadcrumbRadiusSmall",
  md: "breadcrumbRadiusMedium",
  lg: "breadcrumbRadiusLarge",
  full: "breadcrumbRadiusFull",
});

export const breadcrumbSeparatorPosition = Object.freeze({
  start: "breadcrumbSeparatorStart",
  end: "breadcrumbSeparatorEnd",
});

export const breadcrumbStates = Object.freeze({
  default: "breadcrumbDefaultState",
  loading: "breadcrumbLoading",
  disabled: "breadcrumbDisabled",
});

export const breadcrumbDefaultProps = Object.freeze({
  size: "md",
  variant: "default",
  radius: "md",
  separator: "/",
  separatorPosition: "end",
  maxItems: 0,
  state: "default",
  disabled: false,
});

export type BreadcrumbSize =
  keyof typeof breadcrumbSizes;

export type BreadcrumbVariant =
  keyof typeof breadcrumbVariants;

export type BreadcrumbRadius =
  keyof typeof breadcrumbRadius;

export type BreadcrumbSeparatorPosition =
  keyof typeof breadcrumbSeparatorPosition;

export type BreadcrumbState =
  keyof typeof breadcrumbStates;