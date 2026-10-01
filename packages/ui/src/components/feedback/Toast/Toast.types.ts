import type { HTMLAttributes, ReactNode } from "react";
export type ToastSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ToastVariant = "default" | "bordered" | "filled" | "ghost";
export type ToastRadius = "none" | "sm" | "md" | "lg" | "full";
export type ToastColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
export type ToastState = "default" | "loading" | "disabled";
export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { title?: ReactNode; icon?: ReactNode; closable?: boolean; onClose?: () => void; size?: ToastSize; variant?: ToastVariant; radius?: ToastRadius; color?: ToastColor; state?: ToastState; disabled?: boolean; duration?: number; children?: ReactNode; }
