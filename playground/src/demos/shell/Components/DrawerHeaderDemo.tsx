"use client";

import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { DrawerHeader } from "shivanya-shell";
import { Button } from "shivanya-ui";

import { branding } from "../_demo-utils";

export default function DrawerHeaderDemo() {
  const [open, setOpen] = useState(true);

  return (
    <section className="demo">
      <DemoHeader
        title="DrawerHeader"
        description="Compact branding header for mobile or drawer navigation surfaces with a close action."
      />

      <DemoSection title="Basic">
        <div className="shell-demo-card">
          <DrawerHeader
            branding={branding}
            onClose={() => setOpen(false)}
          />
        </div>
      </DemoSection>

      <DemoSection title="Without Branding">
        <div className="shell-demo-card">
          <DrawerHeader
            onClose={() => undefined}
          />
        </div>
      </DemoSection>

      <DemoSection title="Interactive">
        <div className="shell-demo-card shell-demo-drawer-header-preview">
          <div className="shell-demo-sidebar-toolbar">
            <div>
              <strong>
                {open
                  ? "Drawer Open"
                  : "Drawer Closed"}
              </strong>

              <span className="shell-demo-muted">
                Test the close action.
              </span>
            </div>

            {!open && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setOpen(true)}
              >
                Open
              </Button>
            )}
          </div>

          {open && (
            <DrawerHeader
              branding={branding}
              onClose={() => setOpen(false)}
            />
          )}
        </div>
      </DemoSection>

      <DemoSection title="Complete">
        <div className="shell-demo-card">
          <DrawerHeader
            branding={branding}
            onClose={() => undefined}
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { DrawerHeader } from "shivanya-shell";`}
        usageCode={`<DrawerHeader
  branding={branding}
  onClose={closeMenu}
/>

<DrawerHeader
  onClose={closeMenu}
/>`}
      />
    </section>
  );
}