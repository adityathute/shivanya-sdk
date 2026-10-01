import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./layout-demo.css";

import { Container, Typography } from "shivanya-ui";

const props = [
  ["size", '"sm" | "md" | "lg" | "xl" | "full"', '"lg"'],
  ["padding", '"none" | "xs" | "sm" | "md" | "lg" | "xl"', '"md"'],
  ["centered", "boolean", "true"],
];

export default function ContainerDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Container" description="Constrain content width and keep page content centered." />

      <DemoSection title="Sizes">
        <div className="layout-demo-stack">
          {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
            <div className="layout-demo-card" key={size}>
              <span className="layout-demo-label">{size}</span>
              <Container size={size} padding="sm" centered className="layout-demo-container">
                <div className="layout-demo-box">Container content</div>
              </Container>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Padding">
        <div className="layout-demo-grid">
          {(["none", "xs", "sm", "md", "lg", "xl"] as const).map((padding) => (
            <div className="layout-demo-card" key={padding}>
              <span className="layout-demo-label">{padding}</span>
              <Container size="md" padding={padding} centered className="layout-demo-container">
                <div className="layout-demo-box"><Typography>Content</Typography></div>
              </Container>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Centered">
        <div className="layout-demo-grid">
          <Container size="sm" padding="md" centered className="layout-demo-container">
            <div className="layout-demo-box">Centered</div>
          </Container>
          <Container size="sm" padding="md" centered={false} className="layout-demo-container">
            <div className="layout-demo-box">Not centered</div>
          </Container>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Container } from "shivanya-ui";'}
        usageCode={'<Container size="lg">Content</Container>'}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "Container property." }))}
      />
    </section>
  );
}
