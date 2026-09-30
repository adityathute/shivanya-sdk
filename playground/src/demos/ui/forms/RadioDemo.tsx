import { useState } from "react";

import {
  Radio,
  Typography,
  radioDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function RadioDemo() {
  const [plan, setPlan] = useState("pro");
  const [sizeValue, setSizeValue] = useState("md");

  return (
    <section className="demo">
      <DemoHeader
        title={radioDocs.name}
        description={radioDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          A basic radio control for a single choice.
        </Typography>

        <div className="demo-section-content-fit">
          <Radio
            name="basic-plan"
            value="pro"
            label="Pro"
          />
        </div>
      </DemoSection>

      <DemoSection title="Radio Group">
        <Typography variant="bodySmall" color="secondary">
          Use the same name to create mutually exclusive choices.
        </Typography>

        <div className="demo-form-stack">
          <Radio
            name="plan"
            value="free"
            label="Free"
            description="For getting started."
            checked={plan === "free"}
            onChange={(event) =>
              setPlan(event.target.value)
            }
          />

          <Radio
            name="plan"
            value="pro"
            label="Pro"
            description="For growing projects."
            checked={plan === "pro"}
            onChange={(event) =>
              setPlan(event.target.value)
            }
          />

          <Radio
            name="plan"
            value="enterprise"
            label="Enterprise"
            description="For larger teams."
            checked={plan === "enterprise"}
            onChange={(event) =>
              setPlan(event.target.value)
            }
          />

          <Typography variant="bodySmall" color="secondary">
            Selected plan: {plan}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available radio sizes.
        </Typography>

        <div className="demo-form-stack">
          <Radio
            name="radio-size"
            value="sm"
            size="sm"
            label="Small"
            checked={sizeValue === "sm"}
            onChange={(event) =>
              setSizeValue(event.target.value)
            }
          />

          <Radio
            name="radio-size"
            value="md"
            size="md"
            label="Medium"
            checked={sizeValue === "md"}
            onChange={(event) =>
              setSizeValue(event.target.value)
            }
          />

          <Radio
            name="radio-size"
            value="lg"
            size="lg"
            label="Large"
            checked={sizeValue === "lg"}
            onChange={(event) =>
              setSizeValue(event.target.value)
            }
          />
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <Typography variant="bodySmall" color="secondary">
          Available semantic radio states.
        </Typography>

        <div className="demo-form-stack">
          <Radio
            name="radio-variant"
            value="default"
            label="Default"
            variant="default"
            defaultChecked
          />

          <Radio
            name="radio-variant"
            value="success"
            label="Success"
            variant="success"
          />

          <Radio
            name="radio-variant"
            value="error"
            label="Error"
            variant="error"
          />
        </div>
      </DemoSection>

      <DemoSection title="Description">
        <Typography variant="bodySmall" color="secondary">
          Add supporting information below the radio label.
        </Typography>

        <div className="demo-section-content-fit">
          <Radio
            name="radio-description"
            value="option"
            label="Email notifications"
            description="Receive important account updates by email."
            defaultChecked
          />
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography variant="bodySmall" color="secondary">
          Display validation feedback for a radio choice.
        </Typography>

        <div className="demo-section-content-fit">
          <Radio
            name="radio-error"
            value="terms"
            label="Accept terms"
            error="You must select this option to continue."
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent interaction with a radio control.
        </Typography>

        <div className="demo-form-stack">
          <Radio
            name="radio-disabled"
            value="disabled"
            label="Disabled"
            disabled
          />

          <Radio
            name="radio-disabled-checked"
            value="checked"
            label="Disabled and selected"
            defaultChecked
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Required">
        <Typography variant="bodySmall" color="secondary">
          Mark a radio choice as required.
        </Typography>

        <div className="demo-section-content-fit">
          <Radio
            name="radio-required"
            value="required"
            label="Required option"
            required
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={radioDocs.importCode}
        usageCode={radioDocs.usageCode}
        props={radioDocs.props}
      />
    </section>
  );
}