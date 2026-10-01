import { useState } from "react";
import { Button, CommandPalette, Typography } from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./overlays-demo.css";

type PaletteSize = "sm" | "md" | "lg";
type PaletteVariant = "default" | "filled" | "outlined";
type PaletteRadius = "none" | "sm" | "md" | "lg";

export default function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);

  const [size, setSize] =
    useState<PaletteSize>("md");

  const [variant, setVariant] =
    useState<PaletteVariant>("default");

  const [radius, setRadius] =
    useState<PaletteRadius>("md");

  const openPalette = (
    nextSize: PaletteSize = size,
    nextVariant: PaletteVariant = variant,
    nextRadius: PaletteRadius = radius,
  ) => {
    setSize(nextSize);
    setVariant(nextVariant);
    setRadius(nextRadius);
    setOpen(true);
  };

  const closePalette = () => {
    setOpen(false);
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Command Palette"
        description="A searchable command surface for quick actions."
      />

      {/* ---------------------------------------------------------------- */}
      {/* Basic */}
      {/* ---------------------------------------------------------------- */}

      <DemoSection title="Basic">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Open the command palette with the default
            configuration.
          </Typography>

          <Button
            onClick={() =>
              openPalette(
                "md",
                "default",
                "md",
              )
            }
          >
            Open Command Palette
          </Button>
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* Sizes */}
      {/* ---------------------------------------------------------------- */}

      <DemoSection title="Sizes">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Controls the width of the command palette.
          </Typography>

          <div className="overlays-demo-row">
            {(
              ["sm", "md", "lg"] as const
            ).map((nextSize) => (
              <Button
                key={nextSize}
                variant={
                  size === nextSize
                    ? "primary"
                    : "outline"
                }
                onClick={() =>
                  openPalette(
                    nextSize,
                    variant,
                    radius,
                  )
                }
              >
                {nextSize}
              </Button>
            ))}
          </div>
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* Variants */}
      {/* ---------------------------------------------------------------- */}

      <DemoSection title="Variants">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Controls the visual treatment of the palette.
          </Typography>

          <div className="overlays-demo-card-grid">
            {(
              [
                "default",
                "filled",
                "outlined",
              ] as const
            ).map((nextVariant) => (
              <div
                key={nextVariant}
                className="overlays-demo-card"
              >
                <Typography variant="bodySmall">
                  {nextVariant}
                </Typography>

                <Button
                  variant={
                    variant === nextVariant
                      ? "primary"
                      : "outline"
                  }
                  onClick={() =>
                    openPalette(
                      size,
                      nextVariant,
                      radius,
                    )
                  }
                >
                  Open
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* Radius */}
      {/* ---------------------------------------------------------------- */}

      <DemoSection title="Radius">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Controls the border radius of the palette.
          </Typography>

          <div className="overlays-demo-row">
            {(
              [
                "none",
                "sm",
                "md",
                "lg",
              ] as const
            ).map((nextRadius) => (
              <Button
                key={nextRadius}
                variant={
                  radius === nextRadius
                    ? "primary"
                    : "outline"
                }
                onClick={() =>
                  openPalette(
                    size,
                    variant,
                    nextRadius,
                  )
                }
              >
                {nextRadius}
              </Button>
            ))}
          </div>
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* Current configuration */}
      {/* ---------------------------------------------------------------- */}

      <DemoSection title="Current Configuration">
        <div className="overlays-demo-config">
          <div>
            <span>Size</span>
            <strong>{size}</strong>
          </div>

          <div>
            <span>Variant</span>
            <strong>{variant}</strong>
          </div>

          <div>
            <span>Radius</span>
            <strong>{radius}</strong>
          </div>
        </div>

        <div className="overlays-demo-config-action">
          <Button
            onClick={() =>
              openPalette(
                size,
                variant,
                radius,
              )
            }
          >
            Open Selected Configuration
          </Button>
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* Keyboard */}
      {/* ---------------------------------------------------------------- */}

      <DemoSection title="Keyboard">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Press Escape while the palette is open to
            close it.
          </Typography>

          <Button
            onClick={() =>
              openPalette(
                size,
                variant,
                radius,
              )
            }
          >
            Try It
          </Button>
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* Custom Commands */}
      {/* ---------------------------------------------------------------- */}

      <DemoSection title="Custom Commands">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Commands are regular children, so you can
            compose the palette with your own command
            items.
          </Typography>

          <div className="overlays-demo-command-list">
            <button
              type="button"
              className="overlays-demo-command"
            >
              <strong>New Project</strong>
              <span>
                Create a new project
              </span>
            </button>

            <button
              type="button"
              className="overlays-demo-command"
            >
              <strong>Open Project</strong>
              <span>
                Open an existing project
              </span>
            </button>

            <button
              type="button"
              className="overlays-demo-command"
            >
              <strong>Settings</strong>
              <span>
                Open application settings
              </span>
            </button>
          </div>
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* Command Palette */}
      {/* ---------------------------------------------------------------- */}

      <CommandPalette
        open={open}
        size={size}
        variant={variant}
        radius={radius}
        placeholder="Search commands..."
        closeOnEscape
        closeOnOverlayClick
        onClose={closePalette}
      >
        <button
          type="button"
          className="overlays-demo-command"
        >
          <strong>New Project</strong>
          <span>
            Create a new project
          </span>
        </button>

        <button
          type="button"
          className="overlays-demo-command"
        >
          <strong>Open Project</strong>
          <span>
            Open an existing project
          </span>
        </button>

        <button
          type="button"
          className="overlays-demo-command"
        >
          <strong>Settings</strong>
          <span>
            Open application settings
          </span>
        </button>
      </CommandPalette>

      {/* ---------------------------------------------------------------- */}
      {/* Documentation */}
      {/* ---------------------------------------------------------------- */}

      <DemoDocumentation
        importCode={
          'import { CommandPalette } from "shivanya-ui";'
        }
        usageCode={`<CommandPalette
  open={open}
  size="md"
  variant="default"
  radius="md"
  placeholder="Search commands..."
  closeOnEscape
  closeOnOverlayClick
  onClose={() => setOpen(false)}
>
  <button type="button">
    New Project
  </button>

  <button type="button">
    Open Project
  </button>

  <button type="button">
    Settings
  </button>
</CommandPalette>`}
        props={[
          {
            name: "open",
            type: "boolean",
            defaultValue: "false",
            description:
              "Controls palette visibility.",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            defaultValue: '"md"',
            description:
              "Controls the palette width.",
          },
          {
            name: "variant",
            type:
              '"default" | "filled" | "outlined"',
            defaultValue: '"default"',
            description:
              "Controls the palette visual variant.",
          },
          {
            name: "radius",
            type:
              '"none" | "sm" | "md" | "lg"',
            defaultValue: '"md"',
            description:
              "Controls the palette border radius.",
          },
          {
            name: "placeholder",
            type: "string",
            defaultValue: '"Search..."',
            description:
              "Search input placeholder.",
          },
          {
            name: "overlay",
            type: "boolean",
            defaultValue: "true",
            description:
              "Displays the page overlay.",
          },
          {
            name: "closeOnEscape",
            type: "boolean",
            defaultValue: "true",
            description:
              "Closes the palette when Escape is pressed.",
          },
          {
            name: "closeOnOverlayClick",
            type: "boolean",
            defaultValue: "true",
            description:
              "Closes the palette when the overlay is clicked.",
          },
          {
            name: "onClose",
            type: "() => void",
            defaultValue: "—",
            description:
              "Called when the palette closes.",
          },
        ]}
      />
    </section>
  );
}