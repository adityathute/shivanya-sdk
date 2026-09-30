import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  Button,
  List,
  Typography,
  listDocs,
} from "shivanya-ui";

export default function ListDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={listDocs.name}
        description={listDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-stack">
          <List>
            <List.Item
              title="Profile"
              description="Manage your profile."
              leading="◉"
              trailing="›"
            />

            <List.Item
              title="Security"
              description="Manage authentication."
              leading="◈"
              trailing="›"
            />

            <List.Item
              title="Billing"
              description="Manage your subscription."
              leading="◇"
              trailing="›"
            />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-stack">
          <div className="data-display-demo-labeled">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Default
            </Typography>

            <List>
              <List.Item title="Default item" />
              <List.Item title="Another item" />
            </List>
          </div>

          <div className="data-display-demo-labeled">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Bordered
            </Typography>

            <List variant="bordered">
              <List.Item title="Bordered item" />
              <List.Item title="Another item" />
            </List>
          </div>

          <div className="data-display-demo-labeled">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Filled
            </Typography>

            <List variant="filled">
              <List.Item title="Filled item" />
              <List.Item title="Another item" />
            </List>
          </div>

          <div className="data-display-demo-labeled">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Ghost
            </Typography>

            <List variant="ghost">
              <List.Item title="Ghost item" />
              <List.Item title="Another item" />
            </List>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Dividers">
        <div className="data-display-demo-stack">
          <div className="data-display-demo-labeled">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Solid
            </Typography>

            <List divider="solid">
              <List.Item title="Item one" />
              <List.Item title="Item two" />
              <List.Item title="Item three" />
            </List>
          </div>

          <div className="data-display-demo-labeled">
            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Dashed
            </Typography>

            <List divider="dashed">
              <List.Item title="Item one" />
              <List.Item title="Item two" />
              <List.Item title="Item three" />
            </List>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Horizontal">
        <div className="data-display-demo-stack">
          <List
            orientation="horizontal"
            variant="bordered"
          >
            <List.Item
              title="First"
              leading="1"
            />

            <List.Item
              title="Second"
              leading="2"
            />

            <List.Item
              title="Third"
              leading="3"
            />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Horizontal Wrap">
        <div className="data-display-demo-list-horizontal-wrap">
          <List
            orientation="horizontal"
            wrap="wrap"
            variant="filled"
          >
            <List.Item title="Dashboard" />
            <List.Item title="Analytics" />
            <List.Item title="Projects" />
            <List.Item title="Team" />
            <List.Item title="Settings" />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-stack">
          {(
            ["xs", "sm", "md", "lg", "xl"] as const
          ).map((size) => (
            <div
              key={size}
              className="data-display-demo-labeled"
            >
              <Typography
                variant="bodySmall"
                color="secondary"
              >
                {size.toUpperCase()}
              </Typography>

              <List
                size={size}
                variant="bordered"
              >
                <List.Item
                  title={`${size.toUpperCase()} list item`}
                  description="List density changes with the selected size."
                  leading="•"
                />
              </List>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Alignment">
        <div className="data-display-demo-stack">
          {(
            [
              "start",
              "center",
              "end",
              "stretch",
            ] as const
          ).map((align) => (
            <div
              key={align}
              className="data-display-demo-labeled"
            >
              <Typography
                variant="bodySmall"
                color="secondary"
              >
                {align}
              </Typography>

              <List
                align={align}
                variant="bordered"
              >
                <List.Item
                  title={`${align} alignment`}
                  description="Leading and trailing content demonstrate alignment."
                  leading="◉"
                  trailing="›"
                />
              </List>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Justify">
        <div className="data-display-demo-list-justify">
          {(
            [
              "start",
              "center",
              "end",
              "between",
              "around",
              "evenly",
            ] as const
          ).map((justify) => (
            <div
              key={justify}
              className="data-display-demo-labeled"
            >
              <Typography
                variant="bodySmall"
                color="secondary"
              >
                {justify}
              </Typography>

              <List
                orientation="horizontal"
                justify={justify}
                variant="bordered"
              >
                <List.Item title="One" />
                <List.Item title="Two" />
                <List.Item title="Three" />
              </List>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="data-display-demo-stack">
          <List variant="bordered">
            <List.Item
              selected
              title="Selected"
              description="This item is currently selected."
            />

            <List.Item
              disabled
              title="Disabled"
              description="This item cannot be interacted with."
            />

            <List.Item
              title="Normal"
              description="This item is in the default state."
            />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Loading">
        <div className="data-display-demo-stack">
          <List
            state="loading"
            variant="bordered"
          >
            <List.Item
              title="Loading profile"
              description="Fetching account information..."
            />

            <List.Item
              title="Loading settings"
              description="Fetching your preferences..."
            />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Disabled List">
        <div className="data-display-demo-stack">
          <List
            disabled
            variant="bordered"
          >
            <List.Item
              title="Profile"
              description="This list is disabled."
              trailing="›"
            />

            <List.Item
              title="Security"
              description="This list cannot be interacted with."
              trailing="›"
            />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Custom Content">
        <div className="data-display-demo-stack">
          <List variant="filled">
            <List.Item
              leading="◉"
              title="Account"
              description="Personal account information."
              trailing={
                <Button size="sm">
                  Open
                </Button>
              }
            />

            <List.Item
              leading="◈"
              title="Workspace"
              description="Manage your workspace."
              trailing={
                <Button
                  size="sm"
                  variant="outline"
                >
                  Manage
                </Button>
              }
            />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Selected Items">
        <div className="data-display-demo-stack">
          <List
            variant="bordered"
            divider="solid"
          >
            <List.Item
              selected
              title="Dashboard"
              description="Currently selected."
              leading="◉"
            />

            <List.Item
              title="Analytics"
              description="View analytics and reports."
              leading="◈"
            />

            <List.Item
              title="Settings"
              description="Manage application settings."
              leading="◇"
            />
          </List>
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <div className="data-display-demo-stack">
          <List
            size="md"
            variant="bordered"
            divider="solid"
          >
            <List.Item
              selected
              title="Profile"
              description="Manage your personal information."
              leading="◉"
              trailing="›"
            />

            <List.Item
              title="Security"
              description="Manage passwords and authentication."
              leading="◈"
              trailing="›"
            />

            <List.Item
              title="Billing"
              description="Manage plans and payments."
              leading="◇"
              trailing="›"
            />

            <List.Item
              disabled
              title="Advanced"
              description="This option is currently unavailable."
              leading="◎"
              trailing="›"
            />
          </List>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={listDocs.importCode}
        usageCode={listDocs.usageCode}
        props={listDocs.props}
      />
    </section>
  );
}