import { useState } from "react";

import {
  Button,
  Portal,
  Typography,
  portalDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function PortalDemo() {
  const [show, setShow] = useState(false);
  const [container, setContainer] =
    useState<HTMLDivElement | null>(null);

  return (
    <section className="demo">
      <DemoHeader
        title={portalDocs.name}
        description={portalDocs.description}
      />

      <DemoSection title="Basic">
        <div className="demo-section-content-fit">
          <div className="demo-example-row">
            <Button
              onClick={() =>
                setShow((value) => !value)
              }
            >
              {show ? "Unmount Portal" : "Mount Portal"}
            </Button>

            <Button
              variant="secondary"
              onClick={() => {
                document.body.dataset.portalDemo =
                  "active";
              }}
            >
              Render to Body
            </Button>
          </div>

          {show && (
            <Portal>
              <div className="demo-portal-content">
                <Typography weight="semibold">
                  Portal Content
                </Typography>

                <Typography
                  variant="bodySmall"
                  color="secondary"
                >
                  This content is rendered through
                  document.body.
                </Typography>
              </div>
            </Portal>
          )}
        </div>
      </DemoSection>

      <DemoSection title="Custom Container">
        <div className="demo-section-content">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Portal content can target a specific DOM
            element.
          </Typography>

          <div
            ref={setContainer}
            className="demo-portal-container"
          >
            <Typography color="secondary">
              Custom portal container
            </Typography>

            {container && (
              <Portal container={container}>
                <div className="demo-portal-container-content">
                  <Button variant="outline">
                    Inside Custom Container
                  </Button>
                </div>
              </Portal>
            )}
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-example-row">
          <Portal state="default">
            <Typography>
              Default portal
            </Typography>
          </Portal>

          <Portal state="mounted">
            <Typography>
              Mounted portal
            </Typography>
          </Portal>

          <Portal state="unmounted">
            <Typography>
              Unmounted portal
            </Typography>
          </Portal>

          <Portal disabled>
            <Typography>
              Disabled portal
            </Typography>
          </Portal>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={portalDocs.importCode}
        usageCode={portalDocs.usageCode}
        props={portalDocs.props}
      />
    </section>
  );
}