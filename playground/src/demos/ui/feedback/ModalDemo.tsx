import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, Modal, modalDocs } from "shivanya-ui";

export default function ModalDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState<"sm" | "md" | "lg" | "xl" | "full" | null>(null);
  const [radiusOpen, setRadiusOpen] = useState<"none" | "sm" | "md" | "lg" | "full" | null>(null);
  const [centeredOpen, setCenteredOpen] = useState<boolean | null>(null);
  const [behaviorOpen, setBehaviorOpen] = useState(false);
  const [noCloseOpen, setNoCloseOpen] = useState(false);

  return (
    <section className="demo">
      <DemoHeader title={modalDocs.name} description={modalDocs.description} />

      <DemoSection title="Basic">
        <Button onClick={() => setBasicOpen(true)}>Open modal</Button>

        <Modal
          open={basicOpen}
          title="Profile"
          onClose={() => setBasicOpen(false)}
          footer={<Button onClick={() => setBasicOpen(false)}>Close</Button>}
        >
          Modal content.
        </Modal>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-actions">
          <Button onClick={() => setSizeOpen("sm")}>Small</Button>
          <Button onClick={() => setSizeOpen("md")}>Medium</Button>
          <Button onClick={() => setSizeOpen("lg")}>Large</Button>
          <Button onClick={() => setSizeOpen("xl")}>Extra Large</Button>
          <Button onClick={() => setSizeOpen("full")}>Full</Button>
        </div>

        <Modal
          open={sizeOpen !== null}
          size={sizeOpen ?? "md"}
          title={`Modal: ${sizeOpen ?? "md"}`}
          onClose={() => setSizeOpen(null)}
        >
          This modal demonstrates the selected size.
        </Modal>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="feedback-demo-actions">
          <Button onClick={() => setRadiusOpen("none")}>None</Button>
          <Button onClick={() => setRadiusOpen("sm")}>Small</Button>
          <Button onClick={() => setRadiusOpen("md")}>Medium</Button>
          <Button onClick={() => setRadiusOpen("lg")}>Large</Button>
          <Button onClick={() => setRadiusOpen("full")}>Full</Button>
        </div>

        <Modal
          open={radiusOpen !== null}
          radius={radiusOpen ?? "md"}
          title={`Radius: ${radiusOpen ?? "md"}`}
          onClose={() => setRadiusOpen(null)}
        >
          This modal demonstrates the selected radius.
        </Modal>
      </DemoSection>

      <DemoSection title="Centered">
        <div className="feedback-demo-actions">
          <Button onClick={() => setCenteredOpen(true)}>Centered</Button>
          <Button variant="outline" onClick={() => setCenteredOpen(false)}>Top aligned</Button>
        </div>

        <Modal
          open={centeredOpen !== null}
          centered={centeredOpen ?? true}
          title={centeredOpen ? "Centered modal" : "Top aligned modal"}
          onClose={() => setCenteredOpen(null)}
        >
          This example demonstrates the centered option.
        </Modal>
      </DemoSection>

      <DemoSection title="Footer">
        <Button onClick={() => setBasicOpen(true)}>Open modal with actions</Button>

        <Modal
          open={basicOpen}
          title="Actions"
          onClose={() => setBasicOpen(false)}
          footer={
            <div className="feedback-demo-actions">
              <Button variant="outline" onClick={() => setBasicOpen(false)}>Cancel</Button>
              <Button onClick={() => setBasicOpen(false)}>Save</Button>
            </div>
          }
        >
          Modal content with multiple footer actions.
        </Modal>
      </DemoSection>

      <DemoSection title="Behavior">
        <div className="feedback-demo-actions">
          <Button onClick={() => setBehaviorOpen(true)}>Overlay and Escape enabled</Button>
          <Button variant="outline" onClick={() => setNoCloseOpen(true)}>Close button only</Button>
        </div>

        <Modal
          open={behaviorOpen}
          title="Default behavior"
          closeOnOverlayClick
          closeOnEscape
          onClose={() => setBehaviorOpen(false)}
        >
          Overlay click and Escape can close this modal.
        </Modal>

        <Modal
          open={noCloseOpen}
          title="Close button only"
          closable
          closeOnOverlayClick={false}
          closeOnEscape={false}
          onClose={() => setNoCloseOpen(false)}
        >
          Overlay click and Escape do not close this modal.
        </Modal>
      </DemoSection>

      <DemoDocumentation
        importCode={modalDocs.importCode}
        usageCode={modalDocs.usageCode}
        props={modalDocs.props}
      />
    </section>
  );
}
