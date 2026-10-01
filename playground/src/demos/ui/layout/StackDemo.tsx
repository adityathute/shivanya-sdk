import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import type { ReactNode } from "react";

import "../../../components/demo/demo.css";
import "./layout-demo.css";

import { Stack, Typography } from "shivanya-ui";

const Item = ({ children }: { children: ReactNode }) => (
  <div className="layout-demo-item"><Typography variant="bodySmall">{children}</Typography></div>
);

const props = [
  ["direction", '"row" | "column"', '"column"'],
  ["gap", '"none" | "xs" | "sm" | "md" | "lg" | "xl"', '"md"'],
  ["align", '"start" | "center" | "end" | "stretch" | "baseline"', '"stretch"'],
  ["justify", '"start" | "center" | "end" | "between" | "around" | "evenly"', '"start"'],
  ["wrap", "boolean", "false"],
];

export default function StackDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Stack" description="Arrange content vertically or horizontally with consistent spacing." />

      <DemoSection title="Direction">
        <div className="layout-demo-grid">
          {(["column", "row"] as const).map((direction) => (
            <div className="layout-demo-card" key={direction}>
              <span className="layout-demo-label">{direction}</span>
              <Stack direction={direction} gap="md" className="layout-demo-box">
                <Item>One</Item><Item>Two</Item><Item>Three</Item>
              </Stack>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Alignment">
        <div className="layout-demo-grid">
          {(["start", "center", "end", "stretch", "baseline"] as const).map((align) => (
            <div className="layout-demo-card" key={align}>
              <span className="layout-demo-label">{align}</span>
              <Stack direction="row" align={align} gap="sm" className="layout-demo-box">
                <Item>A</Item><Item>BB</Item><Item>CCC</Item>
              </Stack>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Justify">
        <div className="layout-demo-grid">
          {(["start", "center", "end", "between", "around", "evenly"] as const).map((justify) => (
            <div className="layout-demo-card" key={justify}>
              <span className="layout-demo-label">{justify}</span>
              <Stack direction="row" justify={justify} gap="sm" className="layout-demo-box">
                <Item>A</Item><Item>B</Item><Item>C</Item>
              </Stack>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Gap and Wrap">
        <div className="layout-demo-grid">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((gap) => (
            <div className="layout-demo-card" key={gap}>
              <span className="layout-demo-label">gap · {gap}</span>
              <Stack direction="row" gap={gap} className="layout-demo-box">
                <Item>One</Item><Item>Two</Item><Item>Three</Item>
              </Stack>
            </div>
          ))}
        </div>
        <div className="layout-demo-card" style={{ marginTop: 16 }}>
          <span className="layout-demo-label">wrap · true</span>
          <Stack direction="row" wrap gap="sm" className="layout-demo-box">
            {Array.from({ length: 8 }, (_, index) => <Item key={index}>Item {index + 1}</Item>)}
          </Stack>
        </div>
      </DemoSection>

      <DemoSection title="Elements">
        <div className="layout-demo-grid">
          {(["div", "section", "article"] as const).map((as) => (
            <Stack key={as} as={as} gap="sm" className="layout-demo-box">
              <Item>{as}</Item>
            </Stack>
          ))}
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Stack } from "shivanya-ui";'}
        usageCode={'<Stack direction="column" gap="md">Content</Stack>'}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "Stack property." }))}
      />
    </section>
  );
}
