import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./layout-demo.css";

import { Flex, Spacer, Typography } from "shivanya-ui";

const props = [
  ["grow", "number", "1"],
  ["shrink", "number", "1"],
  ["basis", "CSSProperties[\"flexBasis\"]", '"auto"'],
  ["as", '"div" | "span"', '"div"'],
];

export default function SpacerDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Spacer" description="Create flexible empty space between flex items." />

      <DemoSection title="Grow">
        <div className="layout-demo-grid">
          {([1, 2, 3] as const).map((grow) => (
            <div className="layout-demo-card" key={grow}>
              <span className="layout-demo-label">grow · {grow}</span>
              <Flex gap="sm" className="layout-demo-spacer">
                <div className="layout-demo-item">Start</div>
                <Spacer grow={grow} />
                <div className="layout-demo-item">End</div>
              </Flex>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Basis">
        <div className="layout-demo-grid">
          {(["40px", "80px", "120px"] as const).map((basis) => (
            <div className="layout-demo-card" key={basis}>
              <span className="layout-demo-label">basis · {basis}</span>
              <Flex gap="sm" className="layout-demo-spacer">
                <div className="layout-demo-item">Start</div>
                <Spacer basis={basis} grow={0} />
                <div className="layout-demo-item">End</div>
              </Flex>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Elements">
        <div className="layout-demo-grid">
          {(["div", "span"] as const).map((as) => (
            <div className="layout-demo-card" key={as}>
              <span className="layout-demo-label">{as}</span>
              <Flex gap="sm" className="layout-demo-spacer">
                <Typography>Start</Typography>
                <Spacer as={as} />
                <Typography>End</Typography>
              </Flex>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Spacer } from "shivanya-ui";'}
        usageCode={'<Flex><Item /> <Spacer /> <Item /></Flex>'}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "Spacer property." }))}
      />
    </section>
  );
}
