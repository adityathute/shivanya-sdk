import type { HTMLAttributes, ReactNode } from "react";
export type NotificationVariant = "default" | "primary" | "success" | "warning" | "danger" | "info";
export type NotificationSize = "sm" | "md" | "lg";
export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { title?: ReactNode; icon?: ReactNode; closable?: boolean; onClose?: () => void; variant?: NotificationVariant; size?: NotificationSize; duration?: number; children?: ReactNode; }
