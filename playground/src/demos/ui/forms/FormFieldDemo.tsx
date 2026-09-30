import {
  FormField,
  Input,
  Typography,
  formFieldDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function FormFieldDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={formFieldDocs.name}
        description={formFieldDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Group a form control with its label and description.
        </Typography>

        <div className="demo-section-content-fit">
          <FormField
            label="Email"
            description="We will never share your email."
          >
            <Input placeholder="you@example.com" />
          </FormField>
        </div>
      </DemoSection>

      <DemoSection title="Required">
        <Typography variant="bodySmall" color="secondary">
          Mark a field as required.
        </Typography>

        <div className="demo-section-content-fit">
          <FormField
            label="Username"
            description="Choose a unique username."
            required
          >
            <Input placeholder="username" />
          </FormField>
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography variant="bodySmall" color="secondary">
          Display an error state for the field.
        </Typography>

        <div className="demo-section-content-fit">
          <FormField
            label="Email"
            error="Please enter a valid email address."
          >
            <Input placeholder="you@example.com" />
          </FormField>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Disable the form control through the field wrapper.
        </Typography>

        <div className="demo-section-content-fit">
          <FormField
            label="Email"
            description="This field is currently unavailable."
            disabled
          >
            <Input placeholder="you@example.com" />
          </FormField>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available FormField sizes.
        </Typography>

        <div className="demo-form-stack">
          <FormField
            size="sm"
            label="Small"
            description="Small field label."
          >
            <Input size="sm" placeholder="Small input" />
          </FormField>

          <FormField
            size="md"
            label="Medium"
            description="Medium field label."
          >
            <Input size="md" placeholder="Medium input" />
          </FormField>

          <FormField
            size="lg"
            label="Large"
            description="Large field label."
          >
            <Input size="lg" placeholder="Large input" />
          </FormField>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={formFieldDocs.importCode}
        usageCode={formFieldDocs.usageCode}
        props={formFieldDocs.props}
      />
    </section>
  );
}