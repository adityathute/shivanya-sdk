"use client";

import { AuthProvider, VerifyEmail } from "shivanya-auth";
import { Button } from "shivanya-ui";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "../auth-demo.css";

export default function VerifyEmailDemo() {
  const openPreview = () => {
    window.open(
      "/auth-preview/verify-email?token=demo-token",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Verify Email"
        description="Email verification flow for confirming a user's email address."
      />

      <DemoSection title="Preview">
        <div className="auth-demo-actions">
          <Button
            variant="primary"
            onClick={openPreview}
          >
            Open Full Preview
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Default">
        <div className="auth-demo-panel">
          <AuthProvider
            config={{
              baseUrl: "http://localhost:8000",
              mode: "cookie",
            }}
          >
            <VerifyEmail
              token="demo-token"
              onComplete={() => {
                console.log("Continue clicked");
              }}
            />
          </AuthProvider>
        </div>
      </DemoSection>
    </section>
  );
}