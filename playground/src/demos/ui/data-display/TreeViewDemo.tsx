import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  TreeView,
  treeViewDocs,
} from "shivanya-ui";

export default function TreeViewDemo() {
  const nodes = [
    {
      key: "src",
      label: "src",
      icon: "📁",
      children: [
        {
          key: "components",
          label: "components",
          icon: "📁",
          children: [
            {
              key: "button",
              label: "Button",
              icon: "◻",
            },
            {
              key: "input",
              label: "Input",
              icon: "◻",
            },
            {
              key: "modal",
              label: "Modal",
              icon: "◻",
            },
          ],
        },
        {
          key: "pages",
          label: "pages",
          icon: "📁",
        },
        {
          key: "utils",
          label: "utils",
          icon: "📁",
        },
      ],
    },
    {
      key: "packages",
      label: "packages",
      icon: "📁",
      children: [
        {
          key: "ui",
          label: "ui",
          icon: "📦",
        },
        {
          key: "core",
          label: "core",
          icon: "📦",
        },
      ],
    },
    {
      key: "package",
      label: "package.json",
      icon: "◇",
    },
    {
      key: "readme",
      label: "README.md",
      icon: "▤",
    },
  ];

  const disabledNodes = [
    {
      key: "project",
      label: "project",
      icon: "📁",
      children: [
        {
          key: "active",
          label: "Active file",
          icon: "▤",
        },
        {
          key: "disabled",
          label: "Disabled file",
          icon: "▤",
          disabled: true,
        },
      ],
    },
  ];

  return (
    <section className="demo">
      <DemoHeader
        title={treeViewDocs.name}
        description={treeViewDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={nodes}
            defaultExpandedKeys={[
              "src",
              "components",
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Selected">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={nodes}
            defaultExpandedKeys={[
              "src",
              "components",
            ]}
            defaultSelectedKeys={["button"]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Multi Select">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={nodes}
            multiSelect
            defaultExpandedKeys={[
              "src",
              "components",
            ]}
            defaultSelectedKeys={[
              "button",
              "input",
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Without Icons">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={nodes}
            showIcons={false}
            defaultExpandedKeys={["src"]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Without Lines">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={nodes}
            showLines={false}
            defaultExpandedKeys={[
              "src",
              "components",
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-tree-list">
          <div className="data-display-demo-tree-item">
            <span className="data-display-demo-label">
              Small
            </span>

            <TreeView
              size="sm"
              nodes={nodes}
              defaultExpandedKeys={["src"]}
            />
          </div>

          <div className="data-display-demo-tree-item">
            <span className="data-display-demo-label">
              Medium
            </span>

            <TreeView
              size="md"
              nodes={nodes}
              defaultExpandedKeys={["src"]}
            />
          </div>

          <div className="data-display-demo-tree-item">
            <span className="data-display-demo-label">
              Large
            </span>

            <TreeView
              size="lg"
              nodes={nodes}
              defaultExpandedKeys={["src"]}
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-tree-list">
          <div className="data-display-demo-tree-item">
            <span className="data-display-demo-label">
              Default
            </span>

            <TreeView
              variant="default"
              nodes={nodes}
              defaultExpandedKeys={["src"]}
            />
          </div>

          <div className="data-display-demo-tree-item">
            <span className="data-display-demo-label">
              Filled
            </span>

            <TreeView
              variant="filled"
              nodes={nodes}
              defaultExpandedKeys={["src"]}
            />
          </div>

          <div className="data-display-demo-tree-item">
            <span className="data-display-demo-label">
              Outlined
            </span>

            <TreeView
              variant="outlined"
              nodes={nodes}
              defaultExpandedKeys={["src"]}
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Disabled Nodes">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={disabledNodes}
            defaultExpandedKeys={["project"]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Selection Disabled">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={nodes}
            selectable={false}
            defaultExpandedKeys={[
              "src",
              "components",
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Expansion Disabled">
        <div className="data-display-demo-tree">
          <TreeView
            nodes={nodes}
            expandable={false}
          />
        </div>
      </DemoSection>

      <DemoSection title="Custom Tree Items">
        <div className="data-display-demo-tree">
          <TreeView
            defaultExpandedKeys={[
              "application",
            ]}
          >
            <TreeView.Item
              nodeKey="application"
              label="Application"
              icon="📁"
            >
              <TreeView.Item
                nodeKey="dashboard"
                label="Dashboard"
                icon="▣"
              />

              <TreeView.Item
                nodeKey="settings"
                label="Settings"
                icon="⚙"
              />

              <TreeView.Item
                nodeKey="profile"
                label="Profile"
                icon="●"
              />
            </TreeView.Item>
          </TreeView>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={treeViewDocs.importCode}
        usageCode={treeViewDocs.usageCode}
        props={treeViewDocs.props}
      />
    </section>
  );
}