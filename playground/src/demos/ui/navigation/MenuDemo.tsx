import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./navigation-demo.css";
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const variants = ["default", "bordered", "filled", "ghost"] as const;
const radii = ["none", "sm", "md", "lg", "full"] as const;
const states = ["default", "loading", "disabled"] as const;
import { Menu } from "shivanya-ui";
const docs = {
  importCode: `import { Menu } from "shivanya-ui";`,
  usageCode: `<Menu>
  {Dashboard}
  {Projects}
</Menu>`,
  props: [
    { name: "size", type: "xs | sm | md | lg | xl", default: "md" },
    {
      name: "variant",
      type: "default | bordered | filled | ghost",
      default: "default",
    },
    { name: "radius", type: "none | sm | md | lg | full", default: "md" },
    { name: "state", type: "default | loading | disabled", default: "default" },
  ],
};
function Items() {
  return (
    <>
      <Menu.Item icon="•">Dashboard</Menu.Item>
      <Menu.Item active>Projects</Menu.Item>
      <Menu.Item>Reports</Menu.Item>
      <Menu.Item disabled>Settings</Menu.Item>
    </>
  );
}
export default function MenuDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="Menu"
        description="Provides a structured list of navigation or actions."
      />
      <DemoSection title="Basic">
        <Menu>
          <Items />
        </Menu>
      </DemoSection>
      <DemoSection title="Sizes">
        <div className="navigation-demo-grid navigation-demo-grid-5">
          {sizes.map((size) => (
            <div className="navigation-demo-card" key={size}>
              <span className="navigation-demo-label">
                {size.toUpperCase()}
              </span>
              <Menu size={size}>
                <Items />
              </Menu>
            </div>
          ))}
        </div>
      </DemoSection>
      <DemoSection title="Variants">
        <div className="navigation-demo-grid navigation-demo-grid-4">
          {variants.map((variant) => (
            <div className="navigation-demo-card" key={variant}>
              <span className="navigation-demo-label">{variant}</span>
              <Menu variant={variant}>
                <Items />
              </Menu>
            </div>
          ))}
        </div>
      </DemoSection>
      <DemoSection title="Radius">
        <div className="navigation-demo-grid navigation-demo-grid-5">
          {radii.map((radius) => (
            <div className="navigation-demo-card" key={radius}>
              <span className="navigation-demo-label">{radius}</span>
              <Menu radius={radius}>
                <Items />
              </Menu>
            </div>
          ))}
        </div>
      </DemoSection>
      <DemoSection title="Item Alignment">
        <div className="navigation-demo-grid navigation-demo-grid-3">
          {(["start", "center", "end"] as const).map((position) => (
            <div className="navigation-demo-card" key={position}>
              <span className="navigation-demo-label">{position}</span>
              <Menu itemPosition={position}>
                <Items />
              </Menu>
            </div>
          ))}
        </div>
      </DemoSection>
      <DemoSection title="States">
        <div className="navigation-demo-grid navigation-demo-grid-3">
          {states.map((state) => (
            <div className="navigation-demo-card" key={state}>
              <span className="navigation-demo-label">{state}</span>
              <Menu state={state}>
                <Items />
              </Menu>
            </div>
          ))}
        </div>
      </DemoSection>
      <DemoDocumentation
        importCode={docs.importCode}
        usageCode={docs.usageCode}
        props={docs.props}
      />
    </section>
  );
}
