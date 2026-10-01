import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./media-demo.css";

import { Carousel, Typography } from "shivanya-ui";

const slides = [
  { title: "Slide One", text: "Build reusable interfaces with Shivanya UI." },
  { title: "Slide Two", text: "Explore consistent components and design tokens." },
  { title: "Slide Three", text: "Use media components in any application." },
];

const importCode = `import { Carousel } from "shivanya-ui";`;
const usageCode = `<Carousel size="md" variant="bordered" radius="md" showArrows showIndicators>
  <div>Slide One</div>
  <div>Slide Two</div>
  <div>Slide Three</div>
</Carousel>`;
const props = [
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls carousel size." },
  { name: "variant", type: '"default" | "bordered" | "shadow"', defaultValue: '"default"', description: "Controls visual treatment." },
  { name: "radius", type: '"none" | "sm" | "md" | "lg" | "full"', defaultValue: '"md"', description: "Controls corner radius." },
  { name: "state", type: '"default" | "autoplay" | "paused" | "disabled"', defaultValue: '"default"', description: "Controls carousel state styling." },
  { name: "autoplay", type: "boolean", defaultValue: "false", description: "Automatically advances slides." },
  { name: "loop", type: "boolean", defaultValue: "false", description: "Loops from the last slide to the first." },
  { name: "interval", type: "number", defaultValue: "3000", description: "Autoplay interval in milliseconds." },
  { name: "showArrows", type: "boolean", defaultValue: "true", description: "Shows previous and next controls." },
  { name: "showIndicators", type: "boolean", defaultValue: "true", description: "Shows slide indicators." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables the carousel presentation." },
];

function Slide({ title, text }: { title: string; text: string }) {
  return (
    <div className="media-demo-carousel-slide">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="bodySmall" color="secondary">{text}</Typography>
    </div>
  );
}

export default function CarouselDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Carousel" description="Display a collection of slides with navigation, indicators, autoplay, and visual variants." />

      <DemoSection title="Basic">
        <Carousel>
          {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
        </Carousel>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="media-demo-stack">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="media-demo-example">
              <span className="media-demo-label">{size.toUpperCase()}</span>
              <Carousel size={size}>
                {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
              </Carousel>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="media-demo-grid">
          {(["default", "bordered", "shadow"] as const).map((variant) => (
            <div key={variant} className="media-demo-card">
              <span className="media-demo-label">{variant}</span>
              <Carousel variant={variant}>
                {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
              </Carousel>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="media-demo-grid">
          {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
            <div key={radius} className="media-demo-card">
              <span className="media-demo-label">{radius}</span>
              <Carousel radius={radius}>
                {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
              </Carousel>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="media-demo-grid">
          {(["default", "autoplay", "paused", "disabled"] as const).map((state) => (
            <div key={state} className="media-demo-card">
              <span className="media-demo-label">{state}</span>
              <Carousel state={state} autoplay={state === "autoplay"} disabled={state === "disabled"} loop>
                {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
              </Carousel>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Controls">
        <div className="media-demo-grid">
          <div className="media-demo-card">
            <span className="media-demo-label">Arrows Hidden</span>
            <Carousel showArrows={false}>
              {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
            </Carousel>
          </div>
          <div className="media-demo-card">
            <span className="media-demo-label">Indicators Hidden</span>
            <Carousel showIndicators={false}>
              {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
            </Carousel>
          </div>
          <div className="media-demo-card">
            <span className="media-demo-label">Loop + Autoplay</span>
            <Carousel autoplay loop interval={1800}>
              {slides.map((slide) => <Slide key={slide.title} {...slide} />)}
            </Carousel>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation importCode={importCode} usageCode={usageCode} props={props} />
    </section>
  );
}
