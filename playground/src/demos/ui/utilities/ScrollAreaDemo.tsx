import {
  ScrollArea,
  Typography,
  scrollAreaDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

const items = Array.from(
  { length: 18 },
  (_, index) => `Scrollable item ${index + 1}`
);

const verticalContent = (
  <div className="demo-scroll-area-items">
    {items.map((item) => (
      <div
        key={item}
        className="demo-scroll-area-item"
      >
        {item}
      </div>
    ))}
  </div>
);

export default function ScrollAreaDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={scrollAreaDocs.name}
        description={scrollAreaDocs.description}
      />

      <DemoSection title="Sizes">
        <div className="demo-scroll-area-grid">
          {(["sm", "md", "lg"] as const).map(
            (size) => (
              <div
                key={size}
                className="demo-scroll-area-example"
              >
                <Typography
                  variant="bodySmall"
                  weight="semibold"
                >
                  {size}
                </Typography>

                <ScrollArea
                  size={size}
                  variant="bordered"
                  maxHeight={180}
                >
                  {verticalContent}
                </ScrollArea>
              </div>
            )
          )}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="demo-scroll-area-grid">
          {(
            [
              "default",
              "bordered",
              "filled",
            ] as const
          ).map((variant) => (
            <ScrollArea
              key={variant}
              variant={variant}
              maxHeight={180}
            >
              {verticalContent}
            </ScrollArea>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="demo-scroll-area-radius-grid">
          {(
            [
              "none",
              "sm",
              "md",
              "lg",
              "full",
            ] as const
          ).map((radius) => (
            <ScrollArea
              key={radius}
              radius={radius}
              variant="bordered"
              maxHeight={100}
              maxWidth={180}
            >
              <Typography variant="bodySmall">
                {radius}
              </Typography>

              <Typography
                variant="bodySmall"
                color="secondary"
              >
                Scrollable content
              </Typography>
            </ScrollArea>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Direction">
        <div className="demo-scroll-area-direction">
          <ScrollArea
            type="vertical"
            variant="bordered"
            maxHeight={160}
          >
            {verticalContent}
          </ScrollArea>

          <ScrollArea
            type="horizontal"
            variant="bordered"
            maxWidth={500}
          >
            <div className="demo-scroll-area-horizontal-content">
              {items.map((item) => (
                <div
                  key={item}
                  className="demo-scroll-area-horizontal-item"
                >
                  {item}
                </div>
              ))}
            </div>
          </ScrollArea>

          <ScrollArea
            type="both"
            variant="bordered"
            maxHeight={160}
            maxWidth={500}
          >
            <div className="demo-scroll-area-both-content">
              {verticalContent}
            </div>
          </ScrollArea>
        </div>
      </DemoSection>

      <DemoSection title="Scrollbar">
        <div className="demo-scroll-area-scrollbar-grid">
          {(
            ["auto", "always", "hidden"] as const
          ).map((scrollbar) => (
            <ScrollArea
              key={scrollbar}
              scrollbar={scrollbar}
              variant="bordered"
              maxHeight={120}
              maxWidth={220}
            >
              {verticalContent}
            </ScrollArea>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-example-row">
          <ScrollArea
            state="default"
            variant="bordered"
            maxHeight={100}
          >
            {verticalContent}
          </ScrollArea>

          <ScrollArea
            state="disabled"
            disabled
            variant="bordered"
            maxHeight={100}
          >
            {verticalContent}
          </ScrollArea>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={scrollAreaDocs.importCode}
        usageCode={scrollAreaDocs.usageCode}
        props={scrollAreaDocs.props}
      />
    </section>
  );
}