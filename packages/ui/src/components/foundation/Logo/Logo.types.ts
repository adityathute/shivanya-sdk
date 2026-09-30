import type { HTMLAttributes, ReactNode } from "react";

export interface LogoBranding {
  name?: ReactNode;
  subtitle?: ReactNode;
  href?: string;
}

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  branding?: LogoBranding;
  link?: boolean;
  src?: string;
  alt?: string;
  imageSize?: number | string;
  children?: ReactNode;
}
