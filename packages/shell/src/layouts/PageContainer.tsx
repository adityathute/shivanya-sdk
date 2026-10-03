import type {
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

export interface PageContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
}

export function PageContainer({
  children,
  as: Component = "main",
  className = "",
  style,
  size = "lg",
  centered = true,
}: PageContainerProps) {
  return (
    <Component
      className={[
        "shivanya-page-container",
        `shivanya-page-container-${size}`,
        centered
          ? "shivanya-page-container-centered"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Component>
  );
}