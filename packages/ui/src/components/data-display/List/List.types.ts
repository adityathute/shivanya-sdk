import type {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";

export type ListSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type ListVariant =
  | "default"
  | "bordered"
  | "filled"
  | "ghost";

export type ListOrientation =
  | "vertical"
  | "horizontal";

export type ListAlign =
  | "start"
  | "center"
  | "end"
  | "stretch";

export type ListJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export type ListDivider =
  | "none"
  | "solid"
  | "dashed";

export type ListWrap =
  | "nowrap"
  | "wrap";

export type ListState =
  | "default"
  | "loading"
  | "disabled";

export interface ListProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: ListSize;
  variant?: ListVariant;
  orientation?: ListOrientation;
  align?: ListAlign;
  justify?: ListJustify;
  divider?: ListDivider;
  wrap?: ListWrap;
  state?: ListState;
  disabled?: boolean;
  children?: ReactNode;
}

export interface ListItemProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title" | "onClick" | "onKeyDown"
  > {
  leading?: ReactNode;
  trailing?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;

  disabled?: boolean;
  selected?: boolean;

  interactive?: boolean;

  onClick?: (
    event: MouseEvent<HTMLDivElement>,
  ) => void;

  onKeyDown?: (
    event: KeyboardEvent<HTMLDivElement>,
  ) => void;

  children?: ReactNode;
}