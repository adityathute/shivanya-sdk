import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, Dialog, dialogDocs } from "shivanya-ui";

export default function DialogDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState<"sm" | "md" | "lg" | "xl" | null>(null);
  const [variantOpen, setVariantOpen] = useState<"primary" | "success" | "warning" | null>(null);
  const [radiusOpen, setRadiusOpen] = useState<"none" | "sm" | "md" | "lg" | "full" | null>(null);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const [disabledOpen, setDisabledOpen] = useState(false);
  const [behaviorOpen, setBehaviorOpen] = useState(false);
  const [noCloseOpen, setNoCloseOpen] = useState(false);

  return (
    <section className="demo">
      <DemoHeader title={dialogDocs.name} description={dialogDocs.description} />

      <DemoSection title="Basic">
        <Button onClick={() => setBasicOpen(true)}>Open dialog</Button>

        <Dialog
          open={basicOpen}
          title="Dialog"
          onClose={() => setBasicOpen(false)}
          footer={<Button onClick={() => setBasicOpen(false)}>Close</Button>}
        >
          Dialog content.
        </Dialog>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="feedback-demo-actions">
          <Button onClick={() => setSizeOpen("sm")}>Small</Button>
          <Button onClick={() => setSizeOpen("md")}>Medium</Button>
          <Button onClick={() => setSizeOpen("lg")}>Large</Button>
          <Button onClick={() => setSizeOpen("xl")}>Extra Large</Button>
        </div>

        <Dialog
          open={sizeOpen !== null}
          size={sizeOpen ?? "md"}
          title={`Dialog: ${sizeOpen ?? "md"}`}
          onClose={() => setSizeOpen(null)}
        >
          This dialog demonstrates the selected size.
        </Dialog>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="feedback-demo-actions">
          <Button onClick={() => setVariantOpen("primary")}>Primary</Button>
          <Button variant="success" onClick={() => setVariantOpen("success")}>Success</Button>
          <Button variant="warning" onClick={() => setVariantOpen("warning")}>Warning</Button>
        </div>

        <Dialog
          open={variantOpen !== null}
          variant={variantOpen ?? "default"}
          title={`Variant: ${variantOpen ?? "default"}`}
          onClose={() => setVariantOpen(null)}
        >
          This dialog demonstrates a semantic variant.
        </Dialog>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="feedback-demo-actions">
          <Button onClick={() => setRadiusOpen("none")}>None</Button>
          <Button onClick={() => setRadiusOpen("sm")}>Small</Button>
          <Button onClick={() => setRadiusOpen("md")}>Medium</Button>
          <Button onClick={() => setRadiusOpen("lg")}>Large</Button>
          <Button onClick={() => setRadiusOpen("full")}>Full</Button>
        </div>

        <Dialog
          open={radiusOpen !== null}
          radius={radiusOpen ?? "md"}
          title={`Radius: ${radiusOpen ?? "md"}`}
          onClose={() => setRadiusOpen(null)}
        >
          This dialog demonstrates the selected radius.
        </Dialog>
      </DemoSection>

      <DemoSection title="Footer">
        <Button onClick={() => setBasicOpen(true)}>Open dialog with footer</Button>

        <Dialog
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
          Dialog content with multiple footer actions.
        </Dialog>
      </DemoSection>

      <DemoSection title="States">
        <div className="feedback-demo-actions">
          <Button onClick={() => setLoadingOpen(true)}>Loading</Button>
          <Button onClick={() => setDisabledOpen(true)}>Disabled</Button>
        </div>

        <Dialog
          open={loadingOpen}
          title="Loading"
          state="loading"
          onClose={() => setLoadingOpen(false)}
        >
          Dialog is currently loading.
        </Dialog>

        <Dialog
          open={disabledOpen}
          title="Disabled"
          state="disabled"
          disabled
          onClose={() => setDisabledOpen(false)}
        >
          Dialog is disabled.
        </Dialog>
      </DemoSection>

      <DemoSection title="Behavior">
        <div className="feedback-demo-actions">
          <Button onClick={() => setBehaviorOpen(true)}>Overlay and Escape enabled</Button>
          <Button variant="outline" onClick={() => setNoCloseOpen(true)}>Close button only</Button>
        </div>

        <Dialog
          open={behaviorOpen}
          title="Default behavior"
          closeOnOverlayClick
          closeOnEscape
          onClose={() => setBehaviorOpen(false)}
        >
          Overlay click and Escape can close this dialog.
        </Dialog>

        <Dialog
          open={noCloseOpen}
          title="Close button only"
          closable
          closeOnOverlayClick={false}
          closeOnEscape={false}
          onClose={() => setNoCloseOpen(false)}
        >
          Overlay click and Escape do not close this dialog.
        </Dialog>
      </DemoSection>

      <DemoDocumentation
        importCode={dialogDocs.importCode}
        usageCode={dialogDocs.usageCode}
        props={dialogDocs.props}
      />
    </section>
  );
}
