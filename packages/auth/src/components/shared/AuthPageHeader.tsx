"use client";

import { LockIcon, Typography } from "shivanya-ui";

export interface AuthPageHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthPageHeader({
  title,
  subtitle,
}: AuthPageHeaderProps) {
  return (
    <div className="shivanya-auth-page-header">
      <div className="shivanya-auth-page-header-icon">
        <LockIcon />
      </div>

      <Typography
        as="h2"
        variant="h3"
        weight="bold"
        align="center"
        className="shivanya-auth-page-header-title"
      >
        {title}
      </Typography>

      <Typography
        as="p"
        variant="body"
        size="sm"
        color="secondary"
        align="center"
        className="shivanya-auth-page-header-subtitle"
      >
        {subtitle}
      </Typography>
    </div>
  );
}