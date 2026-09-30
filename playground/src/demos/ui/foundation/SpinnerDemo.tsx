import {
  Spinner,
  spinnerDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function SpinnerDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={spinnerDocs.name}
        description={spinnerDocs.description}
      />

      <DemoSection title="Sizes">
        <div className="demo-example-row demo-example-row-align-end">
          <div className="demo-example-item">
            <Spinner size="xs" />
            <span>xs</span>
          </div>

          <div className="demo-example-item">
            <Spinner size="sm" />
            <span>sm</span>
          </div>

          <div className="demo-example-item">
            <Spinner size="md" />
            <span>md</span>
          </div>

          <div className="demo-example-item">
            <Spinner size="lg" />
            <span>lg</span>
          </div>

          <div className="demo-example-item">
            <Spinner size="xl" />
            <span>xl</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="demo-example-row">
          <div className="demo-example-item">
            <Spinner variant="primary" />
            <span>Primary</span>
          </div>

          <div className="demo-example-item">
            <Spinner variant="secondary" />
            <span>Secondary</span>
          </div>

          <div className="demo-example-item">
            <Spinner variant="success" />
            <span>Success</span>
          </div>

          <div className="demo-example-item">
            <Spinner variant="warning" />
            <span>Warning</span>
          </div>

          <div className="demo-example-item">
            <Spinner variant="danger" />
            <span>Danger</span>
          </div>

          <div className="demo-example-item">
            <Spinner variant="info" />
            <span>Info</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Accessible Label">
        <div className="demo-section-content">
          <Spinner
            label="Saving your changes"
            variant="success"
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={spinnerDocs.importCode}
        usageCode={spinnerDocs.usageCode}
        props={spinnerDocs.props}
      />
    </section>
  );
}