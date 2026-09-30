import { useState } from "react";

import { Select, Typography, selectDocs } from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

const countryOptions = [
  { value: "in", label: "India" },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
];

export default function SelectDemo() {
  const [country, setCountry] = useState("in");

  return (
    <section className="demo">
      <DemoHeader
        title={selectDocs.name}
        description={selectDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          A basic native select control.
        </Typography>

        <div className="demo-section-content-fit">
          <Select label="Country" options={countryOptions} />
        </div>
      </DemoSection>

      <DemoSection title="Options">
        <Typography variant="bodySmall" color="secondary">
          Render options from the options prop.
        </Typography>

        <div className="demo-section-content-fit">
          <Select label="Country" options={countryOptions} />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography variant="bodySmall" color="secondary">
          Control the selected option from React state.
        </Typography>

        <div className="demo-section-content-fit">
          <Select
            label="Country"
            value={country}
            options={countryOptions}
            onChange={(event) => setCountry(event.target.value)}
          />

          <Typography variant="bodySmall" color="secondary">
            Selected country: {country}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available select sizes.
        </Typography>

        <div className="demo-form-stack">
          <Select size="sm" label="Small" options={countryOptions} />

          <Select size="md" label="Medium" options={countryOptions} />

          <Select size="lg" label="Large" options={countryOptions} />
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <Typography variant="bodySmall" color="secondary">
          Available semantic select states.
        </Typography>

        <div className="demo-section-content-fit">
          <Select label="Default" variant="default" options={countryOptions} />

          <Select label="Success" variant="success" options={countryOptions} />

          <Select label="Error" variant="error" options={countryOptions} />
        </div>
      </DemoSection>

      <DemoSection title="Helper Text">
        <Typography variant="bodySmall" color="secondary">
          Display supporting information below the select.
        </Typography>

        <div className="demo-section-content-fit">
          <Select
            label="Country"
            helperText="Choose the country where you currently live."
            options={countryOptions}
          />
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography variant="bodySmall" color="secondary">
          Display validation feedback.
        </Typography>

        <div className="demo-section-content-fit">
          <Select
            label="Country"
            error="Please select your country."
            options={countryOptions}
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled Option">
        <Typography variant="bodySmall" color="secondary">
          Individual options can be disabled.
        </Typography>

        <div className="demo-section-content-fit">
          <Select
            label="Plan"
            options={[
              {
                value: "free",
                label: "Free",
              },
              {
                value: "pro",
                label: "Pro",
              },
              {
                value: "enterprise",
                label: "Enterprise",
                disabled: true,
              },
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent interaction with the select.
        </Typography>

        <div className="demo-section-content-fit">
          <Select
            label="Country"
            value="in"
            options={countryOptions}
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Required">
        <Typography variant="bodySmall" color="secondary">
          Mark the select as required.
        </Typography>

        <div className="demo-section-content-fit">
          <Select label="Country" options={countryOptions} required />
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <Typography variant="bodySmall" color="secondary">
          Stretch the select to the available width.
        </Typography>

        <div className="demo-section-content">
          <Select label="Country" options={countryOptions} fullWidth />
        </div>
      </DemoSection>

      <DemoSection title="Custom Children">
        <Typography variant="bodySmall" color="secondary">
          Provide native option elements directly when more control is needed.
        </Typography>

        <div className="demo-section-content-fit">
          <Select label="Priority">
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={selectDocs.importCode}
        usageCode={selectDocs.usageCode}
        props={selectDocs.props}
      />
    </section>
  );
}
