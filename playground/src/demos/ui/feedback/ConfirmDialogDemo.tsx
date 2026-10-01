import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, ConfirmDialog, confirmDialogDocs } from "shivanya-ui";

export default function ConfirmDialogDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [dangerOpen, setDangerOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const [disabledOpen, setDisabledOpen] = useState(false);
  const [fullWidthOpen, setFullWidthOpen] = useState(false);

  return (
    <section className="demo">
      <DemoHeader title={confirmDialogDocs.name} description={confirmDialogDocs.description} />

      <DemoSection title="Basic">
        <Button onClick={() => setBasicOpen(true)}>Open confirmation</Button>

        <ConfirmDialog
          open={basicOpen}
          title="Delete item?"
          message="This action cannot be undone."
          confirmText="Delete"
          cancelText="Cancel"
          onCancel={() => setBasicOpen(false)}
          onConfirm={() => setBasicOpen(false)}
        />
      </DemoSection>

      <DemoSection title="Variants">
        <div className="feedback-demo-actions">
          <Button variant="danger" onClick={() => setDangerOpen(true)}>Danger</Button>
          <Button variant="warning" onClick={() => setWarningOpen(true)}>Warning</Button>
          <Button variant="success" onClick={() => setSuccessOpen(true)}>Success</Button>
        </div>

        <ConfirmDialog
          open={dangerOpen}
          title="Delete item?"
          message="This is a danger confirmation."
          variant="danger"
          onCancel={() => setDangerOpen(false)}
          onConfirm={() => setDangerOpen(false)}
        />

        <ConfirmDialog
          open={warningOpen}
          title="Continue?"
          message="This action requires your attention."
          variant="warning"
          onCancel={() => setWarningOpen(false)}
          onConfirm={() => setWarningOpen(false)}
        />

        <ConfirmDialog
          open={successOpen}
          title="Approve item?"
          message="Confirm the successful action."
          variant="success"
          onCancel={() => setSuccessOpen(false)}
          onConfirm={() => setSuccessOpen(false)}
        />
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-actions">
          <Button size="sm" onClick={() => setBasicOpen(true)}>Small</Button>
          <Button onClick={() => setBasicOpen(true)}>Medium</Button>
          <Button size="lg" onClick={() => setBasicOpen(true)}>Large</Button>
        </div>

        <ConfirmDialog
          open={basicOpen}
          size="md"
          title="Medium confirmation"
          message="The size API is available as small, medium, or large."
          onCancel={() => setBasicOpen(false)}
          onConfirm={() => setBasicOpen(false)}
        />
      </DemoSection>

      <DemoSection title="Loading">
        <Button onClick={() => setLoadingOpen(true)}>Open loading confirmation</Button>

        <ConfirmDialog
          open={loadingOpen}
          title="Processing"
          message="The confirmation action is currently loading."
          loading
          onCancel={() => setLoadingOpen(false)}
          onConfirm={() => setLoadingOpen(false)}
        />
      </DemoSection>

      <DemoSection title="Disabled">
        <Button onClick={() => setDisabledOpen(true)}>Open disabled confirmation</Button>

        <ConfirmDialog
          open={disabledOpen}
          title="Disabled actions"
          message="Both confirmation actions are disabled."
          disabled
          onCancel={() => setDisabledOpen(false)}
          onConfirm={() => setDisabledOpen(false)}
        />
      </DemoSection>

      <DemoSection title="Full Width">
        <Button onClick={() => setFullWidthOpen(true)}>Open full-width confirmation</Button>

        <ConfirmDialog
          open={fullWidthOpen}
          title="Full width"
          message="This confirmation uses the full-width option."
          fullWidth
          onCancel={() => setFullWidthOpen(false)}
          onConfirm={() => setFullWidthOpen(false)}
        />
      </DemoSection>

      <DemoDocumentation
        importCode={confirmDialogDocs.importCode}
        usageCode={confirmDialogDocs.usageCode}
        props={confirmDialogDocs.props}
      />
    </section>
  );
}
