import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { PageContainer } from "shivanya-shell";

export default function PageContainerDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="PageContainer"
        description="Reusable page content container with configurable width, element type, alignment, and custom styling."
      />

      <DemoSection title="Basic">
        <div className="shell-demo-card">
          <PageContainer>
            <strong>Page content</strong>

            <p className="shell-demo-muted">
              A reusable centered content boundary with a configurable
              maximum width.
            </p>
          </PageContainer>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="shell-demo-stack">
          <div className="shell-demo-card">
            <PageContainer size="sm">
              <strong>Small</strong>

              <p className="shell-demo-muted">
                Maximum width: 960px
              </p>
            </PageContainer>
          </div>

          <div className="shell-demo-card">
            <PageContainer size="md">
              <strong>Medium</strong>

              <p className="shell-demo-muted">
                Maximum width: 1120px
              </p>
            </PageContainer>
          </div>

          <div className="shell-demo-card">
            <PageContainer size="lg">
              <strong>Large</strong>

              <p className="shell-demo-muted">
                Maximum width: 1280px
              </p>
            </PageContainer>
          </div>

          <div className="shell-demo-card">
            <PageContainer size="xl">
              <strong>Extra Large</strong>

              <p className="shell-demo-muted">
                Maximum width: 1440px
              </p>
            </PageContainer>
          </div>

          <div className="shell-demo-card">
            <PageContainer size="full">
              <strong>Full</strong>

              <p className="shell-demo-muted">
                No maximum width.
              </p>
            </PageContainer>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Custom Element">
        <div className="shell-demo-card">
          <PageContainer as="section">
            <strong>Rendered as section</strong>

            <p className="shell-demo-muted">
              PageContainer can render as a different HTML element.
            </p>
          </PageContainer>
        </div>
      </DemoSection>

      <DemoSection title="Without Centering">
        <div className="shell-demo-card">
          <PageContainer
            size="md"
            centered={false}
          >
            <strong>Left aligned container</strong>

            <p className="shell-demo-muted">
              Disable automatic horizontal centering with centered=false.
            </p>
          </PageContainer>
        </div>
      </DemoSection>

      <DemoSection title="Custom Style">
        <div className="shell-demo-card">
          <PageContainer
            as="section"
            size="md"
            style={{
              padding: 20,
              border: "1px dashed var(--shivanya-color-border)",
              borderRadius: "var(--shivanya-radius-md)",
            }}
          >
            <strong>Custom styled container</strong>

            <p className="shell-demo-muted">
              Custom inline styles can be passed when required.
            </p>
          </PageContainer>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { PageContainer } from "shivanya-shell";`}
        usageCode={`<PageContainer>
  <Content />
</PageContainer>

<PageContainer
  as="section"
  size="xl"
>
  <Content />
</PageContainer>

<PageContainer
  size="md"
  centered={false}
>
  <Content />
</PageContainer>`}
      />
    </section>
  );
}