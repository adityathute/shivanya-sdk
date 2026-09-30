import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type CopyButtonSize =
  | "xs"
  | "sm"
  | "md"
  | "lg";

export type CopyButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline"
  | "ghost";

export interface CopyButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "onCopy"
  > {
  value: string;

  size?: CopyButtonSize;
  variant?: CopyButtonVariant;

  timeout?: number;

  disabled?: boolean;
  fullWidth?: boolean;

  copyText?: ReactNode;
  copiedText?: ReactNode;

  children?: ReactNode;

  onCopy?: (value: string) => void;
}