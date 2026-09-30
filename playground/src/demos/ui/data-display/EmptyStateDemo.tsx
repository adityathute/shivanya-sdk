import { useState } from "react";

import {
  Button,
  EmptyState,
  Typography,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "./data-display-demo.css";

export default function EmptyStateDemo() {
  const [showContent, setShowContent] = useState(false);

  return (
    <section className="demo">
      <DemoHeader
        title="EmptyState"
        description="Communicates that content is unavailable and provides context or actions for the next step."
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-stack">
          <EmptyState
            title="No results found"
            description="Try changing your search or using different keywords."
          />
        </div>
      </DemoSection>

      <DemoSection title="With Icon">
        <div className="data-display-demo-stack">
          <EmptyState
            icon="⌕"
            title="Nothing here yet"
            description="There is currently no content available."
          />
        </div>
      </DemoSection>

      <DemoSection title="With Actions">
        <div className="data-display-demo-stack">
          <EmptyState
            title="No projects"
            description="Create your first project to get started."
            primaryAction={
              <Button>
                Create Project
              </Button>
            }
            secondaryAction={
              <Button variant="outline">
                Learn More
              </Button>
            }
          />
        </div>
      </DemoSection>

      <DemoSection title="With Footer">
        <div className="data-display-demo-stack">
          <EmptyState
            title="No notifications"
            description="You're all caught up."
            footer="Notifications will appear here when something needs your attention."
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-stack">
          {(["xs", "sm", "md", "lg", "xl"] as const).map(
            (size) => (
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

                <EmptyState
                  size={size}
                  title={`${size.toUpperCase()} empty state`}
                  description="Different sizes control spacing and density."
                />
              </div>
            ),
          )}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-stack">
          {(
            [
              "default",
              "primary",
              "secondary",
              "success",
              "warning",
              "danger",
              "info",
            ] as const
          ).map((variant) => (
            <div
              key={variant}
              className="data-display-demo-labeled"
            >
              <Typography
                variant="bodySmall"
                color="secondary"
              >
                {variant}
              </Typography>

              <EmptyState
                variant={variant}
                title={`${variant} state`}
                description="Semantic variants can communicate different contexts."
              />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Alignment">
        <div className="data-display-demo-stack">
          {(["left", "center", "right"] as const).map(
            (align) => (
              <EmptyState
                key={align}
                align={align}
                title={`${align} aligned`}
                description="The content follows the selected alignment."
                primaryAction={
                  <Button size="sm">
                    Continue
                  </Button>
                }
              />
            ),
          )}
        </div>
      </DemoSection>

      <DemoSection title="Orientation">
        <div className="data-display-demo-stack">
          <EmptyState
            orientation="vertical"
            icon="◎"
            title="Vertical layout"
            description="Content is arranged from top to bottom."
            primaryAction={
              <Button size="sm">
                Continue
              </Button>
            }
          />

          <EmptyState
            orientation="horizontal"
            icon="◎"
            title="Horizontal layout"
            description="Content is arranged side by side."
            primaryAction={
              <Button size="sm">
                Continue
              </Button>
            }
          />
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="data-display-demo-empty-grid">
          {(
            ["none", "sm", "md", "lg", "full"] as const
          ).map((radius) => (
            <div
              key={radius}
              className="data-display-demo-labeled"
            >
              <Typography
                variant="bodySmall"
                color="secondary"
              >
                {radius}
              </Typography>

              <EmptyState
                radius={radius}
                title="No content"
                description="Radius controls the container shape."
              />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Loading">
        <div className="data-display-demo-stack">
          <EmptyState
            state="loading"
            title="Loading content"
            description="Please wait while we load your data."
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="data-display-demo-stack">
          <EmptyState
            state="disabled"
            title="Unavailable"
            description="This content is currently disabled."
            primaryAction={
              <Button disabled>
                Continue
              </Button>
            }
          />
        </div>
      </DemoSection>

      <DemoSection title="Interactive Example">
        <div className="data-display-demo-stack">
          {!showContent ? (
            <EmptyState
              icon="□"
              title="No saved items"
              description="You don't have any saved items yet."
              primaryAction={
                <Button
                  onClick={() =>
                    setShowContent(true)
                  }
                >
                  Add Item
                </Button>
              }
            />
          ) : (
            <div className="data-display-demo-result">
              <Typography variant="body">
                Your item has been added.
              </Typography>

              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  setShowContent(false)
                }
              >
                Reset
              </Button>
            </div>
          )}
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <div className="data-display-demo-stack">
          <EmptyState
            size="lg"
            variant="primary"
            align="center"
            orientation="vertical"
            radius="lg"
            icon="◇"
            title="Start building your workspace"
            description="Create your first project and start organizing your work."
            primaryAction={
              <Button>
                Create Project
              </Button>
            }
            secondaryAction={
              <Button variant="outline">
                Explore
              </Button>
            }
            footer="You can change these settings later."
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode='import { EmptyState } from "shivanya-ui";'
        usageCode={`<EmptyState
  title="No results"
  description="Try another search."
  primaryAction={
    <Button>
      Try Again
    </Button>
  }
/>`}
        props={[
          {
            name: "image",
            type: "string",
            defaultValue: "undefined",
            description: "Optional image source.",
          },
          {
            name: "imageAlt",
            type: "string",
            defaultValue: '""',
            description: "Alternative text for the image.",
          },
          {
            name: "icon",
            type: "ReactNode",
            defaultValue: "undefined",
            description: "Optional icon content.",
          },
          {
            name: "title",
            type: "ReactNode",
            defaultValue: "undefined",
            description: "Primary empty-state heading.",
          },
          {
            name: "description",
            type: "ReactNode",
            defaultValue: "undefined",
            description: "Supporting explanation.",
          },
          {
            name: "primaryAction",
            type: "ReactNode",
            defaultValue: "undefined",
            description: "Primary action content.",
          },
          {
            name: "secondaryAction",
            type: "ReactNode",
            defaultValue: "undefined",
            description: "Secondary action content.",
          },
          {
            name: "footer",
            type: "ReactNode",
            defaultValue: "undefined",
            description: "Optional footer content.",
          },
          {
            name: "size",
            type: '"xs" | "sm" | "md" | "lg" | "xl"',
            defaultValue: '"md"',
            description: "Controls component density.",
          },
          {
            name: "variant",
            type: '"default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info"',
            defaultValue: '"default"',
            description: "Semantic visual variant.",
          },
          {
            name: "align",
            type: '"left" | "center" | "right"',
            defaultValue: '"center"',
            description: "Content alignment.",
          },
          {
            name: "orientation",
            type: '"vertical" | "horizontal"',
            defaultValue: '"vertical"',
            description: "Content orientation.",
          },
          {
            name: "radius",
            type: '"none" | "sm" | "md" | "lg" | "full"',
            defaultValue: '"md"',
            description: "Container border radius.",
          },
          {
            name: "imageFit",
            type: '"contain" | "cover"',
            defaultValue: '"contain"',
            description: "Controls image fitting.",
          },
          {
            name: "state",
            type: '"default" | "loading" | "disabled"',
            defaultValue: '"default"',
            description: "Component state.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables the component.",
          },
          {
            name: "contentClassName",
            type: "string",
            defaultValue: "undefined",
            description: "Optional content wrapper class.",
          },
        ]}
      />
    </section>
  );
}