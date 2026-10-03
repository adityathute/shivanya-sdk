"use client";

import Cropper from "react-easy-crop";
import type { ChangeEvent } from "react";
import type { ImageCropperProps } from "./ImageCropper.types";
import { IMAGE_CROPPER_DEFAULTS } from "./config";
export default function ImageCropper({
  image,
  crop,
  zoom,
  rotation = 0,
  aspectRatio = IMAGE_CROPPER_DEFAULTS.aspectRatio,
  cropShape = IMAGE_CROPPER_DEFAULTS.cropShape,
  showGrid = IMAGE_CROPPER_DEFAULTS.showGrid,
  zoomOptions = IMAGE_CROPPER_DEFAULTS.zoom,
  className = "",
  onCropChange,
  onZoomChange,
  onRotationChange,
  onCropComplete,
}: ImageCropperProps) {
  if (!image) return null;
  return (
    <div
      className={["shivanya-image-cropper", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="imageCropperArea">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={aspectRatio}
          cropShape={cropShape}
          showGrid={showGrid}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onRotationChange={onRotationChange}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="imageCropperControls">
        <input
          className="imageCropperSlider"
          type="range"
          min={zoomOptions.min}
          max={zoomOptions.max}
          step={zoomOptions.step}
          value={zoom}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onZoomChange?.(Number(event.target.value))
          }
          aria-label="Zoom"
        />
      </div>
    </div>
  );
}
