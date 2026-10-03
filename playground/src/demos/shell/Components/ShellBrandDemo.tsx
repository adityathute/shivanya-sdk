import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { ShellBrand } from "shivanya-shell";

const brands = [
  {
    name: "Shivanya",
    subtitle: "Platform",
  },
  {
    name: "Workspace",
    subtitle: "Team",
  },
  {
    name: "Docs",
    subtitle: "Documentation",
    href: "/docs",
  },
];

export default function ShellBrandDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="ShellBrand"
        description="Reusable branding block for shell headers, sidebars, and footers."
      />

      <DemoSection title="Basic">
        <div className="shell-demo-row">
          {brands.map((item) => (
            <div className="shell-demo-card" key={item.name}>
              <ShellBrand branding={item} />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Compact">
        <div className="shell-demo-row">
          <div className="shell-demo-card">
            <ShellBrand branding={brands[0]} compact />
          </div>

          <div className="shell-demo-card">
            <ShellBrand
              branding={{
                name: "Workspace",
                subtitle: "Team",
              }}
              compact
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Image">
        <div className="shell-demo-row">
          <div className="shell-demo-card">
            <ShellBrand
              branding={{
                name: "Shivanya",
                subtitle: "SDK",
                src: "/logo.png",
                alt: "Shivanya",
              }}
            />
          </div>

          <div className="shell-demo-card">
            <ShellBrand
              branding={{
                name: "Shivanya",
                subtitle: "SDK",
                src: "/logo.png",
                alt: "Shivanya",
              }}
              compact
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Link">
        <div className="shell-demo-row">
          <div className="shell-demo-card">
            <ShellBrand
              branding={{
                name: "Shivanya",
                subtitle: "Home",
                href: "/",
              }}
            />
          </div>

          <div className="shell-demo-card">
            <ShellBrand
              branding={{
                name: "Documentation",
                subtitle: "View docs",
                href: "/docs",
              }}
            />
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { ShellBrand } from "shivanya-shell";'}
        usageCode={`<ShellBrand
  branding={{
    name: "Shivanya",
    subtitle: "Platform",
  }}
/>`}
      />
    </section>
  );
}