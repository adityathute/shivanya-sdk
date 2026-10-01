import type { CSSProperties } from "react";
export interface CropPoint { x: number; y: number; }
export interface CropArea { x: number; y: number; width: number; height: number; }
export interface CropperZoomOptions { defaultValue: number; min: number; max: number; step: number; }
export interface ImageCropperProps { image?: string; crop: CropPoint; zoom: number; rotation?: number; aspectRatio?: number; cropShape?: "rect" | "round"; showGrid?: boolean; zoomOptions?: CropperZoomOptions; className?: string; style?: CSSProperties; onCropChange: (crop: CropPoint) => void; onZoomChange?: (zoom: number) => void; onRotationChange?: (rotation: number) => void; onCropComplete?: (area: CropArea, areaPixels: CropArea) => void; }
export interface ImageCropperModalProps extends ImageCropperProps { opened: boolean; title?: string; saveLabel?: string; cancelLabel?: string; saving?: boolean; onClose?: () => void; onSave?: () => void; }
