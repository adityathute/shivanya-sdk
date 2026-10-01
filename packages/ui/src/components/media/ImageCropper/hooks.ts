import { useCallback, useState } from "react";
import { IMAGE_CROPPER_DEFAULTS } from "./config";
import type { CropArea, CropPoint, CropperZoomOptions } from "./ImageCropper.types";
export function useImageCropper(options: { aspectRatio?: number; cropShape?: "rect" | "round"; showGrid?: boolean; zoom?: Partial<CropperZoomOptions> } = {}) {
  const { aspectRatio = IMAGE_CROPPER_DEFAULTS.aspectRatio, cropShape = IMAGE_CROPPER_DEFAULTS.cropShape, showGrid = IMAGE_CROPPER_DEFAULTS.showGrid, zoom: customZoom } = options;
  const zoomOptions = { ...IMAGE_CROPPER_DEFAULTS.zoom, ...customZoom };
  const [crop, setCrop] = useState<CropPoint>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(zoomOptions.defaultValue);
  const [rotation, setRotation] = useState(0);
  const [croppedArea, setCroppedArea] = useState<CropArea | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropArea | null>(null);
  const onCropComplete = useCallback((area: CropArea, areaPixels: CropArea) => { setCroppedArea(area); setCroppedAreaPixels(areaPixels); }, []);
  const reset = useCallback(() => { setCrop({ x: 0, y: 0 }); setZoom(zoomOptions.defaultValue); setRotation(0); setCroppedArea(null); setCroppedAreaPixels(null); }, [zoomOptions.defaultValue]);
  return { aspectRatio, cropShape, showGrid, crop, zoom, rotation, croppedArea, croppedAreaPixels, setCrop, setZoom, setRotation, onCropComplete, reset };
}
