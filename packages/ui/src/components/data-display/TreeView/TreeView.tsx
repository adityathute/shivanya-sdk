"use client";
import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import type {
  TreeItemProps,
  TreeNode,
  TreeViewProps,
} from "./TreeView.types";

interface TreeViewContextValue {
  expanded: string[];
  selected: string[];

  toggle: (key: string) => void;
  select: (key: string) => void;

  selectable: boolean;
  multiSelect: boolean;
  expandable: boolean;
  showIcons: boolean;
}

const TreeViewContext =
  createContext<TreeViewContextValue | null>(null);

function useTreeViewContext() {
  return useContext(TreeViewContext);
}

const TreeViewBase = forwardRef<
  HTMLDivElement,
  TreeViewProps
>(function TreeView(
  {
    nodes,

    expandedKeys: controlledExpanded,
    defaultExpandedKeys = [],

    selectedKeys: controlledSelected,
    defaultSelectedKeys = [],

    selectable = true,
    multiSelect = false,

    expandable = true,

    showIcons = true,
    showLines = true,

    size = "md",
    variant = "default",

    onExpandedKeysChange,
    onSelectedKeysChange,

    children,
    className,
    ...props
  },
  ref,
) {
  const [expandedState, setExpandedState] =
    useState<string[]>(defaultExpandedKeys);

  const [selectedState, setSelectedState] =
    useState<string[]>(defaultSelectedKeys);

  const expanded =
    controlledExpanded ?? expandedState;

  const selected =
    controlledSelected ?? selectedState;

  const toggle = useCallback(
    (key: string) => {
      if (!expandable) {
        return;
      }

      const next = expanded.includes(key)
        ? expanded.filter((item) => item !== key)
        : [...expanded, key];

      if (controlledExpanded === undefined) {
        setExpandedState(next);
      }

      onExpandedKeysChange?.(next);
    },
    [
      controlledExpanded,
      expandable,
      expanded,
      onExpandedKeysChange,
    ],
  );

  const select = useCallback(
    (key: string) => {
      if (!selectable) {
        return;
      }

      let next: string[];

      if (multiSelect) {
        next = selected.includes(key)
          ? selected.filter((item) => item !== key)
          : [...selected, key];
      } else {
        next = [key];
      }

      if (controlledSelected === undefined) {
        setSelectedState(next);
      }

      onSelectedKeysChange?.(next);
    },
    [
      controlledSelected,
      multiSelect,
      onSelectedKeysChange,
      selectable,
      selected,
    ],
  );

  const contextValue = useMemo<TreeViewContextValue>(
    () => ({
      expanded,
      selected,
      toggle,
      select,
      selectable,
      multiSelect,
      expandable,
      showIcons,
    }),
    [
      expanded,
      selected,
      toggle,
      select,
      selectable,
      multiSelect,
      expandable,
      showIcons,
    ],
  );

  const classes = [
    "shivanya-tree",
    `shivanya-tree-${size}`,
    `shivanya-tree-${variant}`,
    showLines ? "has-lines" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <TreeViewContext.Provider value={contextValue}>
      <div
        ref={ref}
        {...props}
        className={classes}
        role="tree"
        aria-multiselectable={
          multiSelect || undefined
        }
      >
        {nodes
          ? nodes.map((node) => (
              <TreeNodeRenderer
                key={node.key}
                node={node}
              />
            ))
          : Children.map(
              children,
              (child) =>
                isValidElement<TreeItemProps>(child)
                  ? child
                  : child,
            )}
      </div>
    </TreeViewContext.Provider>
  );
});

function TreeNodeRenderer({
  node,
}: {
  node: TreeNode;
}) {
  return (
    <TreeItem
      nodeKey={node.key}
      label={node.label}
      icon={node.icon}
      disabled={node.disabled}
    >
      {node.children?.map((child) => (
        <TreeNodeRenderer
          key={child.key}
          node={child}
        />
      ))}
    </TreeItem>
  );
}

export const TreeItem = forwardRef<
  HTMLDivElement,
  TreeItemProps
>(function TreeItem(
  {
    nodeKey,
    label,
    icon,

    disabled = false,

    children,

    level = 0,

    expanded: expandedProp,
    selected: selectedProp,

    onToggle,
    onSelect,

    showIcons: showIconsProp,

    className,
    ...props
  },
  ref,
) {
  const context = useTreeViewContext();

  const hasChildren = Children.count(children) > 0;

  const expanded =
    expandedProp ??
    context?.expanded.includes(nodeKey) ??
    false;

  const selected =
    selectedProp ??
    context?.selected.includes(nodeKey) ??
    false;

  const selectable =
    context?.selectable ?? true;

  const expandable =
    context?.expandable ?? true;

  const showIcons =
    showIconsProp ??
    context?.showIcons ??
    true;

  const handleToggle = () => {
    if (disabled || !hasChildren || !expandable) {
      return;
    }

    onToggle?.();

    if (!onToggle) {
      context?.toggle(nodeKey);
    }
  };

  const handleSelect = () => {
    if (disabled || !selectable) {
      return;
    }

    onSelect?.();

    if (!onSelect) {
      context?.select(nodeKey);
    }
  };

  const itemClasses = [
    "shivanya-tree-item",
    selected ? "is-selected" : "",
    disabled ? "is-disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const toggleLabel = hasChildren
    ? expanded
      ? "Collapse"
      : "Expand"
    : undefined;

  return (
    <div
      ref={ref}
      {...props}
      className={[
        "shivanya-tree-node",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="treeitem"
      aria-expanded={
        hasChildren ? expanded : undefined
      }
      aria-selected={
        selectable ? selected : undefined
      }
      aria-disabled={disabled || undefined}
      data-tree-key={nodeKey}
    >
      <div
        className={itemClasses}
        style={{
          paddingLeft: level * 20 + 8,
        }}
      >
        <button
          type="button"
          className="shivanya-tree-toggle"
          onClick={handleToggle}
          disabled={
            disabled ||
            !hasChildren ||
            !expandable
          }
          aria-label={toggleLabel}
          tabIndex={-1}
        >
          {hasChildren
            ? expanded
              ? "▼"
              : "▶"
            : "•"}
        </button>

        <button
          type="button"
          className="shivanya-tree-label"
          onClick={handleSelect}
          disabled={
            disabled || !selectable
          }
          aria-pressed={
            selectable
              ? selected
              : undefined
          }
        >
          {showIcons && icon && (
            <span
              className="shivanya-tree-icon"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}

          <span className="shivanya-tree-label-text">
            {label}
          </span>
        </button>
      </div>

      {hasChildren && expanded && (
        <div
          className="shivanya-tree-children"
          role="group"
        >
          {Children.map(
            children,
            (child) =>
              isValidElement<TreeItemProps>(
                child,
              )
                ? cloneElement(child, {
                    level: level + 1,
                  })
                : child,
          )}
        </div>
      )}
    </div>
  );
});

TreeItem.displayName = "TreeItem";

type TreeViewComponent =
  typeof TreeViewBase & {
    Item: typeof TreeItem;
  };

export const TreeView =
  TreeViewBase as TreeViewComponent;

TreeView.displayName = "TreeView";

TreeView.Item = TreeItem;
