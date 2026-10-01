import { useState } from "react";
import { Button, ContextMenu, Typography } from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./overlays-demo.css";

type ContextMenuSize = "sm" | "md" | "lg";
type ContextMenuVariant = "default" | "filled" | "outlined";
type ContextMenuRadius = "none" | "sm" | "md" | "lg";

const menuItems = ["Edit", "Duplicate", "Move", "Delete"];

export default function ContextMenuDemo() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<ContextMenuSize>("md");
  const [variant, setVariant] =
    useState<ContextMenuVariant>("default");
  const [radius, setRadius] =
    useState<ContextMenuRadius>("md");

  const openMenu = (
    nextSize: ContextMenuSize = size,
    nextVariant: ContextMenuVariant = variant,
    nextRadius: ContextMenuRadius = radius,
  ) => {
    setSize(nextSize);
    setVariant(nextVariant);
    setRadius(nextRadius);
    setOpen(true);
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Context Menu"
        description="A compact menu surface for contextual actions."
      />

      <DemoSection title="Basic">
        <div className="overlays-demo-context-area">
          <Button
            onClick={() => {
              if (open) {
                setOpen(false);
              } else {
                openMenu();
              }
            }}
          >
            {open ? "Close Menu" : "Open Menu"}
          </Button>

          <div className="overlays-demo-context-preview">
            <ContextMenu
              open={open}
              size={size}
              variant={variant}
              radius={radius}
              onClose={() => setOpen(false)}
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="overlays-demo-menu-item"
                >
                  {item}
                </button>
              ))}
            </ContextMenu>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="overlays-demo-context-grid">
          {(
            ["default", "filled", "outlined"] as const
          ).map((nextVariant) => (
            <div
              key={nextVariant}
              className="overlays-demo-card"
            >
              <Typography variant="bodySmall">
                {nextVariant}
              </Typography>

              <div className="overlays-demo-context-preview">
                <ContextMenu
                  open
                  size="md"
                  variant={nextVariant}
                  radius="md"
                >
                  <button
                    type="button"
                    className="overlays-demo-menu-item"
                  >
                    Open
                  </button>

                  <button
                    type="button"
                    className="overlays-demo-menu-item"
                  >
                    Settings
                  </button>

                  <button
                    type="button"
                    className="overlays-demo-menu-item"
                  >
                    Remove
                  </button>
                </ContextMenu>
              </div>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="overlays-demo-row">
          {(["sm", "md", "lg"] as const).map((nextSize) => (
            <Button
              key={nextSize}
              variant={
                size === nextSize
                  ? "primary"
                  : "outline"
              }
              onClick={() => openMenu(nextSize)}
            >
              {nextSize}
            </Button>
          ))}
        </div>

        <div className="overlays-demo-size-preview">
          <ContextMenu
            open
            size={size}
            variant={variant}
            radius={radius}
          >
            <button
              type="button"
              className="overlays-demo-menu-item"
            >
              Edit
            </button>

            <button
              type="button"
              className="overlays-demo-menu-item"
            >
              Settings
            </button>

            <button
              type="button"
              className="overlays-demo-menu-item"
            >
              Delete
            </button>
          </ContextMenu>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="overlays-demo-row">
          {(
            ["none", "sm", "md", "lg"] as const
          ).map((nextRadius) => (
            <Button
              key={nextRadius}
              variant={
                radius === nextRadius
                  ? "primary"
                  : "outline"
              }
              onClick={() => openMenu(size, variant, nextRadius)}
            >
              {nextRadius}
            </Button>
          ))}
        </div>

        <div className="overlays-demo-radius-preview">
          <ContextMenu
            open
            size={size}
            variant={variant}
            radius={radius}
          >
            <button
              type="button"
              className="overlays-demo-menu-item"
            >
              Open
            </button>

            <button
              type="button"
              className="overlays-demo-menu-item"
            >
              Settings
            </button>

            <button
              type="button"
              className="overlays-demo-menu-item"
            >
              Remove
            </button>
          </ContextMenu>
        </div>
      </DemoSection>

      <DemoSection title="Close Behavior">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            The menu closes when an item is clicked or when
            Escape is pressed.
          </Typography>

          <Button
            onClick={() => openMenu()}
          >
            Try It
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Custom Menu Items">
        <div className="overlays-demo-command-list">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            ContextMenu accepts regular children, so you can
            create your own menu item components.
          </Typography>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { ContextMenu } from "shivanya-ui";'}
        usageCode={`<ContextMenu
  open={open}
  size="md"
  variant="default"
  radius="md"
  onClose={() => setOpen(false)}
>
  <button type="button">
    Edit
  </button>

  <button type="button">
    Delete
  </button>
</ContextMenu>`}
        props={[
          {
            name: "open",
            type: "boolean",
            defaultValue: "false",
            description:
              "Controls menu visibility.",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            defaultValue: '"md"',
            description:
              "Controls the menu width.",
          },
          {
            name: "variant",
            type:
              '"default" | "filled" | "outlined"',
            defaultValue: '"default"',
            description:
              "Controls the menu visual variant.",
          },
          {
            name: "radius",
            type:
              '"none" | "sm" | "md" | "lg"',
            defaultValue: '"md"',
            description:
              "Controls the menu border radius.",
          },
          {
            name: "state",
            type: "string",
            defaultValue: "—",
            description:
              "Controls the menu state.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description:
              "Disables menu interaction.",
          },
          {
            name: "closeOnClick",
            type: "boolean",
            defaultValue: "true",
            description:
              "Closes the menu when it is clicked.",
          },
          {
            name: "closeOnEscape",
            type: "boolean",
            defaultValue: "true",
            description:
              "Closes the menu when Escape is pressed.",
          },
          {
            name: "onClose",
            type: "() => void",
            defaultValue: "—",
            description:
              "Called when the menu closes.",
          },
        ]}
      />
    </section>
  );
}