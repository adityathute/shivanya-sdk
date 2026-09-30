import type { ReactNode } from "react";

export interface FileUploadProps {
  files?: File[];
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxFiles?: number;
  maxFileSize?: number;
  minFileSize?: number;
  preview?: boolean;
  removable?: boolean;
  className?: string;
  children?: ReactNode;
  onChange?: (files: File[]) => void;
  onError?: (message: string) => void;
}