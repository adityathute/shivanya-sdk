import {
  Logo,
  logoDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function LogoDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={logoDocs.name}
        description={logoDocs.description}
      />

      <DemoSection title="Default">
        <div className="demo-preview-surface">
          <Logo />
        </div>
      </DemoSection>

      <DemoSection title="Custom Branding">
        <div className="demo-preview-surface">
          <Logo
            branding={{
              name: "My Application",
              subtitle: "Simple. Fast. Reusable.",
              href: "#logo",
            }}
          />
        </div>
      </DemoSection>

      <DemoSection title="Non-clickable">
        <div className="demo-preview-surface">
          <Logo
            branding={{
              name: "My Application",
              subtitle: "Simple. Fast. Reusable.",
              href: "#logo",
            }}
            link={false}
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={logoDocs.importCode}
        usageCode={logoDocs.usageCode}
        props={logoDocs.props}
      />
    </section>
  );
}