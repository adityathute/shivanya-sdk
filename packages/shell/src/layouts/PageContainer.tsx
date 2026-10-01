import type { CSSProperties, ElementType, ReactNode } from "react";

export function PageContainer({
  children,
  as: Component = "main",
  className = "",
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Component
      className={`shivanya-page-container ${className}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
}
