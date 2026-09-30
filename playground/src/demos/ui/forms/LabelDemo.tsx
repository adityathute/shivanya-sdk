import {
  Input,
  Label,
  Typography,
  labelDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function LabelDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={labelDocs.name}
        description={labelDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Associate a label with a form control.
        </Typography>

        <div className="demo-section-content-fit">
          <div className="demo-form-stack">
            <Label htmlFor="label-basic">
              Email
            </Label>

            <Input
              id="label-basic"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available label sizes.
        </Typography>

        <div className="demo-form-stack">
          <div>
            <Label
              size="sm"
              htmlFor="label-small"
            >
              Small label
            </Label>

            <Input
              id="label-small"
              size="sm"
              placeholder="Small input"
            />
          </div>

          <div>
            <Label
              size="md"
              htmlFor="label-medium"
            >
              Medium label
            </Label>

            <Input
              id="label-medium"
              size="md"
              placeholder="Medium input"
            />
          </div>

          <div>
            <Label
              size="lg"
              htmlFor="label-large"
            >
              Large label
            </Label>

            <Input
              id="label-large"
              size="lg"
              placeholder="Large input"
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <Typography variant="bodySmall" color="secondary">
          Available semantic label states.
        </Typography>

        <div className="demo-form-stack">
          <Label variant="default">
            Default label
          </Label>

          <Label variant="success">
            Success label
          </Label>

          <Label variant="error">
            Error label
          </Label>
        </div>
      </DemoSection>

      <DemoSection title="Required">
        <Typography variant="bodySmall" color="secondary">
          Display a required indicator.
        </Typography>

        <div className="demo-section-content-fit">
          <div className="demo-form-stack">
            <Label
              htmlFor="label-required"
              required
            >
              Full name
            </Label>

            <Input
              id="label-required"
              placeholder="Your full name"
              required
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Display a label for a disabled form control.
        </Typography>

        <div className="demo-section-content-fit">
          <div className="demo-form-stack">
            <Label
              htmlFor="label-disabled"
              disabled
            >
              Disabled field
            </Label>

            <Input
              id="label-disabled"
              placeholder="Unavailable"
              disabled
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography variant="bodySmall" color="secondary">
          Use the error variant with an invalid form control.
        </Typography>

        <div className="demo-section-content-fit">
          <div className="demo-form-stack">
            <Label
              htmlFor="label-error"
              variant="error"
            >
              Email
            </Label>

            <Input
              id="label-error"
              placeholder="you@example.com"
              aria-invalid="true"
            />
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={labelDocs.importCode}
        usageCode={labelDocs.usageCode}
        props={labelDocs.props}
      />
    </section>
  );
}