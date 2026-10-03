"use client";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { ShellHeader, ShellProvider } from "shivanya-shell";
import { DemoButton } from "../_demo-utils";

const branding = {
  name: "Shivanya",
  subtitle: "Shell Demo",
  src: "/logo.png",
  alt: "Shivanya",
};

export default function ShellHeaderDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="ShellHeader"
        description="Responsive shell header with branding, menu, content slots, positioning, and mobile navigation."
      />

      <DemoSection title="Basic">
        <div className="shell-demo-card shell-demo-preview">
          <ShellProvider>
            <ShellHeader
              branding={branding}
              end={<DemoButton>Account</DemoButton>}
            />
            <div className="shell-demo-preview-content">
              Header preview content
            </div>
          </ShellProvider>
        </div>
      </DemoSection>

      <DemoSection title="With Start Content">
        <div className="shell-demo-card shell-demo-preview">
          <ShellProvider>
            <ShellHeader
              branding={branding}
              start={
                <span className="shell-demo-muted">
                  Workspace
                </span>
              }
              end={<DemoButton>Account</DemoButton>}
            />
            <div className="shell-demo-preview-content">
              Header with start content
            </div>
          </ShellProvider>
        </div>
      </DemoSection>

      <DemoSection title="With Center Content">
        <div className="shell-demo-card shell-demo-preview">
          <ShellProvider>
            <ShellHeader
              branding={branding}
              center={
                <span className="shell-demo-muted">
                  Dashboard
                </span>
              }
              end={
                <>
                  <DemoButton>Help</DemoButton>
                  <DemoButton>Account</DemoButton>
                </>
              }
            />
            <div className="shell-demo-preview-content">
              Header with centered content
            </div>
          </ShellProvider>
        </div>
      </DemoSection>

      <DemoSection title="With Actions">
        <div className="shell-demo-card shell-demo-preview">
          <ShellProvider>
            <ShellHeader
              branding={branding}
              end={
                <>
                  <DemoButton>Search</DemoButton>
                  <DemoButton primary>Create</DemoButton>
                </>
              }
            />
            <div className="shell-demo-preview-content">
              Header actions
            </div>
          </ShellProvider>
        </div>
      </DemoSection>

      <DemoSection title="Without Menu">
        <div className="shell-demo-card shell-demo-preview">
          <ShellProvider>
            <ShellHeader
              branding={branding}
              showMenu={false}
              end={<DemoButton>Account</DemoButton>}
            />
            <div className="shell-demo-preview-content">
              Mobile menu disabled
            </div>
          </ShellProvider>
        </div>
      </DemoSection>

      <DemoSection title="Header Positions">
        <div className="shell-demo-row">
          <div className="shell-demo-card shell-demo-preview">
            <ShellProvider>
              <ShellHeader
                branding={branding}
                position="static"
                end={<DemoButton>Static</DemoButton>}
              />
              <div className="shell-demo-preview-content">
                Static header
              </div>
            </ShellProvider>
          </div>

          <div className="shell-demo-card shell-demo-preview">
            <ShellProvider>
              <ShellHeader
                branding={branding}
                position="sticky"
                end={<DemoButton>Sticky</DemoButton>}
              />
              <div className="shell-demo-preview-content">
                Sticky header
              </div>
            </ShellProvider>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { ShellHeader, ShellProvider } from "shivanya-shell";'}
        usageCode={`<ShellProvider>
  <ShellHeader
    branding={{
      name: "Shivanya",
      subtitle: "Shell Demo",
    }}
    center={<span>Dashboard</span>}
    end={<Actions />}
  />
</ShellProvider>`}
      />
    </section>
  );
}