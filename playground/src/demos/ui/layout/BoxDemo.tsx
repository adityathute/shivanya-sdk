import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./layout-demo.css";

import { Box, Typography } from "shivanya-ui";

const props = [
  ["padding", '"none" | "xs" | "sm" | "md" | "lg" | "xl"', '"none"'],
  ["margin", '"none" | "xs" | "sm" | "md" | "lg" | "xl"', '"none"'],
  ["rounded", '"none" | "sm" | "md" | "lg" | "xl" | "full"', '"none"'],
  ["shadow", '"none" | "sm" | "md" | "lg"', '"none"'],
];

export default function BoxDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Box" description="Use a flexible wrapper for spacing, radius and shadow." />

      <DemoSection title="Padding">
        <div className="layout-demo-grid">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((padding) => (
            <div className="layout-demo-card" key={padding}>
              <span className="layout-demo-label">{padding}</span>
              <Box padding={padding} rounded="md" shadow="sm" className="layout-demo-box">
                <Typography>Box content</Typography>
              </Box>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Rounded and Shadow">
        <div className="layout-demo-grid">
          {(["sm", "md", "lg", "xl", "full"] as const).map((rounded) => (
            <div className="layout-demo-card" key={rounded}>
              <span className="layout-demo-label">Rounded · {rounded}</span>
              <Box padding="md" rounded={rounded} shadow="md" className="layout-demo-box">
                <Typography>Box</Typography>
              </Box>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Elements">
        <div className="layout-demo-grid">
          {(["div", "section", "article"] as const).map((as) => (
            <Box key={as} as={as} padding="md" rounded="md" shadow="sm" className="layout-demo-box">
              <Typography>{as}</Typography>
            </Box>
          ))}
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Box } from "shivanya-ui";'}
        usageCode={'<Box padding="md" rounded="md">Content</Box>'}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "Box property." }))}
      />
    </section>
  );
}
