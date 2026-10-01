import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./navigation-demo.css";

import { Breadcrumb } from "shivanya-ui";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const variants = ["default", "filled", "outlined", "ghost"] as const;
const radii = ["none", "sm", "md", "lg", "full"] as const;
const states = ["default", "loading", "disabled"] as const;

const docs = {
  importCode: `import { Breadcrumb } from "shivanya-ui";`,
  usageCode: `<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item current>Details</Breadcrumb.Item>
</Breadcrumb>`,
  props: [
    {
      name: "size",
      type: "xs | sm | md | lg | xl",
      default: "md",
    },
    {
      name: "variant",
      type: "default | filled | outlined | ghost",
      default: "default",
    },
    {
      name: "radius",
      type: "none | sm | md | lg | full",
      default: "md",
    },
    {
      name: "separator",
      type: "ReactNode",
      default: "/",
    },
    {
      name: "separatorPosition",
      type: "start | end",
      default: "end",
    },
    {
      name: "maxItems",
      type: "number",
      default: "0",
    },
    {
      name: "state",
      type: "default | loading | disabled",
      default: "default",
    },
  ],
};

function breadcrumbItems() {
  return [
    <Breadcrumb.Item key="home" href="/">
      Home
    </Breadcrumb.Item>,
    <Breadcrumb.Item key="products" href="/products">
      Products
    </Breadcrumb.Item>,
    <Breadcrumb.Item key="details" current>
      Details
    </Breadcrumb.Item>,
  ];
}

export default function BreadcrumbDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="Breadcrumb"
        description="Shows the current location within a navigation hierarchy."
      />

      <DemoSection title="Basic">
        <Breadcrumb>
          {breadcrumbItems()}
        </Breadcrumb>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="navigation-demo-grid navigation-demo-grid-5">
          {sizes.map((size) => (
            <div
              className="navigation-demo-card"
              key={size}
            >
              <span className="navigation-demo-label">
                {size.toUpperCase()}
              </span>

              <Breadcrumb size={size}>
                {breadcrumbItems()}
              </Breadcrumb>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="navigation-demo-grid navigation-demo-grid-4">
          {variants.map((variant) => (
            <div
              className="navigation-demo-card"
              key={variant}
            >
              <span className="navigation-demo-label">
                {variant}
              </span>

              <Breadcrumb variant={variant}>
                {breadcrumbItems()}
              </Breadcrumb>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="navigation-demo-grid navigation-demo-grid-5">
          {radii.map((radius) => (
            <div
              className="navigation-demo-card"
              key={radius}
            >
              <span className="navigation-demo-label">
                {radius}
              </span>

              <Breadcrumb radius={radius}>
                {breadcrumbItems()}
              </Breadcrumb>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Separator Position">
        <div className="navigation-demo-grid navigation-demo-grid-2">
          <div className="navigation-demo-card">
            <span className="navigation-demo-label">
              START
            </span>

            <Breadcrumb
              separator="/"
              separatorPosition="start"
            >
              {breadcrumbItems()}
            </Breadcrumb>

            <span className="navigation-demo-note">
              Separators appear before each breadcrumb item.
            </span>
          </div>

          <div className="navigation-demo-card">
            <span className="navigation-demo-label">
              END
            </span>

            <Breadcrumb
              separator="/"
              separatorPosition="end"
            >
              {breadcrumbItems()}
            </Breadcrumb>

            <span className="navigation-demo-note">
              Separators appear after each breadcrumb item.
            </span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="navigation-demo-grid navigation-demo-grid-3">
          {states.map((state) => (
            <div
              className="navigation-demo-card"
              key={state}
            >
              <span className="navigation-demo-label">
                {state}
              </span>

              <Breadcrumb state={state}>
                {breadcrumbItems()}
              </Breadcrumb>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Collapse">
        <Breadcrumb maxItems={3}>
          <Breadcrumb.Item key="home">
            Home
          </Breadcrumb.Item>

          <Breadcrumb.Item key="products">
            Products
          </Breadcrumb.Item>

          <Breadcrumb.Item key="category">
            Category
          </Breadcrumb.Item>

          <Breadcrumb.Item key="item">
            Item
          </Breadcrumb.Item>

          <Breadcrumb.Item key="details" current>
            Details
          </Breadcrumb.Item>
        </Breadcrumb>
      </DemoSection>

      <DemoSection title="Custom Separator">
        <Breadcrumb separator="›">
          {breadcrumbItems()}
        </Breadcrumb>
      </DemoSection>

      <DemoDocumentation
        importCode={docs.importCode}
        usageCode={docs.usageCode}
        props={docs.props}
      />
    </section>
  );
}