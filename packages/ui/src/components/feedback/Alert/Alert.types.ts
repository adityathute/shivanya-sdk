import type { HTMLAttributes, ReactNode } from "react";

export type AlertSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AlertVariant = "default" | "bordered" | "filled" | "ghost";
export type AlertRadius = "none" | "sm" | "md" | "lg" | "full";
export type AlertColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
export type AlertState = "default" | "loading" | "disabled";
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { title?: ReactNode; icon?: ReactNode; closable?: boolean; onClose?: () => void; size?: AlertSize; variant?: AlertVariant; radius?: AlertRadius; color?: AlertColor; state?: AlertState; disabled?: boolean; children?: ReactNode; }
