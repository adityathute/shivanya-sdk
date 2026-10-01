import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Alert, alertDocs } from "shivanya-ui";

export default function AlertDemo() {
  const [closed, setClosed] = useState(false);

  return (
    <section className="demo">
      <DemoHeader title={alertDocs.name} description={alertDocs.description} />

      <DemoSection title="Basic">
        <div className="feedback-demo-stack">
          <Alert>This is a basic alert message.</Alert>
          <Alert title="Information">
            This alert includes a title and description.
          </Alert>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="feedback-demo-stack">
          <Alert title="Default" variant="default">
            Default alert appearance.
          </Alert>
          <Alert title="Bordered" variant="bordered" color="primary">
            Bordered alert appearance.
          </Alert>
          <Alert title="Filled" variant="filled" color="success">
            Filled alert appearance.
          </Alert>
          <Alert title="Ghost" variant="ghost" color="warning">
            Ghost alert appearance.
          </Alert>
        </div>
      </DemoSection>

      <DemoSection title="Colors">
        <div className="feedback-demo-stack">
          <Alert color="default" title="Default">Default semantic color.</Alert>
          <Alert color="primary" title="Primary">Primary information.</Alert>
          <Alert color="secondary" title="Secondary">Secondary information.</Alert>
          <Alert color="success" title="Success">The operation completed successfully.</Alert>
          <Alert color="warning" title="Warning">Please review this information.</Alert>
          <Alert color="danger" title="Danger">Something went wrong.</Alert>
          <Alert color="info" title="Info">Here is some additional information.</Alert>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-stack">
          <Alert size="xs" title="Extra Small">Extra small alert.</Alert>
          <Alert size="sm" title="Small">Small alert.</Alert>
          <Alert size="md" title="Medium">Medium alert.</Alert>
          <Alert size="lg" title="Large">Large alert.</Alert>
          <Alert size="xl" title="Extra Large">Extra large alert.</Alert>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="feedback-demo-stack">
          <Alert title="None" radius="none" color="primary">No rounded corners.</Alert>
          <Alert title="Small" radius="sm" color="primary">Small radius.</Alert>
          <Alert title="Medium" radius="md" color="primary">Medium radius.</Alert>
          <Alert title="Large" radius="lg" color="primary">Large radius.</Alert>
          <Alert title="Full" radius="full" color="primary">Fully rounded alert.</Alert>
        </div>
      </DemoSection>

      <DemoSection title="Icon">
        <div className="feedback-demo-stack">
          <Alert title="Success" color="success" icon="✓">Your changes were saved successfully.</Alert>
          <Alert title="Warning" color="warning" icon="!">Please check the information before continuing.</Alert>
          <Alert title="Error" color="danger" icon="×">The operation could not be completed.</Alert>
          <Alert title="Information" color="info" icon="i">Additional information is available.</Alert>
        </div>
      </DemoSection>

      <DemoSection title="Closable">
        <div className="feedback-demo-stack">
          <Alert title="Closable Alert" color="primary" closable>
            This alert can be dismissed.
          </Alert>

          {!closed ? (
            <Alert title="Controlled Close" color="success" closable onClose={() => setClosed(true)}>
              Click the close button to remove this alert.
            </Alert>
          ) : (
            <div className="feedback-demo-actions">
              <button
                type="button"
                className="feedback-demo-reset"
                onClick={() => setClosed(false)}
              >
                Show alert again
              </button>
            </div>
          )}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="feedback-demo-stack">
          <Alert title="Default State" state="default">Normal alert state.</Alert>
          <Alert title="Loading State" state="loading">The alert is currently loading.</Alert>
          <Alert title="Disabled State" state="disabled">This alert is disabled.</Alert>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="feedback-demo-stack">
          <Alert title="Disabled Alert" disabled closable color="danger">
            The close action is disabled.
          </Alert>
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <div className="feedback-demo-stack">
          <Alert title="Changes Saved" icon="✓" closable color="success" variant="filled" size="lg" radius="lg">
            Your changes have been saved successfully.
          </Alert>
          <Alert title="Important Warning" icon="!" closable color="warning" variant="bordered" size="md" radius="md">
            Review the information before continuing.
          </Alert>
          <Alert title="Something Went Wrong" icon="×" closable color="danger" variant="ghost" size="sm" radius="sm">
            Please try again or contact support.
          </Alert>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={alertDocs.importCode}
        usageCode={alertDocs.usageCode}
        props={alertDocs.props}
      />
    </section>
  );
}
