import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./media-demo.css";

import { Image, Typography } from "shivanya-ui";

const image = "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&q=80";
const importCode = `import { Image } from "shivanya-ui";`;
const usageCode = `<Image
  src="https://example.com/image.jpg"
  alt="Example"
  size="md"
  fit="cover"
  radius="md"
  variant="default"
/>`;
const props = [
  { name: "src", type: "string", defaultValue: '""', description: "Image source URL." },
  { name: "alt", type: "string", defaultValue: '""', description: "Alternative text." },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"md"', description: "Controls image dimensions." },
  { name: "fit", type: '"contain" | "cover" | "fill" | "none" | "scaleDown"', defaultValue: '"cover"', description: "Controls object-fit behavior." },
  { name: "radius", type: '"none" | "sm" | "md" | "lg" | "full"', defaultValue: '"md"', description: "Controls corner radius." },
  { name: "variant", type: '"default" | "bordered" | "rounded" | "shadow"', defaultValue: '"default"', description: "Controls visual treatment." },
  { name: "state", type: '"default" | "loading" | "error" | "disabled"', defaultValue: '"default"', description: "Controls image state styling." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables the image presentation." },
];

export default function ImageDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Image" description="Display responsive images with size, fit, radius, variant, and state controls." />

      <DemoSection title="Basic">
        <div className="media-demo-preview">
          <Image src={image} alt="Mountain landscape" size="lg" />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="media-demo-grid media-demo-image-grid">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="media-demo-card media-demo-image-card">
              <span className="media-demo-label">{size.toUpperCase()}</span>
              <Image src={image} alt={size} size={size} />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Fit">
        <div className="media-demo-grid media-demo-image-grid">
          {(["contain", "cover", "fill", "none", "scaleDown"] as const).map((fit) => (
            <div key={fit} className="media-demo-card media-demo-image-card">
              <span className="media-demo-label">{fit}</span>
              <Image src={image} alt={fit} fit={fit} size="md" />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="media-demo-grid media-demo-image-grid">
          {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
            <div key={radius} className="media-demo-card media-demo-image-card">
              <span className="media-demo-label">{radius}</span>
              <Image src={image} alt={radius} radius={radius} size="md" />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="media-demo-grid media-demo-image-grid">
          {(["default", "bordered", "rounded", "shadow"] as const).map((variant) => (
            <div key={variant} className="media-demo-card media-demo-image-card">
              <span className="media-demo-label">{variant}</span>
              <Image src={image} alt={variant} variant={variant} size="md" />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="media-demo-grid media-demo-image-grid">
          {(["default", "loading", "error", "disabled"] as const).map((state) => (
            <div key={state} className="media-demo-card media-demo-image-card">
              <span className="media-demo-label">{state}</span>
              <Image src={image} alt={state} state={state} disabled={state === "disabled"} size="md" />
            </div>
          ))}
        </div>
        <Typography variant="bodySmall" color="secondary">
          Loading and error are visual states exposed by the component; this demo intentionally keeps the image source valid so the state styling can be inspected.
        </Typography>
      </DemoSection>

      <DemoDocumentation importCode={importCode} usageCode={usageCode} props={props} />
    </section>
  );
}
