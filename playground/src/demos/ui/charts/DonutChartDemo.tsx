import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./charts-demo.css";

import { DonutChart, donutChartDocs, Typography } from "shivanya-ui";

const data = [
  { id: "sales", name: "Sales", value: 45 },
  { id: "marketing", name: "Marketing", value: 25 },
  { id: "support", name: "Support", value: 18 },
  { id: "other", name: "Other", value: 12 },
];

const props = [
  ["size", '"xs" | "sm" | "md" | "lg" | "xl"', '"md"'],
  ["variant", '"default" | "bordered" | "filled" | "ghost"', '"default"'],
  ["state", '"default" | "loading" | "empty" | "disabled"', '"default"'],
  ["legendPosition", '"top" | "right" | "bottom" | "left"', '"right"'],
  ["labelPosition", '"none" | "inside" | "outside"', '"none"'],
  ["showLegend", "boolean", "true"],
  ["showCenterValue", "boolean", "true"],
  ["showCenterLabel", "boolean", "true"],
  ["showTooltip", "boolean", "true"],
  ["animate", "boolean", "true"],
  ["animation", '"none" | "draw" | "fade" | "scale"', '"draw"'],
  ["hoverScale", "number", "1.05"],
];

export default function DonutChartDemo() {
  const [selected, setSelected] = useState("None");

  return (
    <section className="demo">
      <DemoHeader
        title={donutChartDocs.name}
        description={donutChartDocs.description}
      />

      <DemoSection title="Basic">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Default</span>
            <DonutChart data={data} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Center Content</span>
            <DonutChart
              data={data}
              centerValue="100%"
              centerLabel="Completed"
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="charts-demo-grid charts-demo-grid-wide">
          {(["xs", "sm", "md"] as const).map((size) => (
            <div className="charts-demo-card" key={size}>
              <span className="charts-demo-label">{size.toUpperCase()}</span>
              <DonutChart size={size} data={data} />
            </div>
          ))}
        </div>

        <div className="charts-demo-grid charts-demo-grid-large">
          {(["lg", "xl"] as const).map((size) => (
            <div className="charts-demo-card" key={size}>
              <span className="charts-demo-label">{size.toUpperCase()}</span>
              <DonutChart size={size} data={data} />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Default</span>
            <DonutChart variant="default" data={data} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Bordered</span>
            <DonutChart variant="bordered" data={data} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Filled</span>
            <DonutChart variant="filled" data={data} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Ghost</span>
            <DonutChart variant="ghost" data={data} />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Legend Positions">
        <div className="charts-demo-grid">
          {(["top", "right", "bottom", "left"] as const).map((position) => (
            <div className="charts-demo-card" key={position}>
              <span className="charts-demo-label">{position}</span>
              <DonutChart data={data} legendPosition={position} />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Labels and Center">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Legend</span>
            <DonutChart data={data} showLegend={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Center Value</span>
            <DonutChart data={data} showCenterValue={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Center Label</span>
            <DonutChart data={data} showCenterLabel={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Center</span>
            <DonutChart
              data={data}
              showCenterValue={false}
              showCenterLabel={false}
            />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Inside Labels</span>
            <DonutChart data={data} showLabels labelPosition="inside" />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Outside Labels</span>
            <DonutChart data={data} showLabels labelPosition="outside" />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Animation">
        <div className="charts-demo-grid">
          {(["none", "draw", "fade", "scale"] as const).map((animation) => (
            <div className="charts-demo-card" key={animation}>
              <span className="charts-demo-label">{animation}</span>
              <DonutChart
                data={data}
                animation={animation}
                animate={animation !== "none"}
              />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Tooltip and Interaction">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Tooltip</span>
            <DonutChart data={data} showTooltip />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">No Tooltip</span>
            <DonutChart data={data} showTooltip={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Active Segment</span>
            <DonutChart data={data} activeIndex={1} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">
              Clicked Segment: {selected}
            </span>
            <DonutChart
              data={data}
              onSegmentClick={(segment) => setSelected(segment.label)}
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Loading</span>
            <DonutChart state="loading" data={[]} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Empty</span>
            <DonutChart state="empty" data={[]} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Disabled</span>
            <DonutChart state="disabled" data={data} />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Formatting">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Value Formatter</span>
            <DonutChart
              data={data}
              valueFormatter={(value) => `${value} units`}
            />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Label Formatter</span>
            <DonutChart
              data={data}
              labelFormatter={(value) => value.toUpperCase()}
            />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Center Formatter</span>
            <DonutChart
              data={data}
              centerFormatter={(value) => `${value} total`}
            />
          </div>
          <div className="charts-demo-card">
            <Typography variant="bodySmall" color="secondary">
              Hover the segments to see the interactive states and tooltip.
            </Typography>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={donutChartDocs.importCode}
        usageCode={donutChartDocs.usageCode}
        props={props.map(([name, type, defaultValue]) => ({
          name,
          type,
          defaultValue,
          description: "DonutChart property.",
        }))}
      />
    </section>
  );
}
