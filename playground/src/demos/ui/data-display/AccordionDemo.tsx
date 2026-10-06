"use client";

import { useState } from "react";

import {
  Accordion,
  Typography,
  accordionDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

export default function AccordionDemo() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    "controlled-1",
  ]);

  return (
    <section className="demo">
      <DemoHeader
        title={accordionDocs.name}
        description={accordionDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Basic accordion with multiple items that can be expanded or
            collapsed.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion>
              <Accordion.Item
                itemKey="item-1"
                title="What is Shivanya UI?"
                subtitle="Learn more about the component library."
              >
                Shivanya UI is a reusable UI component library designed for
                building consistent and modern interfaces.
              </Accordion.Item>

              <Accordion.Item
                itemKey="item-2"
                title="Can multiple items be expanded?"
                subtitle="Accordion expansion behavior."
              >
                Yes. By default, the accordion allows multiple items to remain
                expanded at the same time.
              </Accordion.Item>

              <Accordion.Item
                itemKey="item-3"
                title="Can the accordion be controlled?"
                subtitle="Controlled and uncontrolled usage."
              >
                Yes. You can control expanded items using expandedKeys and
                onExpandedKeysChange.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Available accordion sizes from extra small to extra large.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion size="xs">
              <Accordion.Item
                itemKey="xs"
                title="Extra Small"
              >
                Extra small accordion spacing.
              </Accordion.Item>
            </Accordion>

            <Accordion size="sm">
              <Accordion.Item
                itemKey="sm"
                title="Small"
              >
                Small accordion spacing.
              </Accordion.Item>
            </Accordion>

            <Accordion size="md">
              <Accordion.Item
                itemKey="md"
                title="Medium"
              >
                Medium accordion spacing.
              </Accordion.Item>
            </Accordion>

            <Accordion size="lg">
              <Accordion.Item
                itemKey="lg"
                title="Large"
              >
                Large accordion spacing.
              </Accordion.Item>
            </Accordion>

            <Accordion size="xl">
              <Accordion.Item
                itemKey="xl"
                title="Extra Large"
              >
                Extra large accordion spacing.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Different visual styles for the accordion surface.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion variant="default">
              <Accordion.Item itemKey="default" title="Default">
                Default accordion style.
              </Accordion.Item>
            </Accordion>

            <Accordion variant="bordered">
              <Accordion.Item itemKey="bordered" title="Bordered">
                Bordered accordion style.
              </Accordion.Item>
            </Accordion>

            <Accordion variant="filled">
              <Accordion.Item itemKey="filled" title="Filled">
                Filled accordion style.
              </Accordion.Item>
            </Accordion>

            <Accordion variant="ghost">
              <Accordion.Item itemKey="ghost" title="Ghost">
                Ghost accordion style.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Control the shape of accordion items using radius options.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion radius="none">
              <Accordion.Item itemKey="none" title="None">
                No border radius.
              </Accordion.Item>
            </Accordion>

            <Accordion radius="sm">
              <Accordion.Item itemKey="sm" title="Small">
                Small border radius.
              </Accordion.Item>
            </Accordion>

            <Accordion radius="md">
              <Accordion.Item itemKey="md" title="Medium">
                Medium border radius.
              </Accordion.Item>
            </Accordion>

            <Accordion radius="lg">
              <Accordion.Item itemKey="lg" title="Large">
                Large border radius.
              </Accordion.Item>
            </Accordion>

            <Accordion radius="full">
              <Accordion.Item itemKey="full" title="Full">
                Full border radius.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Expand Mode">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Choose whether one or multiple items can stay expanded.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion expandMode="single">
              <Accordion.Item
                itemKey="single-1"
                title="First item"
              >
                Only one item can remain expanded at a time.
              </Accordion.Item>

              <Accordion.Item
                itemKey="single-2"
                title="Second item"
              >
                Opening this item closes the previous item.
              </Accordion.Item>

              <Accordion.Item
                itemKey="single-3"
                title="Third item"
              >
                Single expansion mode keeps the accordion focused.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Control expanded items using expanded keys.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion
              expandedKeys={selectedKeys}
              onExpandedKeysChange={setSelectedKeys}
            >
              <Accordion.Item
                itemKey="controlled-1"
                title="Account"
              >
                Account settings and profile information.
              </Accordion.Item>

              <Accordion.Item
                itemKey="controlled-2"
                title="Security"
              >
                Security settings and authentication options.
              </Accordion.Item>

              <Accordion.Item
                itemKey="controlled-3"
                title="Notifications"
              >
                Notification preferences and settings.
              </Accordion.Item>
            </Accordion>

            <Typography variant="bodySmall" color="secondary">
              Expanded:{" "}
              {selectedKeys.length ? selectedKeys.join(", ") : "None"}
            </Typography>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Default Expanded">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Open specific items when the accordion initially renders.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion defaultExpandedKeys={["default-1"]}>
              <Accordion.Item
                itemKey="default-1"
                title="Initially expanded"
              >
                This item starts in the expanded state.
              </Accordion.Item>

              <Accordion.Item
                itemKey="default-2"
                title="Initially collapsed"
              >
                This item starts collapsed.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Subtitles and Icons">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Add supporting text and custom icons to accordion headers.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion>
              <Accordion.Item
                itemKey="icon-1"
                title="Profile"
                subtitle="Manage your profile information"
                icon="👤"
              >
                Update your name, profile information, and other account
                details.
              </Accordion.Item>

              <Accordion.Item
                itemKey="icon-2"
                title="Security"
                subtitle="Manage your account security"
                icon="🔒"
              >
                Configure your password and other security settings.
              </Accordion.Item>

              <Accordion.Item
                itemKey="icon-3"
                title="Notifications"
                subtitle="Manage notification preferences"
                icon="🔔"
              >
                Choose which notifications you want to receive.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Loading and disabled accordion states.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion state="loading">
              <Accordion.Item
                itemKey="loading"
                title="Loading"
              >
                This accordion is currently loading.
              </Accordion.Item>
            </Accordion>

            <Accordion state="disabled">
              <Accordion.Item
                itemKey="disabled"
                title="Disabled"
              >
                This accordion cannot be interacted with.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Disabled Item">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Individual accordion items can also be disabled.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion>
              <Accordion.Item
                itemKey="available"
                title="Available item"
              >
                This item can be expanded.
              </Accordion.Item>

              <Accordion.Item
                itemKey="disabled-item"
                title="Disabled item"
                disabled
              >
                This item cannot be expanded.
              </Accordion.Item>

              <Accordion.Item
                itemKey="another"
                title="Another available item"
              >
                This item can also be expanded.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Non-Collapsible">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Disable collapsing so an expanded item remains open.
          </Typography>

          <div className="data-display-demo-accordion">
            <Accordion
              collapsible={false}
              defaultExpandedKeys={["fixed"]}
            >
              <Accordion.Item
                itemKey="fixed"
                title="Always expanded"
              >
                This item cannot be collapsed once expanded.
              </Accordion.Item>

              <Accordion.Item
                itemKey="other"
                title="Another item"
              >
                Other items can still be expanded.
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={accordionDocs.importCode}
        usageCode={accordionDocs.usageCode}
        props={accordionDocs.props}
      />
    </section>
  );
}