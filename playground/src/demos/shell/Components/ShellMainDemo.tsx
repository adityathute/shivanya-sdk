import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { ShellMain } from "shivanya-shell";

function MainPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shell-demo-preview shell-demo-main-preview">
      {children}
    </div>
  );
}

export default function ShellMainDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="ShellMain"
        description="Main content container for shell layouts with semantic elements, custom classes, and styles."
      />

      <DemoSection title="Basic">
        <MainPreview>
          <ShellMain>
            <h3>Main Content</h3>
            <p className="shell-demo-muted">
              Primary application content is rendered inside ShellMain.
            </p>
          </ShellMain>
        </MainPreview>
      </DemoSection>

      <DemoSection title="Custom Element">
        <MainPreview>
          <ShellMain as="section">
            <h3>Section Content</h3>
            <p className="shell-demo-muted">
              ShellMain can render as a different semantic HTML element.
            </p>
          </ShellMain>
        </MainPreview>
      </DemoSection>

      <DemoSection title="Custom Class">
        <MainPreview>
          <ShellMain className="custom-shell-main">
            <h3>Custom Class</h3>
            <p className="shell-demo-muted">
              Application styles can be added through className.
            </p>
          </ShellMain>
        </MainPreview>
      </DemoSection>

      <DemoSection title="Custom Style">
        <MainPreview>
          <ShellMain
            style={{
              padding: 16,
              borderRadius: 12,
            }}
          >
            <h3>Custom Style</h3>
            <p className="shell-demo-muted">
              Inline styles can be passed directly to ShellMain.
            </p>
          </ShellMain>
        </MainPreview>
      </DemoSection>

      <DemoSection title="Custom Class and Style">
        <MainPreview>
          <ShellMain
            as="section"
            className="custom-shell-main"
            style={{
              padding: 20,
            }}
          >
            <h3>Combined Configuration</h3>
            <p className="shell-demo-muted">
              Semantic element, className, and style can be combined.
            </p>
          </ShellMain>
        </MainPreview>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { ShellMain } from "shivanya-shell";'}
        usageCode={`<ShellMain>
  <PageContent />
</ShellMain>

<ShellMain as="section">
  <SectionContent />
</ShellMain>`}
      />
    </section>
  );
}