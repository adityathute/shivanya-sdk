import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { IconButton } from "shivanya-ui";
import { SettingsIcon } from "shivanya-ui/icons";
import { SidebarFooter } from "shivanya-shell";

export default function SidebarFooterDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="SidebarFooter"
        description="Reusable footer block for application sidebars with application details, version information, and custom content."
      />

      <DemoSection title="Basic">
        <div className="shell-demo-card">
          <SidebarFooter
            appName="Shivanya"
            version="v1.0.0"
          />
        </div>
      </DemoSection>

      <DemoSection title="Custom Content">
        <div className="shell-demo-card">
          <SidebarFooter
            appName="Workspace"
            version="Free plan"
          >
            <span>Storage: 2 GB</span>
          </SidebarFooter>
        </div>
      </DemoSection>

      <DemoSection title="Actions">
        <div className="shell-demo-card">
          <SidebarFooter
            appName="Shivanya SDK"
            version="v1.0.0"
          >
            <IconButton
              size="sm"
              variant="outline"
              aria-label="Settings"
            >
              <SettingsIcon />
            </IconButton>
          </SidebarFooter>
        </div>
      </DemoSection>

      <DemoSection title="Custom Class">
        <div className="shell-demo-card">
          <SidebarFooter
            appName="Custom Footer"
            version="Enterprise"
            className="shell-demo-sidebar-footer-custom"
          />
        </div>
      </DemoSection>

      <DemoSection title="Complete">
        <div className="shell-demo-card">
          <SidebarFooter
            appName="ShivanyaMS"
            version="Enterprise · v1.0.0"
          >
            <span>Storage: 48 GB</span>

            <IconButton
              size="sm"
              variant="outline"
              aria-label="Settings"
            >
              <SettingsIcon />
            </IconButton>
          </SidebarFooter>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { SidebarFooter } from "shivanya-shell";`}
        usageCode={`<SidebarFooter
  appName="Shivanya"
  version="v1.0.0"
/>

<SidebarFooter
  appName="Workspace"
  version="Free plan"
>
  <span>Storage: 2 GB</span>
</SidebarFooter>

<SidebarFooter
  appName="Shivanya SDK"
  version="v1.0.0"
>
  <IconButton
    size="sm"
    variant="outline"
    aria-label="Settings"
  >
    <SettingsIcon />
  </IconButton>
</SidebarFooter>`}
      />
    </section>
  );
}