import { Badge } from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function BadgeDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="Badge"
        description="Compact labels for status, categories, and metadata."
      />

      <DemoSection title="Variants">
        <div className="demo-actions">
          <Badge variant="primary">
            Primary
          </Badge>

          <Badge variant="secondary">
            Secondary
          </Badge>

          <Badge variant="success">
            Success
          </Badge>

          <Badge variant="warning">
            Warning
          </Badge>

          <Badge variant="danger">
            Danger
          </Badge>

          <Badge variant="info">
            Info
          </Badge>

          <Badge variant="outline">
            Outline
          </Badge>

          <Badge variant="soft">
            Soft
          </Badge>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="demo-actions demo-actions-center">
          <Badge size="sm">
            Small
          </Badge>

          <Badge size="md">
            Medium
          </Badge>

          <Badge size="lg">
            Large
          </Badge>
        </div>
      </DemoSection>

      <DemoSection title="Shape">
        <div className="demo-actions">
          <Badge variant="primary">
            Default
          </Badge>

          <Badge
            variant="primary"
            rounded
          >
            Rounded
          </Badge>

          <Badge
            variant="success"
            rounded
          >
            Active
          </Badge>

          <Badge
            variant="danger"
            rounded
          >
            Error
          </Badge>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { Badge } from "shivanya-ui";'}
        usageCode={'<Badge variant="success">Active</Badge>'}
        additionalCode={[
          {
            title: "Rounded",
            code: '<Badge variant="primary" rounded>Primary</Badge>',
          },
        ]}
      />
    </section>
  );
}