import {
  Divider,
  dividerDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function DividerDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="Divider"
        description="Separates content with horizontal or vertical lines."
      />

      <DemoSection title="Variants">
        <div className="demo-section-content">
          <p>Solid</p>
          <Divider />

          <p>Dashed</p>
          <Divider variant="dashed" />

          <p>Dotted</p>
          <Divider variant="dotted" />
        </div>
      </DemoSection>

      <DemoSection title="Thickness & Spacing">
        <div className="demo-section-content">
          <Divider
            thickness="sm"
            spacing="sm"
          />

          <Divider
            thickness="md"
            spacing="md"
          />

          <Divider
            thickness="lg"
            spacing="lg"
          />
        </div>
      </DemoSection>

      <DemoSection title="Vertical">
        <div className="demo-vertical">
          <span>Left</span>

          <Divider
            as="div"
            orientation="vertical"
            spacing="md"
          />

          <span>Right</span>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Divider } from "shivanya-ui";'}
        usageCode={'<Divider variant="dashed" />'}
        props={dividerDocs.props}
      />
    </section>
  );
}