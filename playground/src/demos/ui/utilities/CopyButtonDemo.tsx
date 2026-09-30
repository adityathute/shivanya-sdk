import {
  CopyButton,
  Typography,
  copyButtonDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function CopyButtonDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={copyButtonDocs.name}
        description={copyButtonDocs.description}
      />

      <DemoSection title="Basic">
        <div className="demo-section-content-fit">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Click the button to copy the value.
          </Typography>

          <CopyButton value="Hello from Shivanya" />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="demo-example-row">
          <CopyButton
            value="Hello from Shivanya"
            size="xs"
          >
            Extra Small
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            size="sm"
          >
            Small
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            size="md"
          >
            Medium
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            size="lg"
          >
            Large
          </CopyButton>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="demo-example-row">
          <CopyButton
            value="Hello from Shivanya"
            variant="primary"
          >
            Primary
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            variant="secondary"
          >
            Secondary
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            variant="success"
          >
            Success
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            variant="warning"
          >
            Warning
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            variant="danger"
          >
            Danger
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            variant="info"
          >
            Info
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            variant="outline"
          >
            Outline
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            variant="ghost"
          >
            Ghost
          </CopyButton>
        </div>
      </DemoSection>

      <DemoSection title="Width">
        <div className="demo-section-content-fit">
          <CopyButton value="Hello from Shivanya">
            Default Width
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            fullWidth
          >
            Full Width
          </CopyButton>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-example-row">
          <CopyButton value="Hello from Shivanya">
            Enabled
          </CopyButton>

          <CopyButton
            value="Hello from Shivanya"
            disabled
          >
            Disabled
          </CopyButton>
        </div>
      </DemoSection>

      <DemoSection title="Custom Text">
        <div className="demo-section-content-fit">
          <CopyButton
            value="Hello from Shivanya"
            copyText="Copy Code"
            copiedText="Copied ✓"
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={copyButtonDocs.importCode}
        usageCode={copyButtonDocs.usageCode}
        props={copyButtonDocs.props}
      />
    </section>
  );
}