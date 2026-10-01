import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, Notification, notificationDocs } from "shivanya-ui";

export default function NotificationDemo() {
  const [visible, setVisible] = useState(true);
  const [durationVisible, setDurationVisible] = useState(false);

  return (
    <section className="demo">
      <DemoHeader title={notificationDocs.name} description={notificationDocs.description} />

      <DemoSection title="Variants">
        <div className="feedback-demo-stack">
          <Notification title="Default">Default notification.</Notification>
          <Notification title="Primary" variant="primary">Primary notification.</Notification>
          <Notification title="Success" variant="success">Changes saved.</Notification>
          <Notification title="Warning" variant="warning">Review this item.</Notification>
          <Notification title="Danger" variant="danger">Request failed.</Notification>
          <Notification title="Information" variant="info">New information is available.</Notification>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-stack">
          <Notification size="sm" title="Small">Small notification.</Notification>
          <Notification size="md" title="Medium">Medium notification.</Notification>
          <Notification size="lg" title="Large">Large notification.</Notification>
        </div>
      </DemoSection>

      <DemoSection title="Icon">
        <div className="feedback-demo-stack">
          <Notification title="Success" variant="success" icon="✓">Your changes were saved.</Notification>
          <Notification title="Warning" variant="warning" icon="!">Please review this information.</Notification>
        </div>
      </DemoSection>

      <DemoSection title="Closable">
        {visible ? (
          <Notification
            title="Dismissible notification"
            variant="primary"
            closable
            onClose={() => setVisible(false)}
          >
            Click the close action to dismiss this notification.
          </Notification>
        ) : (
          <Button onClick={() => setVisible(true)}>Show notification again</Button>
        )}
      </DemoSection>

      <DemoSection title="Duration">
        <div className="feedback-demo-actions">
          <Button onClick={() => setDurationVisible(true)}>
            Show 2 second notification
          </Button>
        </div>

        {durationVisible && (
          <Notification
            title="Auto close"
            variant="success"
            duration={2000}
            onClose={() => setDurationVisible(false)}
          >
            This notification closes automatically.
          </Notification>
        )}
      </DemoSection>

      <DemoDocumentation
        importCode={notificationDocs.importCode}
        usageCode={notificationDocs.usageCode}
        props={notificationDocs.props}
      />
    </section>
  );
}
