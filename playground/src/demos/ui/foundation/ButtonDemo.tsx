import {
  Button,
  buttonDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function ButtonDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="Button"
        description={buttonDocs.description}
      />

      <DemoSection title="Variants">
        <div className="demo-actions">
          <Button variant="primary">
            Primary
          </Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <Button variant="danger">
            Danger
          </Button>

          <Button variant="success">
            Success
          </Button>

          <Button variant="warning">
            Warning
          </Button>

          <Button variant="info">
            Info
          </Button>

          <Button variant="link">
            Link
          </Button>

          <Button variant="dark">
            Dark
          </Button>

          <Button variant="light">
            Light
          </Button>

          <Button variant="neutral">
            Neutral
          </Button>

          <Button variant="soft-primary">
            Soft Primary
          </Button>

          <Button variant="soft-secondary">
            Soft Secondary
          </Button>

          <Button variant="soft-success">
            Soft Success
          </Button>

          <Button variant="soft-warning">
            Soft Warning
          </Button>

          <Button variant="soft-danger">
            Soft Danger
          </Button>

          <Button variant="soft-info">
            Soft Info
          </Button>

          <Button variant="outline-primary">
            Outline Primary
          </Button>

          <Button variant="outline-secondary">
            Outline Secondary
          </Button>

          <Button variant="outline-success">
            Outline Success
          </Button>

          <Button variant="outline-warning">
            Outline Warning
          </Button>

          <Button variant="outline-danger">
            Outline Danger
          </Button>

          <Button variant="outline-info">
            Outline Info
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="demo-actions demo-actions-center">
          <Button size="xs">
            Extra Small
          </Button>

          <Button size="sm">
            Small
          </Button>

          <Button size="md">
            Medium
          </Button>

          <Button size="lg">
            Large
          </Button>

          <Button size="xl">
            Extra Large
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-actions">
          <Button loading>
            Loading
          </Button>

          <Button
            loading
            loadingText="Saving..."
          >
            Save
          </Button>

          <Button
            loading
            loadingText="Loading..."
            loadingPosition="after"
          >
            Continue
          </Button>

          <Button disabled>
            Disabled
          </Button>

          <Button rounded>
            Rounded
          </Button>
        </div>

        <div className="demo-full-width">
          <Button fullWidth>
            Full Width
          </Button>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={buttonDocs.importCode}
        usageCode={buttonDocs.usageCode}
        props={buttonDocs.props}
      />
    </section>
  );
}