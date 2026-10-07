"use client";

import { AuthPageFooter } from "./AuthPageFooter.js";
import { AuthPageHeader } from "./AuthPageHeader.js";

export interface AuthPageLayoutProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
}

export function AuthPageLayout({
  title,
  subtitle,
  showHeader = true,
  showFooter = true,
  children,
}: AuthPageLayoutProps) {
  return (
    <main className="shivanya-auth-page">
      <div className="shivanya-auth-page-content">
        {showHeader && title && subtitle && (
          <AuthPageHeader
            title={title}
            subtitle={subtitle}
          />
        )}

        <div className="shivanya-auth-page-body">
          {children}
        </div>

        {showFooter && <AuthPageFooter />}
      </div>
    </main>
  );
}