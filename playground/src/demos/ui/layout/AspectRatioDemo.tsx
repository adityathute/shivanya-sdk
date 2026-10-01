import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./layout-demo.css";

import { AspectRatio } from "shivanya-ui";

const ratios = ["1/1", "4/3", "3/2", "16/9", "21/9"] as const;

const props = [
  ["as", '"div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav"', '"div"'],
  ["ratio", '"1/1" | "4/3" | "3/2" | "16/9" | "21/9"', '"16/9"'],
  ["ratioValue", "string | number", "undefined"],
];

export default function AspectRatioDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Aspect Ratio" description="Maintain consistent proportions for responsive content." />

      <DemoSection title="Ratios">
        <div className="layout-demo-grid">
          {ratios.map((ratio) => (
            <div className="layout-demo-card" key={ratio}>
              <span className="layout-demo-label">{ratio}</span>
              <AspectRatio ratio={ratio} className="layout-demo-ratio">
                <div className="layout-demo-ratio-content">{ratio}</div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Custom Ratio">
        <div className="layout-demo-grid">
          {(["2 / 1", "5 / 4"] as const).map((ratio) => (
            <div className="layout-demo-card" key={ratio}>
              <span className="layout-demo-label">{ratio}</span>
              <AspectRatio ratioValue={ratio} className="layout-demo-ratio">
                <div className="layout-demo-ratio-content">Custom</div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Elements">
        <div className="layout-demo-grid">
          {(["div", "section", "article"] as const).map((as) => (
            <div className="layout-demo-card" key={as}>
              <span className="layout-demo-label">{as}</span>
              <AspectRatio as={as} ratio="16/9" className="layout-demo-ratio">
                <div className="layout-demo-ratio-content">{as}</div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { AspectRatio } from "shivanya-ui";'}
        usageCode={'<AspectRatio ratio="16/9">Content</AspectRatio>'}
        props={props.map(([name, type, defaultValue]) => ({ name, type, defaultValue, description: "AspectRatio property." }))}
      />
    </section>
  );
}
