import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, Popover, popoverDocs } from "shivanya-ui";

export default function PopoverDemo() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<
    "top" | "right" | "bottom" | "left"
  >("bottom");

  return (
    <section className="demo">
      <DemoHeader
        title={popoverDocs.name}
        description={popoverDocs.description}
      />

      <DemoSection title="Basic">
        <Popover
          trigger={<Button variant="outline">Open popover</Button>}
          header="Details"
          content="Popover content"
          footer="Footer"
        />
      </DemoSection>

      <DemoSection title="Placements">
        <div className="feedback-demo-actions">
          <Button
            onClick={() => {
              setPlacement("top");
              setOpen(true);
            }}
          >
            Top
          </Button>

          <Button
            onClick={() => {
              setPlacement("right");
              setOpen(true);
            }}
          >
            Right
          </Button>

          <Button
            onClick={() => {
              setPlacement("bottom");
              setOpen(true);
            }}
          >
            Bottom
          </Button>

          <Button
            onClick={() => {
              setPlacement("left");
              setOpen(true);
            }}
          >
            Left
          </Button>
        </div>

        <div className="feedback-demo-popover-stage">
          <Popover
            trigger={<Button variant="outline">Controlled popover</Button>}
            open={open}
            onOpenChange={setOpen}
            placement={placement}
            header={`Placement: ${placement}`}
            content="This popover is controlled by React state."
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-actions">
          <Popover
            trigger={<Button variant="outline">XS</Button>}
            size="xs"
            content="Extra small popover."
          />
          <Popover
            trigger={<Button variant="outline">SM</Button>}
            size="sm"
            content="Small popover."
          />
          <Popover
            trigger={<Button variant="outline">MD</Button>}
            size="md"
            content="Medium popover."
          />
          <Popover
            trigger={<Button variant="outline">LG</Button>}
            size="lg"
            content="Large popover."
          />
          <Popover
            trigger={<Button variant="outline">XL</Button>}
            size="xl"
            content="Extra large popover."
          />
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="feedback-demo-actions">
          <Popover
            trigger={<Button variant="outline">Default</Button>}
            variant="default"
            content="Default popover."
          />
          <Popover
            trigger={<Button variant="outline">Bordered</Button>}
            variant="bordered"
            content="Bordered popover."
          />
          <Popover
            trigger={<Button variant="outline">Filled</Button>}
            variant="filled"
            content="Filled popover."
          />
          <Popover
            trigger={<Button variant="outline">Ghost</Button>}
            variant="ghost"
            content="Ghost popover."
          />
        </div>
      </DemoSection>

      <DemoSection title="Header and Footer">
        <Popover
          trigger={<Button variant="outline">Open details</Button>}
          header="Details"
          content={
            <div className="feedback-demo-content">
              <strong>Popover content</strong>
              <span>Additional content can be rendered here.</span>
            </div>
          }
          footer={
            <Button size="sm" onClick={() => setOpen(false)}>
              Done
            </Button>
          }
        />
      </DemoSection>

      <DemoDocumentation
        importCode={popoverDocs.importCode}
        usageCode={popoverDocs.usageCode}
        props={popoverDocs.props}
      />
    </section>
  );
}
