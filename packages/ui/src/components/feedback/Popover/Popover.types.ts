import type { HTMLAttributes, ReactNode } from "react";
export type PopoverSize = "xs" | "sm" | "md" | "lg" | "xl";
export type PopoverVariant = "default" | "bordered" | "filled" | "ghost";
export type PopoverRadius = "none" | "sm" | "md" | "lg" | "full";
export type PopoverPlacement = "top" | "right" | "bottom" | "left";
export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> { trigger: ReactNode; content: ReactNode; header?: ReactNode; footer?: ReactNode; open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; size?: PopoverSize; variant?: PopoverVariant; radius?: PopoverRadius; placement?: PopoverPlacement; disabled?: boolean; closeOnOutsideClick?: boolean; }
