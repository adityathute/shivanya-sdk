import { useState } from "react";
import { Button, Sheet, Typography } from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./overlays-demo.css";

type SheetPosition = "left" | "right" | "top" | "bottom";
type SheetSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";
type SheetVariant = "default" | "filled" | "outlined";

export default function SheetDemo() {
  const [basicOpen, setBasicOpen] = useState(false);

  const [positionOpen, setPositionOpen] = useState(false);
  const [position, setPosition] =
    useState<SheetPosition>("bottom");

  const [sizeOpen, setSizeOpen] = useState(false);
  const [size, setSize] = useState<SheetSize>("md");

  const [behaviorOpen, setBehaviorOpen] = useState(false);

  const [variantOpen, setVariantOpen] = useState(false);
  const [variant, setVariant] =
    useState<SheetVariant>("default");

  return (
    <section className="demo">
      <DemoHeader
        title="Sheet"
        description="A lightweight overlay panel that can slide from any edge."
      />

      {/* Basic */}
      <DemoSection title="Basic">
        <div className="overlays-demo-stack">
          <Button onClick={() => setBasicOpen(true)}>
            Open Sheet
          </Button>

          <Sheet
            open={basicOpen}
            position="bottom"
            title="Sheet"
            onClose={() => setBasicOpen(false)}
          >
            <div className="overlays-demo-panel-content">
              <Typography variant="h4">
                Sheet Content
              </Typography>

              <Typography
                variant="bodySmall"
                color="secondary"
              >
                Sheet content can contain forms, actions,
                navigation, or other UI.
              </Typography>

              <Button
                variant="ghost"
                onClick={() => setBasicOpen(false)}
              >
                Close
              </Button>
            </div>
          </Sheet>
        </div>
      </DemoSection>

      {/* Positions */}
      <DemoSection title="Positions">
        <div className="overlays-demo-row">
          {(
            ["left", "right", "top", "bottom"] as const
          ).map((value) => (
            <Button
              key={value}
              variant={
                position === value
                  ? "primary"
                  : "outline"
              }
              onClick={() => {
                setPosition(value);
                setPositionOpen(true);
              }}
            >
              {value}
            </Button>
          ))}
        </div>

        <Sheet
          open={positionOpen}
          position={position}
          title={`${position} Sheet`}
          onClose={() => setPositionOpen(false)}
        >
          <div className="overlays-demo-panel-content">
            <Typography variant="h4">
              {position} Sheet
            </Typography>

            <Typography
              variant="bodySmall"
              color="secondary"
            >
              This sheet opens from the {position} side.
            </Typography>

            <Button
              variant="ghost"
              onClick={() => setPositionOpen(false)}
            >
              Close
            </Button>
          </div>
        </Sheet>
      </DemoSection>

      {/* Sizes */}
      <DemoSection title="Sizes">
        <div className="overlays-demo-row">
          {(
            ["xs", "sm", "md", "lg", "xl", "full"] as const
          ).map((value) => (
            <Button
              key={value}
              variant={
                size === value
                  ? "primary"
                  : "outline"
              }
              onClick={() => {
                setSize(value);
                setSizeOpen(true);
              }}
            >
              {value}
            </Button>
          ))}
        </div>

        <Sheet
          open={sizeOpen}
          position="bottom"
          size={size}
          title={`${size} Sheet`}
          onClose={() => setSizeOpen(false)}
        >
          <div className="overlays-demo-panel-content">
            <Typography variant="h4">
              {size} Size
            </Typography>

            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Current sheet size: {size}
            </Typography>

            <Button
              variant="ghost"
              onClick={() => setSizeOpen(false)}
            >
              Close
            </Button>
          </div>
        </Sheet>
      </DemoSection>

      {/* Close Behavior */}
      <DemoSection title="Close Behavior">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Use closeOnOverlayClick and closeOnEscape to
            control dismissal.
          </Typography>

          <Button onClick={() => setBehaviorOpen(true)}>
            Open Dismissible Sheet
          </Button>

          <Sheet
            open={behaviorOpen}
            position="bottom"
            title="Dismissible Sheet"
            closeOnOverlayClick
            closeOnEscape
            onClose={() => setBehaviorOpen(false)}
          >
            <div className="overlays-demo-panel-content">
              <Typography variant="h4">
                Dismissible Sheet
              </Typography>

              <Typography
                variant="bodySmall"
                color="secondary"
              >
                Press Escape or click outside the sheet to
                close it.
              </Typography>

              <Button
                variant="ghost"
                onClick={() => setBehaviorOpen(false)}
              >
                Close
              </Button>
            </div>
          </Sheet>
        </div>
      </DemoSection>

      {/* Variants */}
      <DemoSection title="Variants">
        <div className="overlays-demo-row">
          {(
            [
              "default",
              "filled",
              "outlined",
            ] as const
          ).map((value) => (
            <Button
              key={value}
              variant={
                variant === value
                  ? "primary"
                  : "outline"
              }
              onClick={() => {
                setVariant(value);
                setVariantOpen(true);
              }}
            >
              {value}
            </Button>
          ))}
        </div>

        <Sheet
          open={variantOpen}
          position="bottom"
          variant={variant}
          title={`${variant} Sheet`}
          onClose={() => setVariantOpen(false)}
        >
          <div className="overlays-demo-panel-content">
            <Typography variant="h4">
              {variant} Variant
            </Typography>

            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Current sheet variant: {variant}
            </Typography>

            <Button
              variant="ghost"
              onClick={() => setVariantOpen(false)}
            >
              Close
            </Button>
          </div>
        </Sheet>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Sheet } from "shivanya-ui";'}
        usageCode={`<Sheet
  open={open}
  position="bottom"
  size="md"
  title="Sheet"
  onClose={() => setOpen(false)}
>
  Sheet content
</Sheet>`}
        props={[
          {
            name: "open",
            type: "boolean",
            defaultValue: "false",
            description:
              "Controls whether the sheet is open.",
          },
          {
            name: "position",
            type:
              '"left" | "right" | "top" | "bottom"',
            defaultValue: '"right"',
            description:
              "Sheet opening position.",
          },
          {
            name: "size",
            type:
              '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
            defaultValue: '"md"',
            description:
              "Sheet size.",
          },
          {
            name: "variant",
            type:
              '"default" | "filled" | "outlined"',
            defaultValue: '"default"',
            description:
              "Sheet visual variant.",
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
              "Closes the sheet when Escape is pressed.",
          },
          {
            name: "closeOnOverlayClick",
            type: "boolean",
            defaultValue: "true",
            description:
              "Closes the sheet when the overlay is clicked.",
          },
          {
            name: "onClose",
            type: "() => void",
            defaultValue: "—",
            description:
              "Called when the sheet closes.",
          },
        ]}
      />
    </section>
  );
}