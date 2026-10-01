import { getConfigValue } from "../../../utils";

import {
  breadcrumbDefaultProps,
  breadcrumbRadius,
  breadcrumbSeparatorPosition,
  breadcrumbSizes,
  breadcrumbStates,
  breadcrumbVariants,
} from "./config";

export function getBreadcrumbSize(
  size: keyof typeof breadcrumbSizes,
) {
  return getConfigValue(
    breadcrumbSizes,
    size,
  );
}

export function getBreadcrumbVariant(
  variant: keyof typeof breadcrumbVariants,
) {
  return getConfigValue(
    breadcrumbVariants,
    variant,
  );
}

export function getBreadcrumbRadius(
  radius: keyof typeof breadcrumbRadius,
) {
  return getConfigValue(
    breadcrumbRadius,
    radius,
  );
}

export function getBreadcrumbSeparatorPosition(
  position: keyof typeof breadcrumbSeparatorPosition,
) {
  return getConfigValue(
    breadcrumbSeparatorPosition,
    position,
  );
}

export function getBreadcrumbState(
  state: keyof typeof breadcrumbStates,
) {
  return getConfigValue(
    breadcrumbStates,
    state,
  );
}

export function getBreadcrumbProps(
  props: Record<string, unknown> = {},
) {
  return {
    ...breadcrumbDefaultProps,
    ...props,
  };
}

export function isBreadcrumbLoading(
  state: string,
) {
  return state === "loading";
}

export function isBreadcrumbDisabled(
  disabled: boolean,
  state: string,
) {
  return Boolean(
    disabled || state === "disabled",
  );
}

export function getBreadcrumbAriaProps({
  disabled,
}: {
  disabled: boolean;
}) {
  return {
    "aria-disabled":
      disabled || undefined,
    "aria-label": "Breadcrumb",
  };
}