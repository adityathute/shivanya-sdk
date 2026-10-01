import type { HTMLAttributes, ReactNode } from "react";
export type ConfirmDialogSize = "sm" | "md" | "lg";
export type ConfirmDialogVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "info";
export interface ConfirmDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { open?: boolean; title?: ReactNode; message?: ReactNode; confirmText?: ReactNode; cancelText?: ReactNode; variant?: ConfirmDialogVariant; size?: ConfirmDialogSize; loading?: boolean; disabled?: boolean; fullWidth?: boolean; closeOnOverlayClick?: boolean; closeOnEscape?: boolean; onConfirm?: () => void; onCancel?: () => void; }
