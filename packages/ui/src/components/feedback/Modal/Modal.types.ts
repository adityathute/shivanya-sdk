import type { HTMLAttributes, ReactNode } from "react";
export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";
export type ModalRadius = "none" | "sm" | "md" | "lg" | "full";
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { open?: boolean; title?: ReactNode; footer?: ReactNode; closable?: boolean; centered?: boolean; closeOnOverlayClick?: boolean; closeOnEscape?: boolean; size?: ModalSize; radius?: ModalRadius; onClose?: () => void; children?: ReactNode; }
