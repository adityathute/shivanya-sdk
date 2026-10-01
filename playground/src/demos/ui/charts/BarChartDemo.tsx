import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./charts-demo.css";

import { BarChart, barChartDocs, Typography } from "shivanya-ui";

const data = [
  { id: "jan", label: "Jan", value: 4200 },
  { id: "feb", label: "Feb", value: 6100 },
  { id: "mar", label: "Mar", value: 5300 },
  { id: "apr", label: "Apr", value: 7900 },
  { id: "may", label: "May", value: 6700 },
];

const secondsData = [
  { id: "login", label: "Login", value: 42, type: "seconds" as const },
  { id: "browse", label: "Browse", value: 95, type: "seconds" as const },
  { id: "checkout", label: "Checkout", value: 68, type: "seconds" as const },
  { id: "support", label: "Support", value: 124, type: "seconds" as const },
];

const props = [
  ["size", '"xs" | "sm" | "md" | "lg" | "xl"', '"lg"'],
  ["direction", '"horizontal" | "vertical"', '"horizontal"'],
  ["state", '"default" | "loading" | "empty" | "disabled"', '"default"'],
  ["labelPosition", '"left" | "top"', '"left"'],
  ["showGrid", "boolean", "true"],
  ["showXAxis", "boolean", "false"],
  ["showYAxis", "boolean", "false"],
  ["showLabels", "boolean", "true"],
  ["showValues", "boolean", "true"],
  ["animate", "boolean", "true"],
  ["animationDuration", "number", "700"],
  ["valueType", '"number" | "seconds"', '"number"'],
];

export default function BarChartDemo() {
  return (
    <section className="demo">
      <DemoHeader title={barChartDocs.name} description={barChartDocs.description} />

      <DemoSection title="Basic">
        <div className="charts-demo-stack">
          <Typography variant="bodySmall" color="secondary">
            Basic horizontal and vertical bar charts using the same dataset.
          </Typography>
          <div className="charts-demo-grid">
            <div className="charts-demo-card">
              <span className="charts-demo-label">Horizontal</span>
              <BarChart data={data} />
            </div>
            <div className="charts-demo-card">
              <span className="charts-demo-label">Vertical</span>
              <BarChart direction="vertical" data={data} />
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="charts-demo-grid charts-demo-grid-wide">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div className="charts-demo-card" key={size}>
              <span className="charts-demo-label">{size.toUpperCase()}</span>
              <BarChart size={size} data={data} />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Direction and Labels">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Horizontal · Top Labels</span>
            <BarChart direction="horizontal" labelPosition="top" data={data} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Vertical · Top Labels</span>
            <BarChart direction="vertical" labelPosition="top" data={data} />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Display Options">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Default</span>
            <BarChart data={data} showXAxis showYAxis />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Grid</span>
            <BarChart data={data} showGrid={false} showXAxis showYAxis />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without X Axis</span>
            <BarChart data={data} showXAxis={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Y Axis</span>
            <BarChart data={data} showYAxis={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Labels</span>
            <BarChart data={data} showLabels={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Without Values</span>
            <BarChart data={data} showValues={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Labels Only</span>
            <BarChart data={data} showValues={false} showXAxis showYAxis />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Values + Axes</span>
            <BarChart data={data} showValues showXAxis showYAxis />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Animation">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Animated</span>
            <BarChart data={data} animate animationDuration={700} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">No Animation</span>
            <BarChart data={data} animate={false} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Fast Animation</span>
            <BarChart data={data} animate animationDuration={250} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Slow Animation</span>
            <BarChart data={data} animate animationDuration={1400} />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="charts-demo-grid">
          <div className="charts-demo-card"><span className="charts-demo-label">Loading</span><BarChart state="loading" data={data} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Empty</span><BarChart state="empty" data={[]} /></div>
          <div className="charts-demo-card"><span className="charts-demo-label">Disabled</span><BarChart state="disabled" data={data} /></div>
        </div>
      </DemoSection>

      <DemoSection title="Values and Formatting">
        <div className="charts-demo-grid">
          <div className="charts-demo-card">
            <span className="charts-demo-label">Seconds</span>
            <BarChart data={secondsData} valueType="seconds" showXAxis showYAxis />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Custom Formatter</span>
            <BarChart data={data} valueFormatter={(value) => `${value} events`} showValues />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Custom Row Height</span>
            <BarChart data={data} rowHeight={56} />
          </div>
          <div className="charts-demo-card">
            <span className="charts-demo-label">Custom Padding</span>
            <BarChart data={data} padding={{ top: 20, right: 40, bottom: 20, left: 40 }} />
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={barChartDocs.importCode}
        usageCode={barChartDocs.usageCode}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "BarChart property." }))}
      />
    </section>
  );
}
