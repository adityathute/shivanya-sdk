import { useState } from "react";

import {
  PasswordInput,
  Typography,
  passwordInputDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function PasswordInputDemo() {
  const [password, setPassword] = useState("");
  const [controlledPassword, setControlledPassword] =
    useState("password123");

  return (
    <section className="demo">
      <DemoHeader
        title={passwordInputDocs.name}
        description={passwordInputDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          A password field with a show and hide action.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available password input sizes.
        </Typography>

        <div className="demo-form-stack">
          <PasswordInput
            size="sm"
            label="Small"
            placeholder="Password"
          />

          <PasswordInput
            size="md"
            label="Medium"
            placeholder="Password"
          />

          <PasswordInput
            size="lg"
            label="Large"
            placeholder="Password"
          />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography variant="bodySmall" color="secondary">
          Control the password value from React state.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            value={controlledPassword}
            onChange={(event) =>
              setControlledPassword(event.target.value)
            }
          />

          <Typography variant="bodySmall" color="secondary">
            Current value: {controlledPassword}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Helper Text">
        <Typography variant="bodySmall" color="secondary">
          Display supporting information below the field.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            helperText="Use at least 8 characters."
            placeholder="Enter your password"
          />
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography variant="bodySmall" color="secondary">
          Display validation feedback for an invalid password.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            error="Password must contain at least 8 characters."
          />
        </div>
      </DemoSection>

      <DemoSection title="Success">
        <Typography variant="bodySmall" color="secondary">
          Display successful validation feedback.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            value="StrongPassword123"
            onChange={() => {}}
            success="Password meets the requirements."
          />
        </div>
      </DemoSection>

      <DemoSection title="Warning">
        <Typography variant="bodySmall" color="secondary">
          Display a warning state.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            value="password123"
            onChange={() => {}}
            warning="This password could be stronger."
          />
        </div>
      </DemoSection>

      <DemoSection title="Revealable">
        <Typography variant="bodySmall" color="secondary">
          Enable or disable the password visibility action.
        </Typography>

        <div className="demo-form-stack">
          <PasswordInput
            label="Revealable"
            defaultValue="password123"
            revealable
          />

          <PasswordInput
            label="Not Revealable"
            defaultValue="password123"
            revealable={false}
          />
        </div>
      </DemoSection>

      <DemoSection title="Initially Visible">
        <Typography variant="bodySmall" color="secondary">
          Start with the password value visible.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            defaultValue="password123"
            visible
          />
        </div>
      </DemoSection>

      <DemoSection title="Required">
        <Typography variant="bodySmall" color="secondary">
          Mark the password field as required.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            required
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent interaction with the password field.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            value="password123"
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Read Only">
        <Typography variant="bodySmall" color="secondary">
          Display a password value without allowing changes.
        </Typography>

        <div className="demo-section-content-fit">
          <PasswordInput
            label="Password"
            value="password123"
            readOnly
          />
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <Typography variant="bodySmall" color="secondary">
          Stretch the password field to the available width.
        </Typography>

        <div className="demo-section-content">
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            fullWidth
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={passwordInputDocs.importCode}
        usageCode={passwordInputDocs.usageCode}
        props={passwordInputDocs.props}
      />
    </section>
  );
}