"use client";

import { Typography } from "shivanya-ui";

export function AuthPageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Typography
      as="p"
      variant="caption"
      color="muted"
      align="center"
      size="sm"
      className="shivanya-auth-page-footer"
    >
      © {currentYear} ShivanyaMS • All rights reserved.
    </Typography>
  );
}