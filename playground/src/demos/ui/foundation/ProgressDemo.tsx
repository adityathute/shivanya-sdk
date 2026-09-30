import {
  Progress,
  progressDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function ProgressDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={progressDocs.name}
        description={progressDocs.description}
      />

      <DemoSection title="Sizes">
        <div className="demo-section-content">
          <Progress value={35} size="sm" />
          <Progress value={55} size="md" />
          <Progress value={75} size="lg" />
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="demo-section-content">
          <Progress value={60} variant="primary" />
          <Progress value={60} variant="secondary" />
          <Progress value={60} variant="success" />
          <Progress value={60} variant="warning" />
          <Progress value={60} variant="danger" />
          <Progress value={60} variant="info" />
        </div>
      </DemoSection>

      <DemoSection title="Value">
        <div className="demo-section-content">
          <Progress
            value={72}
            showValue
            variant="success"
          />

          <Progress
            value={45}
            max={60}
            showValue
            variant="info"
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={progressDocs.importCode}
        usageCode={progressDocs.usageCode}
        props={progressDocs.props}
      />
    </section>
  );
}