import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./navigation-demo.css";

import { useState } from "react";
import { Tabs } from "shivanya-ui";

const sizes = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

const variants = [
  "default",
  "bordered",
  "filled",
  "ghost",
] as const;

const radii = [
  "none",
  "sm",
  "md",
  "lg",
  "full",
] as const;

const states = [
  "default",
  "loading",
  "disabled",
] as const;

const docs = {
  importCode:
    `import { Tabs } from "shivanya-ui";`,

  usageCode:
    `<Tabs defaultValue={0}>
  <Tabs.Tab>Overview</Tabs.Tab>
  <Tabs.Tab>Details</Tabs.Tab>
  <Tabs.Panel>Overview content</Tabs.Panel>
  <Tabs.Panel>Details content</Tabs.Panel>
</Tabs>`,

  props: [
    {
      name: "size",
      type: "xs | sm | md | lg | xl",
      default: "md",
    },
    {
      name: "variant",
      type: "default | bordered | filled | ghost",
      default: "default",
    },
    {
      name: "radius",
      type: "none | sm | md | lg | full",
      default: "md",
    },
    {
      name: "orientation",
      type: "horizontal | vertical",
      default: "horizontal",
    },
    {
      name: "defaultValue",
      type: "number",
      default: "0",
    },
    {
      name: "fullWidth",
      type: "boolean",
      default: "false",
    },
    {
      name: "state",
      type: "default | loading | disabled",
      default: "default",
    },
  ],
};

const content = (
  <>
    <Tabs.Tab icon="●">
      Overview
    </Tabs.Tab>

    <Tabs.Tab badge="3">
      Details
    </Tabs.Tab>

    <Tabs.Tab>
      Activity
    </Tabs.Tab>

    <Tabs.Panel>
      Overview content
    </Tabs.Panel>

    <Tabs.Panel>
      Details content
    </Tabs.Panel>

    <Tabs.Panel>
      Activity content
    </Tabs.Panel>
  </>
);

export default function TabsDemo() {
  const [value, setValue] = useState(0);

  return (
    <section className="demo">
      <DemoHeader
        title="Tabs"
        description="Organizes related content into switchable panels."
      />

      <DemoSection title="Basic">
        <Tabs defaultValue={0}>
          {content}
        </Tabs>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="navigation-demo-grid navigation-demo-grid-5">
          {sizes.map((size) => (
            <div
              className="navigation-demo-card"
              key={size}
            >
              <span className="navigation-demo-label">
                {size.toUpperCase()}
              </span>

              <Tabs
                size={size}
                defaultValue={0}
              >
                {content}
              </Tabs>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="navigation-demo-grid navigation-demo-grid-4">
          {variants.map((variant) => (
            <div
              className="navigation-demo-card"
              key={variant}
            >
              <span className="navigation-demo-label">
                {variant.toUpperCase()}
              </span>

              <Tabs
                variant={variant}
                defaultValue={0}
              >
                {content}
              </Tabs>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="navigation-demo-grid navigation-demo-grid-5">
          {radii.map((radius) => (
            <div
              className="navigation-demo-card"
              key={radius}
            >
              <span className="navigation-demo-label">
                {radius.toUpperCase()}
              </span>

              <Tabs
                radius={radius}
                defaultValue={0}
              >
                {content}
              </Tabs>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Orientation">
        <div className="navigation-demo-grid navigation-demo-grid-2">
          <div className="navigation-demo-card">
            <span className="navigation-demo-label">
              HORIZONTAL
            </span>

            <Tabs
              orientation="horizontal"
              defaultValue={0}
            >
              {content}
            </Tabs>
          </div>

          <div className="navigation-demo-card">
            <span className="navigation-demo-label">
              VERTICAL
            </span>

            <Tabs
              orientation="vertical"
              defaultValue={0}
            >
              {content}
            </Tabs>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="navigation-demo-grid navigation-demo-grid-3">
          {states.map((state) => (
            <div
              className="navigation-demo-card"
              key={state}
            >
              <span className="navigation-demo-label">
                {state.toUpperCase()}
              </span>

              <Tabs
                state={state}
                defaultValue={0}
              >
                {content}
              </Tabs>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <Tabs
          fullWidth
          defaultValue={0}
        >
          {content}
        </Tabs>
      </DemoSection>

      <DemoSection title="Controlled">
        <Tabs
          value={value}
          onChange={setValue}
        >
          {content}
        </Tabs>

        <span className="navigation-demo-note">
          Active tab: {value + 1}
        </span>
      </DemoSection>

      <DemoDocumentation
        importCode={docs.importCode}
        usageCode={docs.usageCode}
        props={docs.props}
      />
    </section>
  );
}