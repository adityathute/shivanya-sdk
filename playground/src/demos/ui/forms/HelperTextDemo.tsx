import {
  HelperText,
  Typography,
  helperTextDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function HelperTextDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={helperTextDocs.name}
        description={helperTextDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Add supporting information below a form control.
        </Typography>

        <div className="demo-section-content-fit">
          <HelperText>
            We will never share your email address.
          </HelperText>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available helper text sizes.
        </Typography>

        <div className="demo-form-stack">
          <HelperText size="sm">
            Small helper text.
          </HelperText>

          <HelperText size="md">
            Medium helper text.
          </HelperText>

          <HelperText size="lg">
            Large helper text.
          </HelperText>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <Typography variant="bodySmall" color="secondary">
          Available semantic helper text states.
        </Typography>

        <div className="demo-form-stack">
          <HelperText>
            Default supporting information.
          </HelperText>

          <HelperText variant="success">
            Your information has been saved.
          </HelperText>

          <HelperText variant="error">
            Please enter a valid value.
          </HelperText>

          <HelperText variant="warning">
            Please review this information before continuing.
          </HelperText>
        </div>
      </DemoSection>

      <DemoSection title="Size and Variant">
        <Typography variant="bodySmall" color="secondary">
          Combine text size with a semantic variant.
        </Typography>

        <div className="demo-form-stack">
          <HelperText size="sm" variant="success">
            Small success message.
          </HelperText>

          <HelperText size="md" variant="warning">
            Medium warning message.
          </HelperText>

          <HelperText size="lg" variant="error">
            Large error message.
          </HelperText>
        </div>
      </DemoSection>

      <DemoSection title="Form Example">
        <Typography variant="bodySmall" color="secondary">
          Use helper text to explain what a form field expects.
        </Typography>

        <div className="demo-section-content-fit">
          <div className="demo-form-stack">
            <input
              className="demo-native-input"
              placeholder="Username"
            />

            <HelperText size="sm">
              Use 3–20 characters.
            </HelperText>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={helperTextDocs.importCode}
        usageCode={helperTextDocs.usageCode}
        props={helperTextDocs.props}
      />
    </section>
  );
}