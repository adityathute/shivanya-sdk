import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import type { ReactNode } from "react";

import "../../../components/demo/demo.css";
import "./layout-demo.css";

import { Flex, Typography } from "shivanya-ui";

const Item = ({ children }: { children: ReactNode }) => (
  <div className="layout-demo-item"><Typography variant="bodySmall">{children}</Typography></div>
);

const props = [
  ["direction", '"row" | "column" | "rowReverse" | "columnReverse"', '"row"'],
  ["justify", '"start" | "center" | "end" | "between" | "around" | "evenly"', '"start"'],
  ["align", '"start" | "center" | "end" | "stretch" | "baseline"', '"stretch"'],
  ["wrap", '"nowrap" | "wrap" | "wrapReverse"', '"nowrap"'],
  ["gap", '"none" | "xs" | "sm" | "md" | "lg" | "xl"', '"none"'],
];

export default function FlexDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Flex" description="Build flexible layouts with Flexbox controls." />

      <DemoSection title="Direction">
        <div className="layout-demo-grid">
          {(["row", "column", "rowReverse", "columnReverse"] as const).map((direction) => (
            <div className="layout-demo-card" key={direction}>
              <span className="layout-demo-label">{direction}</span>
              <Flex direction={direction} gap="sm" className="layout-demo-box">
                <Item>One</Item><Item>Two</Item><Item>Three</Item>
              </Flex>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Justify">
        <div className="layout-demo-grid">
          {(["start", "center", "end", "between", "around", "evenly"] as const).map((justify) => (
            <div className="layout-demo-card" key={justify}>
              <span className="layout-demo-label">{justify}</span>
              <Flex justify={justify} gap="sm" className="layout-demo-box">
                <Item>A</Item><Item>B</Item><Item>C</Item>
              </Flex>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Alignment and Gap">
        <div className="layout-demo-grid">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((gap) => (
            <div className="layout-demo-card" key={gap}>
              <span className="layout-demo-label">Gap · {gap}</span>
              <Flex align="center" gap={gap} className="layout-demo-box">
                <Item>One</Item><Item>Two</Item><Item>Three</Item>
              </Flex>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Wrap">
        <Flex wrap="wrap" gap="sm" className="layout-demo-box">
          {Array.from({ length: 8 }, (_, index) => <Item key={index}>Item {index + 1}</Item>)}
        </Flex>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Flex } from "shivanya-ui";'}
        usageCode={'<Flex direction="row" justify="between" gap="md">Content</Flex>'}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "Flex property." }))}
      />
    </section>
  );
}
