export const IMAGE_CROPPER_DEFAULTS = {
  aspectRatio: 1,
  cropShape: "rect" as const,
  showGrid: false,
  zoom: { defaultValue: 1, min: 1, max: 3, step: 0.01 },
  output: { width: 500, height: 500, type: "image/jpeg", quality: 0.9, minQuality: 0.3, qualityStep: 0.1 },
};
export const IMAGE_CROPPER_SHAPES = Object.freeze(["rect", "round"] as const);
export const IMAGE_CROPPER_OUTPUT_TYPES = Object.freeze(["image/jpeg", "image/png", "image/webp"] as const);
export const IMAGE_CROPPER_LIMITS = Object.freeze({ MIN_ZOOM: 1, MAX_ZOOM: 3, ZOOM_STEP: 0.01, MIN_QUALITY: 0.3, MAX_QUALITY: 1, DEFAULT_SIZE: 500 });
