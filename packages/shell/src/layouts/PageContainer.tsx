import type { ReactNode } from "react";

export interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <main className={`shivanya-page-container ${className}`.trim()}>
      {children}
    </main>
  );
}