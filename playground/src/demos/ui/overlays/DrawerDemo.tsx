import { useState } from "react";
import { Button, Drawer, Typography } from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./overlays-demo.css";

type DrawerPosition =
  | "left"
  | "right"
  | "top"
  | "bottom";

type DrawerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

export default function DrawerDemo() {
  const [open, setOpen] = useState(false);

  const [position, setPosition] =
    useState<DrawerPosition>("right");

  const [size, setSize] =
    useState<DrawerSize>("md");

  const [drawerTitle, setDrawerTitle] =
    useState("Drawer");

  const openDrawer = (
    nextPosition: DrawerPosition = position,
    nextSize: DrawerSize = size,
    nextTitle = "Drawer",
  ) => {
    setPosition(nextPosition);
    setSize(nextSize);
    setDrawerTitle(nextTitle);
    setOpen(true);
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Drawer"
        description="A sliding panel that opens from any edge of the screen."
      />

      <DemoSection title="Basic">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Open a drawer from the right side.
          </Typography>

          <Button
            onClick={() =>
              openDrawer("right", "md", "Drawer")
            }
          >
            Open Drawer
          </Button>
        </div>
      </DemoSection>

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
              onClick={() =>
                openDrawer(value, size, `${value} Drawer`)
              }
            >
              {value}
            </Button>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="overlays-demo-row">
          {(
            [
              "xs",
              "sm",
              "md",
              "lg",
              "xl",
              "full",
            ] as const
          ).map((value) => (
            <Button
              key={value}
              variant={
                size === value
                  ? "primary"
                  : "outline"
              }
              onClick={() =>
                openDrawer(
                  position,
                  value,
                  `${value} Drawer`,
                )
              }
            >
              {value}
            </Button>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Overlay and Escape">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            The drawer can close from the overlay or
            Escape key.
          </Typography>

          <Button
            onClick={() =>
              openDrawer(
                "right",
                "md",
                "Interactive Drawer",
              )
            }
          >
            Open Interactive Drawer
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Drawer Content">
        <div className="overlays-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            The same drawer instance is reused for every
            position and size.
          </Typography>

          <Button
            variant="outline"
            onClick={() =>
              openDrawer(
                "left",
                "md",
                "Content Drawer",
              )
            }
          >
            Open Content Drawer
          </Button>
        </div>
      </DemoSection>

      {/* One Drawer instance for the whole demo */}
      <Drawer
        open={open}
        position={position}
        size={size}
        title={drawerTitle}
        closeOnOverlayClick
        closeOnEscape
        onClose={() => setOpen(false)}
      >
        <div className="overlays-demo-panel-content">
          <Typography variant="h4">
            {drawerTitle}
          </Typography>

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            This content is displayed inside the drawer.
          </Typography>

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Position: {position}
          </Typography>

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Size: {size}
          </Typography>

          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      </Drawer>

      <DemoDocumentation
        importCode={'import { Drawer } from "shivanya-ui";'}
        usageCode={`<Drawer
  open={open}
  position="right"
  size="md"
  title="Drawer"
  closeOnOverlayClick
  closeOnEscape
  onClose={() => setOpen(false)}
>
  Drawer content
</Drawer>`}
        props={[
          {
            name: "open",
            type: "boolean",
            defaultValue: "false",
            description:
              "Controls whether the drawer is open.",
          },
          {
            name: "position",
            type:
              '"left" | "right" | "top" | "bottom"',
            defaultValue: '"right"',
            description:
              "Controls which edge the drawer opens from.",
          },
          {
            name: "size",
            type:
              '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
            defaultValue: '"md"',
            description:
              "Controls the drawer size.",
          },
          {
            name: "title",
            type: "string",
            defaultValue: "—",
            description:
              "Displays the drawer title.",
          },
          {
            name: "overlay",
            type: "boolean",
            defaultValue: "true",
            description:
              "Displays the page overlay.",
          },
          {
            name: "closeOnOverlayClick",
            type: "boolean",
            defaultValue: "true",
            description:
              "Closes the drawer when the overlay is clicked.",
          },
          {
            name: "closeOnEscape",
            type: "boolean",
            defaultValue: "true",
            description:
              "Closes the drawer when Escape is pressed.",
          },
          {
            name: "onClose",
            type: "() => void",
            defaultValue: "—",
            description:
              "Called when the drawer closes.",
          },
        ]}
      />
    </section>
  );
}