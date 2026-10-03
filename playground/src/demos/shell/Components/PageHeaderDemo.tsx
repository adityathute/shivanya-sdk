import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { PageHeader } from "shivanya-shell";
import { DemoButton } from "../_demo-utils";

export default function PageHeaderDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="PageHeader"
        description="Reusable page heading with title, description, actions, and custom content slots."
      />

      <DemoSection title="Basic">
        <div className="shell-demo-card">
          <PageHeader
            title="Dashboard"
            description="Overview of the current workspace."
          />
        </div>
      </DemoSection>

      <DemoSection title="Title Only">
        <div className="shell-demo-card">
          <PageHeader title="Projects" />
        </div>
      </DemoSection>

      <DemoSection title="With Actions">
        <div className="shell-demo-card">
          <PageHeader
            title="Projects"
            description="Manage your projects and workspace resources."
            actions={
              <>
                <DemoButton>
                  Import
                </DemoButton>

                <DemoButton primary>
                  Create
                </DemoButton>
              </>
            }
          />
        </div>
      </DemoSection>

      <DemoSection title="Custom Content">
        <div className="shell-demo-card">
          <PageHeader
            title="Account"
            description="Manage your account settings."
          >
            <span className="shell-demo-muted">
              Last updated 5 minutes ago
            </span>
          </PageHeader>
        </div>
      </DemoSection>

      <DemoSection title="Complete">
        <div className="shell-demo-card">
          <PageHeader
            title="Team"
            description="Manage members, roles, and workspace access."
            actions={
              <>
                <DemoButton>
                  Export
                </DemoButton>

                <DemoButton primary>
                  Add Member
                </DemoButton>
              </>
            }
          >
            <div className="shell-demo-row">
              <span className="shell-demo-muted">
                24 members
              </span>

              <span className="shell-demo-muted">
                ·
              </span>

              <span className="shell-demo-muted">
                Updated today
              </span>
            </div>
          </PageHeader>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { PageHeader } from "shivanya-shell";`}
        usageCode={`<PageHeader
  title="Projects"
  description="Manage your projects."
/>

<PageHeader
  title="Projects"
  description="Manage your projects."
  actions={<Actions />}
/>

<PageHeader
  title="Account"
>
  <Metadata />
</PageHeader>`}
      />
    </section>
  );
}