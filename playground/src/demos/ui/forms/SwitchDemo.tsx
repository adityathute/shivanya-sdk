import { useState } from "react";

import {
  Switch,
  Typography,
  switchDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function SwitchDemo() {
  const [notifications, setNotifications] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  return (
    <section className="demo">
      <DemoHeader
        title={switchDocs.name}
        description={switchDocs.description}
      />

      <DemoSection title="Basic">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          A basic on/off switch.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch label="Enable notifications" />
        </div>
      </DemoSection>

      <DemoSection title="Checked">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Display a switch in the checked state.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            label="Notifications enabled"
            defaultChecked
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Available switch sizes.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            size="sm"
            label="Small"
          />

          <Switch
            size="md"
            label="Medium"
            defaultChecked
          />

          <Switch
            size="lg"
            label="Large"
          />
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Available semantic switch states.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            label="Default"
            variant="default"
          />

          <Switch
            label="Success"
            variant="success"
            defaultChecked
          />

          <Switch
            label="Error"
            variant="error"
            defaultChecked
          />
        </div>
      </DemoSection>

      <DemoSection title="Description">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Add supporting information below the label.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            label="Email notifications"
            description="Receive important account updates by email."
          />
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Display validation feedback.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            label="Enable synchronization"
            error="Synchronization must be enabled."
          />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Control the switch state with React state.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            label="Enable notifications"
            checked={notifications}
            onChange={(event) =>
              setNotifications(event.target.checked)
            }
          />

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Notifications:{" "}
            {notifications ? "On" : "Off"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Multiple Switches">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Independent switches can manage separate settings.
        </Typography>

        <div className="demo-form-stack">
          <Switch
            label="Dark mode"
            checked={darkMode}
            onChange={(event) =>
              setDarkMode(event.target.checked)
            }
          />

          <Switch
            label="Email notifications"
            defaultChecked
          />

          <Switch
            label="Product updates"
          />

          <Switch
            label="Security alerts"
            defaultChecked
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Prevent interaction with the switch.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            label="Disabled"
            disabled
          />

          <Switch
            label="Disabled and checked"
            defaultChecked
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Native Props">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Native input properties are supported.
        </Typography>

        <div className="demo-section-content-fit">
          <Switch
            name="marketing"
            value="enabled"
            label="Marketing preferences"
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={switchDocs.importCode}
        usageCode={switchDocs.usageCode}
        props={switchDocs.props}
      />
    </section>
  );
}