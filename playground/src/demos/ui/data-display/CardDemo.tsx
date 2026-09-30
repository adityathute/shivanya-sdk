import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  Button,
  Card,
  Typography,
  cardDocs,
} from "shivanya-ui";

export default function CardDemo() {
  const [selected, setSelected] = useState(false);

  return (
    <section className="demo">
      <DemoHeader
        title={cardDocs.name}
        description={cardDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            A basic card for grouping related content.
          </Typography>

          <div className="data-display-demo-row">
            <Card>
              <Typography variant="h4">
                Card Title
              </Typography>

              <Typography variant="body">
                This is a simple card with content inside the body.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Choose between elevated, outlined, filled, and ghost
            visual treatments.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card variant="elevated">
              <Typography variant="h4">
                Elevated
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Uses elevation and a border.
              </Typography>
            </Card>

            <Card variant="outlined">
              <Typography variant="h4">
                Outlined
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Uses a simple border.
              </Typography>
            </Card>

            <Card variant="filled">
              <Typography variant="h4">
                Filled
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Uses a filled surface.
              </Typography>
            </Card>

            <Card variant="ghost">
              <Typography variant="h4">
                Ghost
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Transparent background and no shadow.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Padding">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Control the internal spacing of the card.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card padding="none">
              <Typography variant="bodySmall">
                None
              </Typography>
            </Card>

            <Card padding="xs">
              <Typography variant="bodySmall">
                Extra Small
              </Typography>
            </Card>

            <Card padding="sm">
              <Typography variant="bodySmall">
                Small
              </Typography>
            </Card>

            <Card padding="md">
              <Typography variant="bodySmall">
                Medium
              </Typography>
            </Card>

            <Card padding="lg">
              <Typography variant="bodySmall">
                Large
              </Typography>
            </Card>

            <Card padding="xl">
              <Typography variant="bodySmall">
                Extra Large
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Control the card corner radius.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card radius="none">
              <Typography variant="bodySmall">
                None
              </Typography>
            </Card>

            <Card radius="sm">
              <Typography variant="bodySmall">
                Small
              </Typography>
            </Card>

            <Card radius="md">
              <Typography variant="bodySmall">
                Medium
              </Typography>
            </Card>

            <Card radius="lg">
              <Typography variant="bodySmall">
                Large
              </Typography>
            </Card>

            <Card radius="xl">
              <Typography variant="bodySmall">
                Extra Large
              </Typography>
            </Card>

            <Card radius="full">
              <Typography variant="bodySmall">
                Full
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Shadow">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Control the card elevation independently from its variant.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card shadow="none">
              <Typography variant="bodySmall">
                None
              </Typography>
            </Card>

            <Card shadow="sm">
              <Typography variant="bodySmall">
                Small
              </Typography>
            </Card>

            <Card shadow="md">
              <Typography variant="bodySmall">
                Medium
              </Typography>
            </Card>

            <Card shadow="lg">
              <Typography variant="bodySmall">
                Large
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Header, Body, Actions and Footer">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Cards can be composed using header, body, actions, and
            footer content.
          </Typography>

          <div className="data-display-demo-row">
            <Card
              header={
                <Typography variant="h4">
                  Account
                </Typography>
              }
              actions={
                <Button size="sm" variant="ghost">
                  Edit
                </Button>
              }
              footer={
                <Typography variant="bodySmall" color="secondary">
                  Last updated today
                </Typography>
              }
            >
              <Typography variant="body">
                Manage your account information and preferences.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Header Alignment">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Header content can be aligned to the start, center, or end.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card
              header={
                <Typography variant="bodySmall">
                  Start aligned
                </Typography>
              }
              headerAlign="start"
            >
              <Typography variant="bodySmall">
                Card content
              </Typography>
            </Card>

            <Card
              header={
                <Typography variant="bodySmall">
                  Center aligned
                </Typography>
              }
              headerAlign="center"
            >
              <Typography variant="bodySmall">
                Card content
              </Typography>
            </Card>

            <Card
              header={
                <Typography variant="bodySmall">
                  End aligned
                </Typography>
              }
              headerAlign="end"
            >
              <Typography variant="bodySmall">
                Card content
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Actions Alignment">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Action content supports start, center, end, and between
            alignment.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card
              actions={
                <>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>

                  <Button size="sm">
                    Save
                  </Button>
                </>
              }
              actionsAlign="start"
            >
              <Typography variant="bodySmall">
                Start aligned actions
              </Typography>
            </Card>

            <Card
              actions={
                <>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>

                  <Button size="sm">
                    Save
                  </Button>
                </>
              }
              actionsAlign="center"
            >
              <Typography variant="bodySmall">
                Center aligned actions
              </Typography>
            </Card>

            <Card
              actions={
                <>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>

                  <Button size="sm">
                    Save
                  </Button>
                </>
              }
              actionsAlign="end"
            >
              <Typography variant="bodySmall">
                End aligned actions
              </Typography>
            </Card>

            <Card
              actions={
                <>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>

                  <Button size="sm">
                    Save
                  </Button>
                </>
              }
              actionsAlign="between"
            >
              <Typography variant="bodySmall">
                Between aligned actions
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Media">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Cards support custom media content.
          </Typography>

          <div className="data-display-demo-row">
            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>Media</span>
                </div>
              }
              header={
                <Typography variant="h4">
                  Media Card
                </Typography>
              }
            >
              <Typography variant="body">
                Media can be placed above the card content.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Media Position">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Media can be positioned at the top or bottom.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>Top Media</span>
                </div>
              }
              mediaPosition="top"
            >
              <Typography variant="bodySmall">
                Media at the top
              </Typography>
            </Card>

            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>Bottom Media</span>
                </div>
              }
              mediaPosition="bottom"
            >
              <Typography variant="bodySmall">
                Media at the bottom
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Media Ratio">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Media supports several aspect ratios.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>1:1</span>
                </div>
              }
              mediaRatio="1/1"
            >
              <Typography variant="bodySmall">
                Square
              </Typography>
            </Card>

            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>4:3</span>
                </div>
              }
              mediaRatio="4/3"
            >
              <Typography variant="bodySmall">
                4:3
              </Typography>
            </Card>

            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>3:2</span>
                </div>
              }
              mediaRatio="3/2"
            >
              <Typography variant="bodySmall">
                3:2
              </Typography>
            </Card>

            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>16:9</span>
                </div>
              }
              mediaRatio="16/9"
            >
              <Typography variant="bodySmall">
                16:9
              </Typography>
            </Card>

            <Card
              media={
                <div className="data-display-demo-card-media">
                  <span>21:9</span>
                </div>
              }
              mediaRatio="21/9"
            >
              <Typography variant="bodySmall">
                21:9
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Divider">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Add separators between the card body and supporting areas.
          </Typography>

          <div className="data-display-demo-row">
            <Card
              divider
              header={
                <Typography variant="h4">
                  Divider Card
                </Typography>
              }
              actions={
                <>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>

                  <Button size="sm">
                    Continue
                  </Button>
                </>
              }
              footer={
                <Typography variant="bodySmall" color="secondary">
                  Additional information
                </Typography>
              }
            >
              <Typography variant="body">
                Header, body, actions, and footer are separated by
                borders.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Hoverable">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Hoverable cards receive additional elevation on hover.
          </Typography>

          <div className="data-display-demo-row">
            <Card hoverable>
              <Typography variant="h4">
                Hover Me
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Move the pointer over the card.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Clickable">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Mark a card as interactive.
          </Typography>

          <div className="data-display-demo-row">
            <Card
              clickable
              hoverable
              onClick={() => {
                window.alert("Card clicked");
              }}
            >
              <Typography variant="h4">
                Clickable Card
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Click this card to trigger an action.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Selected">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Use the selected state for selectable cards.
          </Typography>

          <div className="data-display-demo-row">
            <Card
              clickable
              hoverable
              selected={selected}
              onClick={() => setSelected((value) => !value)}
            >
              <Typography variant="h4">
                {selected ? "Selected" : "Not Selected"}
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Click to toggle the selected state.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Cards can display disabled and loading states.
          </Typography>

          <div className="data-display-demo-card-grid">
            <Card disabled>
              <Typography variant="h4">
                Disabled
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Interaction is disabled.
              </Typography>
            </Card>

            <Card loading>
              <Typography variant="h4">
                Loading
              </Typography>

              <Typography variant="bodySmall" color="secondary">
                Loading presentation.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Expand the card to use the available container width.
          </Typography>

          <Card fullWidth>
            <Typography variant="h4">
              Full Width Card
            </Typography>

            <Typography variant="body">
              This card fills the width of its parent container.
            </Typography>
          </Card>
        </div>
      </DemoSection>

      <DemoSection title="Composition">
        <div className="data-display-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            A complete card composition combining multiple features.
          </Typography>

          <div className="data-display-demo-row">
            <Card
              variant="elevated"
              padding="md"
              radius="lg"
              shadow="md"
              hoverable
              header={
                <div className="data-display-demo-card-heading">
                  <Typography variant="h4">
                    Project Overview
                  </Typography>

                  <Typography variant="bodySmall" color="secondary">
                    Shivanya SDK
                  </Typography>
                </div>
              }
              media={
                <div className="data-display-demo-card-media">
                  <span>Project Media</span>
                </div>
              }
              actions={
                <>
                  <Button size="sm" variant="ghost">
                    Details
                  </Button>

                  <Button size="sm">
                    Open
                  </Button>
                </>
              }
              footer={
                <Typography variant="bodySmall" color="secondary">
                  Updated recently
                </Typography>
              }
              divider
            >
              <Typography variant="body">
                Build reusable interfaces with consistent components,
                patterns, and design tokens.
              </Typography>
            </Card>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={cardDocs.importCode}
        usageCode={cardDocs.usageCode}
        props={cardDocs.props}
      />
    </section>
  );
}