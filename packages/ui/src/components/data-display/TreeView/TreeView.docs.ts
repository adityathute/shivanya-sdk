export const treeViewDocs = {
  name: "TreeView",
  category: "Data Display",
  description:
    "Hierarchical content display with expandable branches and selectable nodes.",

  importCode:
    'import { TreeView } from "shivanya-ui";',

  usageCode: `<TreeView
  nodes={[
    {
      key: "src",
      label: "src",
      children: [
        {
          key: "components",
          label: "components",
        },
        {
          key: "pages",
          label: "pages",
        },
      ],
    },
  ]}
/>`,

  props: [
    {
      name: "nodes",
      type: "TreeNode[]",
      defaultValue: "undefined",
      description:
        "Hierarchical tree data.",
    },
    {
      name: "expandedKeys",
      type: "string[]",
      defaultValue: "undefined",
      description:
        "Controlled expanded node keys.",
    },
    {
      name: "defaultExpandedKeys",
      type: "string[]",
      defaultValue: "[]",
      description:
        "Initial expanded node keys.",
    },
    {
      name: "selectedKeys",
      type: "string[]",
      defaultValue: "undefined",
      description:
        "Controlled selected node keys.",
    },
    {
      name: "defaultSelectedKeys",
      type: "string[]",
      defaultValue: "[]",
      description:
        "Initial selected node keys.",
    },
    {
      name: "selectable",
      type: "boolean",
      defaultValue: "true",
      description:
        "Enables node selection.",
    },
    {
      name: "multiSelect",
      type: "boolean",
      defaultValue: "false",
      description:
        "Allows multiple nodes to be selected.",
    },
    {
      name: "expandable",
      type: "boolean",
      defaultValue: "true",
      description:
        "Enables expanding and collapsing nodes.",
    },
    {
      name: "showIcons",
      type: "boolean",
      defaultValue: "true",
      description:
        "Displays node icons when provided.",
    },
    {
      name: "showLines",
      type: "boolean",
      defaultValue: "true",
      description:
        "Displays connecting lines between tree levels.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls tree node density.",
    },
    {
      name: "variant",
      type: '"default" | "filled" | "outlined"',
      defaultValue: '"default"',
      description:
        "Controls the tree container appearance.",
    },
    {
      name: "onExpandedKeysChange",
      type: "(keys: string[]) => void",
      defaultValue: "undefined",
      description:
        "Called when the expanded node keys change.",
    },
    {
      name: "onSelectedKeysChange",
      type: "(keys: string[]) => void",
      defaultValue: "undefined",
      description:
        "Called when the selected node keys change.",
    },
  ],
} as const;