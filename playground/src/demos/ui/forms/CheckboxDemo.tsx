import { useState } from "react";

import {
  Checkbox,
  Typography,
  checkboxDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function CheckboxDemo() {
  const [controlled, setControlled] =
    useState(false);

  return (
    <section className="demo">
      <DemoHeader
        title={checkboxDocs.name}
        description={checkboxDocs.description}
      />

      <DemoSection title="Basic">
        <div className="demo-form-stack">
          <Checkbox label="Accept terms and conditions" />

          <Checkbox
            label="Accept terms and conditions"
            description="You can change this later."
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="demo-form-stack">
          <Checkbox
            size="sm"
            label="Small checkbox"
          />

          <Checkbox
            size="md"
            label="Medium checkbox"
          />

          <Checkbox
            size="lg"
            label="Large checkbox"
          />
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="demo-form-stack">
          <Checkbox
            variant="default"
            label="Default"
          />

          <Checkbox
            variant="error"
            label="Error"
          />

          <Checkbox
            variant="success"
            label="Success"
          />
        </div>
      </DemoSection>

      <DemoSection title="Checked Variants">
        <div className="demo-form-stack">
          <Checkbox
            variant="default"
            label="Default checked"
            checked
            readOnly
          />

          <Checkbox
            variant="error"
            label="Error checked"
            checked
            readOnly
          />

          <Checkbox
            variant="success"
            label="Success checked"
            checked
            readOnly
          />
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-form-stack">
          <Checkbox
            label="Unchecked"
          />

          <Checkbox
            label="Checked"
            checked
            readOnly
          />

          <Checkbox
            label="Disabled"
            disabled
          />

          <Checkbox
            label="Disabled checked"
            checked
            disabled
            readOnly
          />
        </div>
      </DemoSection>

      <DemoSection title="Description">
        <div className="demo-form-stack">
          <Checkbox
            label="Marketing emails"
            description="Receive product updates, announcements, and offers."
          />

          <Checkbox
            label="Security alerts"
            description="Important security notifications will always be sent."
            checked
            readOnly
          />
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <div className="demo-form-stack">
          <Checkbox
            label="Accept terms"
            error="You must accept the terms and conditions."
          />

          <Checkbox
            label="Required permission"
            error="This permission is required."
            variant="error"
          />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <div className="demo-form-stack">
          <Checkbox
            label="Enable notifications"
            checked={controlled}
            onChange={(event) =>
              setControlled(
                event.target.checked
              )
            }
          />

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Value:{" "}
            {controlled ? "true" : "false"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Native Props">
        <div className="demo-form-stack">
          <Checkbox
            label="Required checkbox"
            required
          />

          <Checkbox
            label="Read only checkbox"
            checked
            readOnly
          />

          <Checkbox
            label="Disabled checkbox"
            disabled
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={checkboxDocs.importCode}
        usageCode={checkboxDocs.usageCode}
        props={checkboxDocs.props}
      />
    </section>
  );
}