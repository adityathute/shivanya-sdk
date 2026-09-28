import type {
  ElementType,
  ReactNode,
} from "react";

export interface TypographyProps {
  children: ReactNode;
  as?: ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | "muted";
  align?: "left" | "center" | "right";
  className?: string;
}

export function Typography({
  children,
  as: Component = "p",
  variant = "body",
  size = "md",
  weight = "regular",
  color = "primary",
  align = "left",
  className = "",
}: TypographyProps) {
  const classes = [
    "shivanya-typography",
    `shivanya-typography-${variant}`,
    `shivanya-typography-${size}`,
    `shivanya-typography-${weight}`,
    `shivanya-typography-${color}`,
    `shivanya-typography-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}