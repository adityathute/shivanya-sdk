"use client";

import { AuthProvider, ForgotPassword } from "shivanya-auth";
import { Button } from "shivanya-ui";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "../auth-demo.css";

export default function ForgotPasswordDemo() {
  const openPreview = () => {
    window.open(
      "/auth-preview/forgot-password",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Forgot Password"
        description="Password reset form for users who have forgotten their account password."
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
            <ForgotPassword
              onBack={() => {
                console.log("Back to sign in");
              }}
            />
          </AuthProvider>
        </div>
      </DemoSection>
    </section>
  );
}