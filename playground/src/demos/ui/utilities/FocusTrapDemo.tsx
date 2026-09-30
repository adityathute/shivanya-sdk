import { useState } from "react";

import {
  Button,
  FocusTrap,
  Typography,
  focusTrapDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function FocusTrapDemo() {
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState(
    "Focus trap is active."
  );

  return (
    <section className="demo">
      <DemoHeader
        title={focusTrapDocs.name}
        description={focusTrapDocs.description}
      />

      <DemoSection title="Basic">
        <div className="demo-section-content">
          <FocusTrap
            state={active ? "active" : "inactive"}
            onActivate={() =>
              setMessage("Focus trap activated.")
            }
            onDeactivate={() =>
              setMessage("Focus trap deactivated.")
            }
          >
            <div className="demo-focus-trap-boundary">
              <Typography weight="semibold">
                Focusable region
              </Typography>

              <Typography
                variant="bodySmall"
                color="secondary"
              >
                Use Tab and Shift+Tab to move between the
                controls.
              </Typography>

              <div className="demo-example-row">
                <Button>First</Button>
                <Button variant="secondary">
                  Second
                </Button>
                <Button variant="outline">
                  Last
                </Button>
              </div>
            </div>
          </FocusTrap>

          <div className="demo-example-row">
            <Button
              variant="secondary"
              onClick={() =>
                setActive((value) => !value)
              }
            >
              {active ? "Deactivate" : "Activate"}
            </Button>
          </div>

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            {message}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Auto Focus">
        <div className="demo-example-row">
          <FocusTrap autoFocus>
            <div className="demo-focus-trap-example">
              <Button>
                Auto Focus Enabled
              </Button>
            </div>
          </FocusTrap>

          <FocusTrap autoFocus={false}>
            <div className="demo-focus-trap-example">
              <Button variant="secondary">
                Auto Focus Disabled
              </Button>
            </div>
          </FocusTrap>
        </div>
      </DemoSection>

      <DemoSection title="Restore Focus">
        <div className="demo-example-row">
          <FocusTrap restoreFocus>
            <Button>
              Restore Focus
            </Button>
          </FocusTrap>

          <FocusTrap restoreFocus={false}>
            <Button variant="outline">
              Do Not Restore
            </Button>
          </FocusTrap>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-example-row">
          <FocusTrap state="default">
            <Button>Default</Button>
          </FocusTrap>

          <FocusTrap state="active">
            <Button>Active</Button>
          </FocusTrap>

          <FocusTrap state="inactive">
            <Button>Inactive</Button>
          </FocusTrap>

          <FocusTrap disabled>
            <Button disabled>
              Disabled
            </Button>
          </FocusTrap>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={focusTrapDocs.importCode}
        usageCode={focusTrapDocs.usageCode}
        props={focusTrapDocs.props}
      />
    </section>
  );
}