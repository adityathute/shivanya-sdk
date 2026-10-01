import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, Toast, toastDocs } from "shivanya-ui";

export default function ToastDemo() {
  const [visible, setVisible] = useState(true);
  const [durationVisible, setDurationVisible] = useState(false);

  return (
    <section className="demo">
      <DemoHeader title={toastDocs.name} description={toastDocs.description} />

      <DemoSection title="Basic">
        <div className="feedback-demo-stack">
          <Toast title="Saved">Changes saved.</Toast>
          <Toast title="Information" color="info">New information is available.</Toast>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="feedback-demo-stack">
          <Toast title="Default" variant="default">Default toast.</Toast>
          <Toast title="Bordered" color="primary" variant="bordered">Bordered toast.</Toast>
          <Toast title="Filled" color="success" variant="filled">Filled toast.</Toast>
          <Toast title="Ghost" color="warning" variant="ghost">Ghost toast.</Toast>
        </div>
      </DemoSection>

      <DemoSection title="Colors">
        <div className="feedback-demo-stack">
          <Toast title="Default" color="default">Default semantic color.</Toast>
          <Toast title="Primary" color="primary">Primary toast.</Toast>
          <Toast title="Secondary" color="secondary">Secondary toast.</Toast>
          <Toast title="Success" color="success">Success toast.</Toast>
          <Toast title="Warning" color="warning">Warning toast.</Toast>
          <Toast title="Danger" color="danger">Danger toast.</Toast>
          <Toast title="Info" color="info">Information toast.</Toast>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-stack">
          <Toast size="xs" title="Extra Small">Extra small toast.</Toast>
          <Toast size="sm" title="Small">Small toast.</Toast>
          <Toast size="md" title="Medium">Medium toast.</Toast>
          <Toast size="lg" title="Large">Large toast.</Toast>
          <Toast size="xl" title="Extra Large">Extra large toast.</Toast>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="feedback-demo-stack">
          <Toast title="None" radius="none" color="primary">No rounded corners.</Toast>
          <Toast title="Small" radius="sm" color="primary">Small radius.</Toast>
          <Toast title="Medium" radius="md" color="primary">Medium radius.</Toast>
          <Toast title="Large" radius="lg" color="primary">Large radius.</Toast>
          <Toast title="Full" radius="full" color="primary">Fully rounded toast.</Toast>
        </div>
      </DemoSection>

      <DemoSection title="Icon and Closable">
        <div className="feedback-demo-stack">
          <Toast title="Success" color="success" icon="✓" closable>
            Your changes were saved.
          </Toast>
          <Toast title="Warning" color="warning" icon="!" closable>
            Please review this information.
          </Toast>
          <Toast title="Error" color="danger" icon="×" closable>
            The operation failed.
          </Toast>
        </div>
      </DemoSection>

      <DemoSection title="Controlled Close">
        {visible ? (
          <Toast
            title="Dismissible toast"
            color="primary"
            closable
            onClose={() => setVisible(false)}
          >
            Click close to dismiss this toast.
          </Toast>
        ) : (
          <Button onClick={() => setVisible(true)}>Show toast again</Button>
        )}
      </DemoSection>

      <DemoSection title="Duration">
        <div className="feedback-demo-actions">
          <Button onClick={() => setDurationVisible(true)}>
            Show 2 second toast
          </Button>
        </div>

        {durationVisible && (
          <Toast
            title="Auto close"
            color="success"
            duration={2000}
            onClose={() => setDurationVisible(false)}
          >
            This toast closes automatically.
          </Toast>
        )}
      </DemoSection>

      <DemoDocumentation
        importCode={toastDocs.importCode}
        usageCode={toastDocs.usageCode}
        props={toastDocs.props}
      />
    </section>
  );
}
