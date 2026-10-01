import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./layout-demo.css";

import { Grid } from "shivanya-ui";

const props = [
  ["columns", "1 | 2 | 3 | 4 | 5 | 6 | 12", "1"],
  ["rows", '"none" | 1 | 2 | 3 | 4 | 5 | 6', '"none"'],
  ["gap", '"none" | "xs" | "sm" | "md" | "lg" | "xl"', '"md"'],
  ["autoFlow", '"row" | "column" | "dense" | "rowDense" | "columnDense"', '"row"'],
];

function GridItems({ count }: { count: number }) {
  return <>{Array.from({ length: count }, (_, index) => <div className="layout-demo-grid-item" key={index}>{index + 1}</div>)}</>;
}

export default function GridDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Grid" description="Create structured responsive layouts with CSS Grid." />

      <DemoSection title="Columns">
        <div className="layout-demo-grid">
          {([1, 2, 3, 4, 6] as const).map((columns) => (
            <div className="layout-demo-card" key={columns}>
              <span className="layout-demo-label">{columns} columns</span>
              <Grid columns={columns} gap="sm">
                <GridItems count={columns === 6 ? 6 : columns} />
              </Grid>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Rows and Gaps">
        <div className="layout-demo-grid">
          <div className="layout-demo-card">
            <span className="layout-demo-label">3 rows</span>
            <Grid columns={2} rows={3} gap="md"><GridItems count={6} /></Grid>
          </div>
          <div className="layout-demo-card">
            <span className="layout-demo-label">Large gap</span>
            <Grid columns={3} gap="xl"><GridItems count={6} /></Grid>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Alignment">
        <div className="layout-demo-grid">
          {(["start", "center", "end", "stretch"] as const).map((alignItems) => (
            <div className="layout-demo-card" key={alignItems}>
              <span className="layout-demo-label">{alignItems}</span>
              <Grid columns={3} rows={2} gap="sm" alignItems={alignItems} justifyItems={alignItems} className="layout-demo-wide">
                <GridItems count={6} />
              </Grid>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Auto Flow">
        <div className="layout-demo-grid">
          {(["row", "column", "dense"] as const).map((autoFlow) => (
            <div className="layout-demo-card" key={autoFlow}>
              <span className="layout-demo-label">{autoFlow}</span>
              <Grid columns={3} autoFlow={autoFlow} gap="sm"><GridItems count={6} /></Grid>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Grid } from "shivanya-ui";'}
        usageCode={'<Grid columns={3} gap="md">Content</Grid>'}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "Grid property." }))}
      />
    </section>
  );
}
