import {
  FormGroup,
  Input,
  Label,
  Typography,
  formGroupDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function FormGroupDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={formGroupDocs.name}
        description={formGroupDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Group related form controls with a label and description.
        </Typography>

        <div className="demo-section-content-fit">
          <FormGroup
            label="Profile"
            description="Basic account details."
          >
            <div className="demo-form-stack">
              <div>
                <Label htmlFor="name">
                  Name
                </Label>

                <Input
                  id="name"
                  placeholder="Your name"
                />
              </div>
            </div>
          </FormGroup>
        </div>
      </DemoSection>

      <DemoSection title="Multiple Fields">
        <Typography variant="bodySmall" color="secondary">
          Use a group to organize related fields together.
        </Typography>

        <div className="demo-section-content-fit">
          <FormGroup
            label="Contact Information"
            description="Your basic contact details."
          >
            <div className="demo-form-stack">
              <div>
                <Label htmlFor="full-name">
                  Name
                </Label>

                <Input
                  id="full-name"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </FormGroup>
        </div>
      </DemoSection>

      <DemoSection title="Spacing">
        <Typography variant="bodySmall" color="secondary">
          Control the spacing between grouped controls.
        </Typography>

        <div className="demo-form-stack">
          <FormGroup
            spacing="sm"
            label="Small"
            description="Small group spacing."
          >
            <Input placeholder="First field" />
            <Input placeholder="Second field" />
          </FormGroup>

          <FormGroup
            spacing="md"
            label="Medium"
            description="Medium group spacing."
          >
            <Input placeholder="First field" />
            <Input placeholder="Second field" />
          </FormGroup>

          <FormGroup
            spacing="lg"
            label="Large"
            description="Large group spacing."
          >
            <Input placeholder="First field" />
            <Input placeholder="Second field" />
          </FormGroup>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={formGroupDocs.importCode}
        usageCode={formGroupDocs.usageCode}
        props={formGroupDocs.props}
      />
    </section>
  );
}