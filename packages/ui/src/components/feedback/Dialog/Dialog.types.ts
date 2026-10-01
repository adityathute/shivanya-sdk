import type { HTMLAttributes, ReactNode } from "react";
export type DialogSize = "sm" | "md" | "lg" | "xl";
export type DialogVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
export type DialogRadius = "none" | "sm" | "md" | "lg" | "full";
export type DialogState = "default" | "loading" | "disabled";
export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { open?: boolean; title?: ReactNode; footer?: ReactNode; closable?: boolean; onClose?: () => void; closeOnOverlayClick?: boolean; closeOnEscape?: boolean; size?: DialogSize; variant?: DialogVariant; radius?: DialogRadius; state?: DialogState; disabled?: boolean; children?: ReactNode; }
