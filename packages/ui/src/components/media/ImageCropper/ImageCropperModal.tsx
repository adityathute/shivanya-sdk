"use client";
import { useEffect } from "react";
import type { ImageCropperModalProps } from "./ImageCropper.types";
import ImageCropper from "./ImageCropper";
import { Button, IconButton } from "shivanya-ui";
import { CloseIcon } from "../../../icons/icons/CloseIcon";

export default function ImageCropperModal({
  opened,
  image,
  crop,
  zoom,
  rotation = 0,
  aspectRatio,
  cropShape,
  showGrid,
  zoomOptions,
  title = "Crop Image",
  saveLabel = "Save",
  cancelLabel = "Cancel",
  saving = false,
  onCropChange,
  onZoomChange,
  onRotationChange,
  onCropComplete,
  onClose,
  onSave,
}: ImageCropperModalProps) {
  useEffect(() => {
    if (!opened) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [opened]);

  if (!opened) return null;

  return (
    <div
      className="imageCropperOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="imageCropperModal">
        <header className="imageCropperHeader">
          <h2 className="imageCropperTitle">
            {title}
          </h2>

          <IconButton
            size="sm"
            variant="ghost"
            rounded
            iconRotateOnHover
            className="imageCropperClose"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
        </header>

        <ImageCropper
          image={image}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspectRatio={aspectRatio}
          cropShape={cropShape}
          showGrid={showGrid}
          zoomOptions={zoomOptions}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onRotationChange={onRotationChange}
          onCropComplete={onCropComplete}
        />

        <footer className="imageCropperFooter">
          <Button
            variant="outline"
            onClick={onClose}
          >
            {cancelLabel}
          </Button>

          <Button
            variant="primary"
            onClick={onSave}
            disabled={saving}
          >
            {saving ? "Saving..." : saveLabel}
          </Button>
        </footer>
      </div>
    </div>
  );
}
