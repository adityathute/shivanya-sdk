import {
  Link,
  linkDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function LinkDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={linkDocs.name}
        description={linkDocs.description}
      />

      <DemoSection title="Variants">
        <div className="demo-example-row">
          <Link href="#" variant="default">
            Default
          </Link>

          <Link href="#" variant="primary">
            Primary
          </Link>

          <Link href="#" variant="secondary">
            Secondary
          </Link>

          <Link href="#" variant="muted">
            Muted
          </Link>

          <Link href="#" variant="danger">
            Danger
          </Link>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="demo-example-row">
          <Link href="#" size="xs">
            Extra Small
          </Link>

          <Link href="#" size="sm">
            Small
          </Link>

          <Link href="#" size="md">
            Medium
          </Link>

          <Link href="#" size="lg">
            Large
          </Link>

          <Link href="#" size="xl">
            Extra Large
          </Link>
        </div>
      </DemoSection>

      <DemoSection title="States & Behavior">
        <div className="demo-example-row">
          <Link href="#" underline>
            Always Underlined
          </Link>

          <Link href="#" external>
            External Link
          </Link>

          <Link href="#" disabled>
            Disabled
          </Link>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={linkDocs.importCode}
        usageCode={linkDocs.usageCode}
        props={linkDocs.props}
      />
    </section>
  );
}