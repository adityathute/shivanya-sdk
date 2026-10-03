"use client";

import { useEffect, useState } from "react";

import {
  PageHeader,
  WebsiteShell,
} from "shivanya-shell";

import {
  branding,
  DemoButton,
} from "../_demo-utils";

import "../shell-demo.css";

export default function WebsiteShellPreview() {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [contentPadding, setContentPadding] = useState(24);

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search,
    );

    setShowHeader(
      params.get("showHeader") !== "false",
    );

    setShowFooter(
      params.get("showFooter") !== "false",
    );

    const padding = Number(
      params.get("contentPadding"),
    );

    if (Number.isFinite(padding) && padding >= 0) {
      setContentPadding(padding);
    }
  }, []);

  return (
    <WebsiteShell
      branding={branding}
      showHeader={showHeader}
      showFooter={showFooter}
      contentPadding={contentPadding}
      headerEnd={
        <DemoButton>
          Sign in
        </DemoButton>
      }
      footer={
        <>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </>
      }
    >
      <div className="shell-demo-dashboard-page">
        <PageHeader
          title="Public page"
          description="A reusable website layout without application navigation."
          actions={
            <DemoButton primary>
              Get Started
            </DemoButton>
          }
        />

        <div className="shell-demo-card">
          <strong>Website content</strong>

          <p className="shell-demo-muted">
            WebsiteShell provides the shared header, content area,
            responsive structure, and optional footer.
          </p>
        </div>

        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            <strong>Simple</strong>

            <p className="shell-demo-muted">
              Focused public-facing layout.
            </p>
          </div>

          <div className="shell-demo-card">
            <strong>Reusable</strong>

            <p className="shell-demo-muted">
              Compose your own page content.
            </p>
          </div>
        </div>
      </div>
    </WebsiteShell>
  );
}