import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./media-demo.css";

import { Video } from "shivanya-ui";

const video = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const importCode = `import { Video } from "shivanya-ui";`;
const usageCode = `<Video
  src="https://example.com/video.mp4"
  size="md"
  radius="md"
  variant="default"
  controls
  playsInline
/>`;
const props = [
  { name: "src", type: "string", defaultValue: '""', description: "Video source URL." },
  { name: "poster", type: "string", defaultValue: '""', description: "Poster image URL." },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"md"', description: "Controls video dimensions." },
  { name: "radius", type: '"none" | "sm" | "md" | "lg" | "full"', defaultValue: '"md"', description: "Controls corner radius." },
  { name: "variant", type: '"default" | "bordered" | "shadow"', defaultValue: '"default"', description: "Controls visual treatment." },
  { name: "state", type: '"default" | "loading" | "paused" | "playing" | "disabled"', defaultValue: '"default"', description: "Controls video state styling." },
  { name: "controls", type: "boolean", defaultValue: "true", description: "Shows native video controls." },
  { name: "autoPlay", type: "boolean", defaultValue: "false", description: "Starts playback automatically." },
  { name: "loop", type: "boolean", defaultValue: "false", description: "Loops playback." },
  { name: "muted", type: "boolean", defaultValue: "false", description: "Mutes the video." },
  { name: "playsInline", type: "boolean", defaultValue: "true", description: "Keeps playback inline on supported devices." },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables the video presentation." },
];

export default function VideoDemo() {
  return (
    <section className="demo">
      <DemoHeader title="Video" description="Display video content with responsive sizing, visual variants, playback options, and state styling." />

      <DemoSection title="Basic">
        <Video src={video} size="lg" controls playsInline />
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="media-demo-stack">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="media-demo-example">
              <span className="media-demo-label">{size.toUpperCase()}</span>
              <Video src={video} size={size} controls playsInline />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="media-demo-grid">
          {(["default", "bordered", "shadow"] as const).map((variant) => (
            <div key={variant} className="media-demo-card">
              <span className="media-demo-label">{variant}</span>
              <Video src={video} variant={variant} size="md" controls playsInline />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="media-demo-grid">
          {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
            <div key={radius} className="media-demo-card">
              <span className="media-demo-label">{radius}</span>
              <Video src={video} radius={radius} size="md" controls playsInline />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="media-demo-grid">
          {(["default", "loading", "paused", "playing", "disabled"] as const).map((state) => (
            <div key={state} className="media-demo-card">
              <span className="media-demo-label">{state}</span>
              <Video src={video} state={state} disabled={state === "disabled"} size="md" controls playsInline />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Playback Options">
        <div className="media-demo-grid">
          <div className="media-demo-card">
            <span className="media-demo-label">Muted</span>
            <Video src={video} muted controls playsInline />
          </div>
          <div className="media-demo-card">
            <span className="media-demo-label">Loop</span>
            <Video src={video} loop controls playsInline />
          </div>
          <div className="media-demo-card">
            <span className="media-demo-label">No Controls</span>
            <Video src={video} controls={false} playsInline />
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation importCode={importCode} usageCode={usageCode} props={props} />
    </section>
  );
}
