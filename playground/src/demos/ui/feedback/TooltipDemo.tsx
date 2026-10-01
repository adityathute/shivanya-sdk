import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, Tooltip, tooltipDocs } from "shivanya-ui";

export default function TooltipDemo() {
  const [placement, setPlacement] = useState<"top" | "right" | "bottom" | "left">("top");

  return (
    <section className="demo">
      <DemoHeader title={tooltipDocs.name} description={tooltipDocs.description} />

      <DemoSection title="Basic">
        <Tooltip content="Helpful information">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
      </DemoSection>

      <DemoSection title="Placements">
        <div className="feedback-demo-actions">
          <Tooltip content="Tooltip on top" placement="top">
            <Button variant="outline">Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" placement="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" placement="bottom">
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip on left" placement="left">
            <Button variant="outline">Left</Button>
          </Tooltip>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-actions">
          <Tooltip content="Extra small tooltip" size="xs"><Button variant="outline">XS</Button></Tooltip>
          <Tooltip content="Small tooltip" size="sm"><Button variant="outline">SM</Button></Tooltip>
          <Tooltip content="Medium tooltip" size="md"><Button variant="outline">MD</Button></Tooltip>
          <Tooltip content="Large tooltip" size="lg"><Button variant="outline">LG</Button></Tooltip>
          <Tooltip content="Extra large tooltip" size="xl"><Button variant="outline">XL</Button></Tooltip>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="feedback-demo-actions">
          <Tooltip content="Default tooltip" variant="default"><Button variant="outline">Default</Button></Tooltip>
          <Tooltip content="Bordered tooltip" variant="bordered"><Button variant="outline">Bordered</Button></Tooltip>
          <Tooltip content="Filled tooltip" variant="filled"><Button variant="outline">Filled</Button></Tooltip>
          <Tooltip content="Ghost tooltip" variant="ghost"><Button variant="outline">Ghost</Button></Tooltip>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="feedback-demo-actions">
          <Tooltip content="No radius" radius="none"><Button variant="outline">None</Button></Tooltip>
          <Tooltip content="Small radius" radius="sm"><Button variant="outline">Small</Button></Tooltip>
          <Tooltip content="Medium radius" radius="md"><Button variant="outline">Medium</Button></Tooltip>
          <Tooltip content="Large radius" radius="lg"><Button variant="outline">Large</Button></Tooltip>
          <Tooltip content="Full radius" radius="full"><Button variant="outline">Full</Button></Tooltip>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="feedback-demo-actions">
          <Tooltip content="Loading tooltip" state="loading"><Button variant="outline">Loading</Button></Tooltip>
          <Tooltip content="Disabled tooltip" state="disabled"><Button variant="outline">Disabled</Button></Tooltip>
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <Tooltip
          content="This tooltip combines size, variant, radius, and placement."
          placement={placement}
          size="lg"
          variant="bordered"
          radius="lg"
        >
          <Button>Combined tooltip</Button>
        </Tooltip>

        <div className="feedback-demo-actions">
          <Button variant="outline" onClick={() => setPlacement("top")}>Top</Button>
          <Button variant="outline" onClick={() => setPlacement("right")}>Right</Button>
          <Button variant="outline" onClick={() => setPlacement("bottom")}>Bottom</Button>
          <Button variant="outline" onClick={() => setPlacement("left")}>Left</Button>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={tooltipDocs.importCode}
        usageCode={tooltipDocs.usageCode}
        props={tooltipDocs.props}
      />
    </section>
  );
}
