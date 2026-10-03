import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { ShellFooter } from "shivanya-shell";
import { branding } from "../_demo-utils";

function FooterPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shell-demo-preview shell-demo-footer-preview">
      <div className="shell-demo-footer-preview-content">
        <span className="shell-demo-label">Page content</span>
        <span className="shell-demo-muted">
          The footer stays at the bottom of the page.
        </span>
      </div>

      {children}
    </div>
  );
}

export default function ShellFooterDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="ShellFooter"
        description="Reusable footer primitive with optional branding, links, custom content, and application styling."
      />

      <DemoSection title="Basic">
        <FooterPreview>
          <ShellFooter branding={branding} />
        </FooterPreview>
      </DemoSection>

      <DemoSection title="With Links">
        <FooterPreview>
          <ShellFooter branding={branding}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </ShellFooter>
        </FooterPreview>
      </DemoSection>

      <DemoSection title="With Custom Content">
        <FooterPreview>
          <ShellFooter branding={branding}>
            <span>Shivanya Platform</span>
            <span>v1.0.0</span>
            <span>All systems operational</span>
          </ShellFooter>
        </FooterPreview>
      </DemoSection>

      <DemoSection title="Without Branding">
        <FooterPreview>
          <ShellFooter>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/support">Support</a>
          </ShellFooter>
        </FooterPreview>
      </DemoSection>

      <DemoSection title="Custom Class">
        <FooterPreview>
          <ShellFooter
            branding={branding}
            className="custom-shell-footer"
          >
            <span>Custom footer styling</span>
          </ShellFooter>
        </FooterPreview>
      </DemoSection>

      <DemoSection title="Complete Footer">
        <FooterPreview>
          <ShellFooter branding={branding}>
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
            <span>v1.0.0</span>
          </ShellFooter>
        </FooterPreview>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { ShellFooter } from "shivanya-shell";'}
        usageCode={`<ShellFooter
  branding={{
    name: "Shivanya",
    subtitle: "Platform",
    src: "/logo.png",
  }}
>
  <FooterLinks />
</ShellFooter>`}
      />
    </section>
  );
}