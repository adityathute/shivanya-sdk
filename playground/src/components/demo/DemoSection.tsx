import type { ReactNode } from "react";
import { Typography } from "shivanya-ui";

interface DemoSectionProps {
  title: string;
  children: ReactNode;
}

export default function DemoSection({
  title,
  children,
}: DemoSectionProps) {
  return (
    <section className="demo-section">
      <Typography
        variant="h3"
        className="demo-section-title"
      >
        {title}
      </Typography>

      <div className="demo-section-content">
        {children}
      </div>
    </section>
  );
}