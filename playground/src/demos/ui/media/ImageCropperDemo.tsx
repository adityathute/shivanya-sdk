import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./media-demo.css";

import { Button, ImageCropper, ImageCropperModal, Typography, useImageCropper } from "shivanya-ui";

const image = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80";
const importCode = `import { ImageCropper, ImageCropperModal, useImageCropper } from "shivanya-ui";`;
const usageCode = `const cropper = useImageCropper({
  aspectRatio: 1,
  cropShape: "round",
  showGrid: true,
});

<ImageCropper
  image={image}
  crop={cropper.crop}
  zoom={cropper.zoom}
  rotation={cropper.rotation}
  aspectRatio={cropper.aspectRatio}
  cropShape={cropper.cropShape}
  showGrid={cropper.showGrid}
  onCropChange={cropper.setCrop}
  onZoomChange={cropper.setZoom}
  onRotationChange={cropper.setRotation}
  onCropComplete={cropper.onCropComplete}
/>`;
const props = [
  { name: "image", type: "string", defaultValue: "undefined", description: "Image source to crop." },
  { name: "crop", type: "CropPoint", defaultValue: "required", description: "Current crop position." },
  { name: "zoom", type: "number", defaultValue: "required", description: "Current zoom value." },
  { name: "rotation", type: "number", defaultValue: "0", description: "Image rotation in degrees." },
  { name: "aspectRatio", type: "number", defaultValue: "1", description: "Crop area aspect ratio." },
  { name: "cropShape", type: '"rect" | "round"', defaultValue: '"rect"', description: "Crop area shape." },
  { name: "showGrid", type: "boolean", defaultValue: "false", description: "Shows the crop grid." },
  { name: "zoomOptions", type: "CropperZoomOptions", defaultValue: "1 / 1 / 3 / 0.01", description: "Controls zoom range and step." },
  { name: "onCropChange", type: "(crop) => void", defaultValue: "required", description: "Called when crop position changes." },
  { name: "onZoomChange", type: "(zoom) => void", defaultValue: "undefined", description: "Called when zoom changes." },
  { name: "onRotationChange", type: "(rotation) => void", defaultValue: "undefined", description: "Called when rotation changes." },
  { name: "onCropComplete", type: "(area, areaPixels) => void", defaultValue: "undefined", description: "Called after crop selection changes." },
];

function CropperExample({ aspectRatio, cropShape, showGrid }: { aspectRatio: number; cropShape: "rect" | "round"; showGrid: boolean }) {
  const cropper = useImageCropper({ aspectRatio, cropShape, showGrid });
  return (
    <ImageCropper
      image={image}
      crop={cropper.crop}
      zoom={cropper.zoom}
      rotation={cropper.rotation}
      aspectRatio={cropper.aspectRatio}
      cropShape={cropper.cropShape}
      showGrid={cropper.showGrid}
      onCropChange={cropper.setCrop}
      onZoomChange={cropper.setZoom}
      onRotationChange={cropper.setRotation}
      onCropComplete={cropper.onCropComplete}
    />
  );
}

export default function ImageCropperDemo() {
  const [opened, setOpened] = useState(false);
  const modalCropper = useImageCropper({ aspectRatio: 1, cropShape: "round", showGrid: true });

  return (
    <section className="demo">
      <DemoHeader title="Image Cropper" description="Crop, zoom, rotate, and preview images with configurable aspect ratios and shapes." />

      <DemoSection title="Basic">
        <CropperExample aspectRatio={1} cropShape="rect" showGrid={false} />
      </DemoSection>

      <DemoSection title="Aspect Ratios">
        <div className="media-demo-grid">
          <div className="media-demo-card"><span className="media-demo-label">1 : 1</span><CropperExample aspectRatio={1} cropShape="rect" showGrid /></div>
          <div className="media-demo-card"><span className="media-demo-label">4 : 3</span><CropperExample aspectRatio={4 / 3} cropShape="rect" showGrid /></div>
          <div className="media-demo-card"><span className="media-demo-label">16 : 9</span><CropperExample aspectRatio={16 / 9} cropShape="rect" showGrid /></div>
        </div>
      </DemoSection>

      <DemoSection title="Crop Shapes">
        <div className="media-demo-grid">
          <div className="media-demo-card"><span className="media-demo-label">Rectangle</span><CropperExample aspectRatio={1} cropShape="rect" showGrid /></div>
          <div className="media-demo-card"><span className="media-demo-label">Round</span><CropperExample aspectRatio={1} cropShape="round" showGrid /></div>
        </div>
      </DemoSection>

      <DemoSection title="Grid">
        <div className="media-demo-grid">
          <div className="media-demo-card"><span className="media-demo-label">Hidden</span><CropperExample aspectRatio={1} cropShape="rect" showGrid={false} /></div>
          <div className="media-demo-card"><span className="media-demo-label">Visible</span><CropperExample aspectRatio={1} cropShape="rect" showGrid /></div>
        </div>
      </DemoSection>

      <DemoSection title="Modal">
        <div className="media-demo-stack">
          <Typography variant="bodySmall" color="secondary">Open the cropper inside the built-in modal presentation.</Typography>
          <Button onClick={() => setOpened(true)}>Open Cropper</Button>
        </div>
        <ImageCropperModal
          opened={opened}
          image={image}
          crop={modalCropper.crop}
          zoom={modalCropper.zoom}
          rotation={modalCropper.rotation}
          aspectRatio={modalCropper.aspectRatio}
          cropShape={modalCropper.cropShape}
          showGrid={modalCropper.showGrid}
          onCropChange={modalCropper.setCrop}
          onZoomChange={modalCropper.setZoom}
          onRotationChange={modalCropper.setRotation}
          onCropComplete={modalCropper.onCropComplete}
          onClose={() => setOpened(false)}
          onSave={() => setOpened(false)}
        />
      </DemoSection>

      <DemoDocumentation importCode={importCode} usageCode={usageCode} props={props} />
    </section>
  );
}
