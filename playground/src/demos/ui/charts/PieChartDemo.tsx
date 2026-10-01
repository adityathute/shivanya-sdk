import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./charts-demo.css";

import { PieChart, pieChartDocs, Typography } from "shivanya-ui";

const data = [
  { id: "sales", name: "Sales", value: 45 },
  { id: "marketing", name: "Marketing", value: 25 },
  { id: "support", name: "Support", value: 18 },
  { id: "other", name: "Other", value: 12 },
];

const props = [
  ["size", '"xs" | "sm" | "md" | "lg" | "xl"', '"md"'],
  ["state", '"default" | "loading" | "empty" | "disabled"', '"default"'],
  ["showLabels", "boolean", "true"],
  ["showLegend", "boolean", "true"],
  ["legendPosition", '"top" | "right" | "bottom" | "left"', '"bottom"'],
  ["outerRadius", "number", "auto"],
  ["startAngle", "number", "-90"],
  ["endAngle", "number", "270"],
];

export default function PieChartDemo() {
  const [selected, setSelected] = useState("None");

  return (
    <section className="demo">
      <DemoHeader title={pieChartDocs.name} description={pieChartDocs.description} />

      <DemoSection title="Basic">
        <div className="charts-demo-grid">
          <div className="charts-demo-card"><span className="charts-demo-label">Default</span><PieChart data={data} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Large</span><PieChart size="lg" data={data} /></div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="charts-demo-grid charts-demo-grid-wide">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div className="charts-demo-card" key={size}>
              <span className="charts-demo-label">{size.toUpperCase()}</span>
              <PieChart size={size} data={data} />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Legend Positions">
        <div className="charts-demo-grid">
          {(["top", "right", "bottom", "left"] as const).map((position) => (
            <div className="charts-demo-card" key={position}>
              <span className="charts-demo-label">{position}</span>
              <PieChart data={data} legendPosition={position} />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Labels and Legend">
        <div className="charts-demo-grid">
          <div className="charts-demo-card"><span className="charts-demo-label">Without Legend</span><PieChart data={data} showLegend={false} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Without Labels</span><PieChart data={data} showLabels={false} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Labels + Legend</span><PieChart data={data} showLabels showLegend /></div>
        </div>
      </DemoSection>

      <DemoSection title="Radius and Angles">
        <div className="charts-demo-grid">
          <div className="charts-demo-card"><span className="charts-demo-label">Smaller Radius</span><PieChart data={data} outerRadius={70} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Larger Radius</span><PieChart data={data} outerRadius={105} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Quarter Rotation</span><PieChart data={data} startAngle={0} endAngle={270} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Half Chart</span><PieChart data={data} startAngle={0} endAngle={180} /></div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="charts-demo-grid">
          <div className="charts-demo-card"><span className="charts-demo-label">Loading</span><PieChart state="loading" data={[]} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Empty</span><PieChart state="empty" data={[]} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Disabled</span><PieChart state="disabled" data={data} /></div>
        </div>
      </DemoSection>

      <DemoSection title="Formatting and Interaction">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Value Formatter</span>
            <PieChart data={data} valueFormatter={(value) => `${value} units`} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Label Formatter</span>
            <PieChart data={data} labelFormatter={(value) => value.toUpperCase()} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Clickable · Selected: {selected}</span>
            <PieChart data={data} onSegmentClick={(segment) => setSelected(segment.label)} />
          </div>
          <div className="charts-demo-card">
            <Typography variant="bodySmall" color="secondary">
              Click a slice to update the selected segment label.
            </Typography>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={pieChartDocs.importCode}
        usageCode={pieChartDocs.usageCode}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "PieChart property." }))}
      />
    </section>
  );
}
