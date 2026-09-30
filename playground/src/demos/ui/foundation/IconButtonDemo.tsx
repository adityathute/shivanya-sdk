import {
  IconButton,
  iconButtonDocs,
} from "shivanya-ui";

import { CloseIcon } from "shivanya-ui/icons";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function IconButtonDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={iconButtonDocs.name}
        description={iconButtonDocs.description}
      />

      <DemoSection title="Variants">
        <div className="demo-example-row">
          <div className="demo-example-item">
            <IconButton
              iconRotateOnHover
              aria-label="Default close"
            >
              <CloseIcon />
            </IconButton>

            <span>Default</span>
          </div>

          <div className="demo-example-item">
            <IconButton
              iconRotateOnHover
              variant="outline"
              aria-label="Outline close"
            >
              <CloseIcon />
            </IconButton>

            <span>Outline</span>
          </div>

          <div className="demo-example-item">
            <IconButton
              iconRotateOnHover
              variant="solid"
              aria-label="Solid close"
            >
              <CloseIcon color="white" />
            </IconButton>

            <span>Solid</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="demo-example-row demo-example-row-align-end">
          {iconButtonDocs.sizes.map((size) => (
            <div
              key={size}
              className="demo-example-item"
            >
              <IconButton
                size={
                  size as
                    | "xs"
                    | "sm"
                    | "md"
                    | "lg"
                    | "xl"
                }
                iconRotateOnHover
                aria-label={`${size} close`}
              >
                <CloseIcon />
              </IconButton>

              <span>{size}</span>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={iconButtonDocs.importCode}
        usageCode={iconButtonDocs.usageCode}
        props={iconButtonDocs.props}
      />
    </section>
  );
}