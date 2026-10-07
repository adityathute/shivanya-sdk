"use client";

import { AuthProvider, ResetPassword } from "shivanya-auth";
import { Button } from "shivanya-ui";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "../auth-demo.css";

export default function ResetPasswordDemo() {
  const openPreview = () => {
    window.open(
      "/auth-preview/reset-password?token=demo-token",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Reset Password"
        description="Password reset form for creating a new password from a valid reset link."
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
            <ResetPassword
              token="demo-token"
              onComplete={() => {
                console.log("Sign in clicked");
              }}
            />
          </AuthProvider>
        </div>
      </DemoSection>
    </section>
  );
}