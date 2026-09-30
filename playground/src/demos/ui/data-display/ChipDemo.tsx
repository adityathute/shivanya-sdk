import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  Avatar,
  Chip,
  Typography,
  chipDocs,
} from "shivanya-ui";

export default function ChipDemo() {
  const [selected, setSelected] =
    useState(false);

  const [closed, setClosed] =
    useState(true);

  return (
    <section className="demo">
      <DemoHeader
        title={chipDocs.name}
        description={chipDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            A compact label for statuses, categories, and short pieces
            of information.
          </Typography>

          <div className="data-display-demo-row">
            <Chip>Default Chip</Chip>
            <Chip color="success">
              Active
            </Chip>
            <Chip color="warning">
              Pending
            </Chip>
            <Chip color="danger">
              Error
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Available chip sizes.
          </Typography>

          <div className="data-display-demo-row">
            <Chip size="xs">
              Extra Small
            </Chip>

            <Chip size="sm">
              Small
            </Chip>

            <Chip size="md">
              Medium
            </Chip>

            <Chip size="lg">
              Large
            </Chip>

            <Chip size="xl">
              Extra Large
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Different visual treatments.
          </Typography>

          <div className="data-display-demo-row">
            <Chip variant="filled">
              Filled
            </Chip>

            <Chip variant="outlined">
              Outlined
            </Chip>

            <Chip variant="soft">
              Soft
            </Chip>

            <Chip variant="ghost">
              Ghost
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Colors">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Available semantic colors.
          </Typography>

          <div className="data-display-demo-row">
            <Chip color="primary">
              Primary
            </Chip>

            <Chip color="secondary">
              Secondary
            </Chip>

            <Chip color="success">
              Success
            </Chip>

            <Chip color="warning">
              Warning
            </Chip>

            <Chip color="danger">
              Danger
            </Chip>

            <Chip color="info">
              Info
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Outlined Colors">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Semantic colors also work with outlined chips.
          </Typography>

          <div className="data-display-demo-row">
            <Chip
              variant="outlined"
              color="primary"
            >
              Primary
            </Chip>

            <Chip
              variant="outlined"
              color="secondary"
            >
              Secondary
            </Chip>

            <Chip
              variant="outlined"
              color="success"
            >
              Success
            </Chip>

            <Chip
              variant="outlined"
              color="warning"
            >
              Warning
            </Chip>

            <Chip
              variant="outlined"
              color="danger"
            >
              Danger
            </Chip>

            <Chip
              variant="outlined"
              color="info"
            >
              Info
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Soft Colors">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Soft color treatments for less prominent labels.
          </Typography>

          <div className="data-display-demo-row">
            <Chip
              variant="soft"
              color="primary"
            >
              Primary
            </Chip>

            <Chip
              variant="soft"
              color="secondary"
            >
              Secondary
            </Chip>

            <Chip
              variant="soft"
              color="success"
            >
              Success
            </Chip>

            <Chip
              variant="soft"
              color="warning"
            >
              Warning
            </Chip>

            <Chip
              variant="soft"
              color="danger"
            >
              Danger
            </Chip>

            <Chip
              variant="soft"
              color="info"
            >
              Info
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Control the chip corner radius.
          </Typography>

          <div className="data-display-demo-row">
            <Chip radius="sm">
              Small
            </Chip>

            <Chip radius="md">
              Medium
            </Chip>

            <Chip radius="lg">
              Large
            </Chip>

            <Chip radius="full">
              Full
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Icons">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Add leading and trailing content.
          </Typography>

          <div className="data-display-demo-row">
            <Chip icon={<span>✓</span>}>
              Verified
            </Chip>

            <Chip
              icon={<span>★</span>}
              endIcon={<span>→</span>}
            >
              Featured
            </Chip>

            <Chip endIcon={<span>→</span>}>
              Continue
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Avatar">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Chips can display an avatar before the label.
          </Typography>

          <div className="data-display-demo-row">
            <Chip
              avatar={
                <Avatar
                  size="xs"
                  name="Aditya"
                />
              }
            >
              Aditya
            </Chip>

            <Chip
              avatar={
                <Avatar
                  size="xs"
                  name="JD"
                  initials="JD"
                />
              }
              color="secondary"
            >
              John Doe
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Closable">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Dismissible chips can notify the parent when removed.
          </Typography>

          <div className="data-display-demo-row">
            {closed && (
              <Chip
                closable
                onClose={() => setClosed(false)}
              >
                Remove me
              </Chip>
            )}

            {!closed && (
              <Chip
                variant="outlined"
                onClick={() => setClosed(true)}
              >
                Restore chip
              </Chip>
            )}
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Selectable">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Selectable chips can represent an active filter or choice.
          </Typography>

          <div className="data-display-demo-row">
            <Chip
              selectable
              selected={selected}
              onClick={() =>
                setSelected(
                  (value) => !value,
                )
              }
            >
              {selected
                ? "Selected"
                : "Select me"}
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Clickable">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Chips can be used as compact interactive controls.
          </Typography>

          <div className="data-display-demo-row">
            <Chip
              clickable
              onClick={() => {
                window.alert(
                  "Chip clicked",
                );
              }}
            >
              Click me
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Loading">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Loading chips prevent interaction while an operation is
            running.
          </Typography>

          <div className="data-display-demo-row">
            <Chip loading>
              Loading
            </Chip>

            <Chip
              loading
              color="success"
            >
              Saving
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Disabled chips cannot be interacted with.
          </Typography>

          <div className="data-display-demo-row">
            <Chip disabled>
              Disabled
            </Chip>

            <Chip
              disabled
              variant="outlined"
            >
              Disabled Outlined
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Expand the chip to fill the available width.
          </Typography>

          <div className="data-display-demo-box">
            <Chip fullWidth>
              Full Width Chip
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Combine icons, avatars, colors, selection, and dismissal.
          </Typography>

          <div className="data-display-demo-row">
            <Chip
              color="success"
              variant="soft"
              avatar={
                <Avatar
                  size="xs"
                  name="JS"
                  initials="JS"
                />
              }
              icon={<span>✓</span>}
              closable
              onClose={() => {}}
            >
              JavaScript
            </Chip>

            <Chip
              color="info"
              variant="soft"
              icon={<span>●</span>}
              endIcon={<span>→</span>}
              selectable
              selected
            >
              In Progress
            </Chip>

            <Chip
              color="warning"
              variant="outlined"
              closable
            >
              Pending
            </Chip>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={chipDocs.importCode}
        usageCode={chipDocs.usageCode}
        props={chipDocs.props}
      />
    </section>
  );
}