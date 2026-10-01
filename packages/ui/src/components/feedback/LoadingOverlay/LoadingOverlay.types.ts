import type { HTMLAttributes, ReactNode } from "react";
export interface LoadingOverlayProps extends HTMLAttributes<HTMLDivElement> { open?: boolean; label?: ReactNode; fullscreen?: boolean; transparent?: boolean; children?: ReactNode; }
