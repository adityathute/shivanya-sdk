import {
  ErrorMessage,
  Typography,
  errorMessageDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function ErrorMessageDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={errorMessageDocs.name}
        description={errorMessageDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Display validation feedback below a form field.
        </Typography>

        <div className="demo-section-content-fit">
          <ErrorMessage>
            Something went wrong. Please try again.
          </ErrorMessage>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Choose the message text size.
        </Typography>

        <div className="demo-form-stack">
          <ErrorMessage size="sm">
            Small error message.
          </ErrorMessage>

          <ErrorMessage size="md">
            Medium error message.
          </ErrorMessage>

          <ErrorMessage size="lg">
            Large error message.
          </ErrorMessage>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <Typography variant="bodySmall" color="secondary">
          Display different semantic message states.
        </Typography>

        <div className="demo-form-stack">
          <ErrorMessage variant="default">
            Default validation message.
          </ErrorMessage>

          <ErrorMessage variant="success">
            Your information was saved successfully.
          </ErrorMessage>

          <ErrorMessage variant="error">
            Something went wrong. Please try again.
          </ErrorMessage>

          <ErrorMessage variant="warning">
            Please review the information before continuing.
          </ErrorMessage>
        </div>
      </DemoSection>

      <DemoSection title="Size and Variant">
        <Typography variant="bodySmall" color="secondary">
          Combine text sizes with semantic variants.
        </Typography>

        <div className="demo-form-stack">
          <ErrorMessage
            size="sm"
            variant="error"
          >
            Small error message.
          </ErrorMessage>

          <ErrorMessage
            size="md"
            variant="warning"
          >
            Medium warning message.
          </ErrorMessage>

          <ErrorMessage
            size="lg"
            variant="success"
          >
            Large success message.
          </ErrorMessage>
        </div>
      </DemoSection>

      <DemoSection title="Longer Message">
        <Typography variant="bodySmall" color="secondary">
          Error messages can contain more detailed information.
        </Typography>

        <div className="demo-section-content-fit">
          <ErrorMessage>
            We could not process your request. Please check the
            information you entered and try again.
          </ErrorMessage>
        </div>
      </DemoSection>

      <DemoSection title="Form Example">
        <Typography variant="bodySmall" color="secondary">
          Use an error message as validation feedback.
        </Typography>

        <div className="demo-form-stack">
          <Typography variant="bodySmall">
            Email address
          </Typography>

          <ErrorMessage variant="error">
            Please enter a valid email address.
          </ErrorMessage>
        </div>
      </DemoSection>

      <DemoSection title="Custom Content">
        <Typography variant="bodySmall" color="secondary">
          ErrorMessage accepts React content as its children.
        </Typography>

        <div className="demo-form-stack">
          <ErrorMessage variant="error">
            Please check your{" "}
            <strong>email address</strong> before continuing.
          </ErrorMessage>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={errorMessageDocs.importCode}
        usageCode={errorMessageDocs.usageCode}
        props={errorMessageDocs.props}
      />
    </section>
  );
}