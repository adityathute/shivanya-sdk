import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface TreeNode {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  children?: TreeNode[];
}

export type TreeViewSize = "sm" | "md" | "lg";

export type TreeViewVariant =
  | "default"
  | "filled"
  | "outlined";

export interface TreeViewProps
  extends HTMLAttributes<HTMLDivElement> {
  nodes?: TreeNode[];

  expandedKeys?: string[];
  defaultExpandedKeys?: string[];

  selectedKeys?: string[];
  defaultSelectedKeys?: string[];

  selectable?: boolean;
  multiSelect?: boolean;

  expandable?: boolean;

  showIcons?: boolean;
  showLines?: boolean;

  size?: TreeViewSize;
  variant?: TreeViewVariant;

  onExpandedKeysChange?: (
    keys: string[],
  ) => void;

  onSelectedKeysChange?: (
    keys: string[],
  ) => void;

  children?: ReactNode;
}

export interface TreeItemProps
  extends HTMLAttributes<HTMLDivElement> {
  nodeKey: string;
  label: ReactNode;

  icon?: ReactNode;

  disabled?: boolean;

  children?: ReactNode;

  level?: number;

  expanded?: boolean;
  selected?: boolean;

  onToggle?: () => void;
  onSelect?: () => void;

  showIcons?: boolean;
}