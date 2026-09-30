import type { ReactNode } from "react";
import { Typography } from "shivanya-ui";

interface DemoHeaderProps {
  title: string;
  description: ReactNode;
}

export default function DemoHeader({
  title,
  description,
}: DemoHeaderProps) {
  return (
    <header className="demo-header">
      <Typography
        variant="h2"
        className="demo-header-title"
      >
        {title}
      </Typography>

      <Typography
        color="secondary"
        className="demo-header-description"
      >
        {description}
      </Typography>
    </header>
  );
}